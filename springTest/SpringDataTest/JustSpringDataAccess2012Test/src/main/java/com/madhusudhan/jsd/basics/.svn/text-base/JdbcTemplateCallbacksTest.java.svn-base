package com.madhusudhan.jsd.basics;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.CallableStatementCallback;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCallback;
import org.springframework.jdbc.core.PreparedStatementCreator;

import com.madhusudhan.jsd.domain.Trade;

public class JdbcTemplateCallbacksTest {

	private ApplicationContext ctx = null;
	private JdbcTemplate template = null;
	private DataSource datasource = null;

	public JdbcTemplateCallbacksTest() {
		ctx = new ClassPathXmlApplicationContext("datasources-beans.xml");
		datasource = ctx.getBean("mySqlDataSource", DataSource.class);
		System.out.println("Datasource obtained:" + datasource);
		template = new JdbcTemplate(datasource);
	}

	public void getTradePSCallbackAsAnonymous() throws Exception {
		
		Trade t = template.execute("select * from TRADES where id = 3",
				new PreparedStatementCallback<Trade>() {
			private Trade t = new Trade();
					@Override
					public Trade doInPreparedStatement(PreparedStatement ps)
							throws SQLException, DataAccessException {

						ResultSet rs = ps.executeQuery();

						while (rs.next()) {
							t.setId(rs.getInt(1));
							t.setAccount(rs.getString(2));
						}
						
						return t;
					}
				});
		
		System.out.println("Trade via anonymous PS: "+t);
	}

	public void getTradesViaPSCallback() throws Exception {
		Map<Integer, Object> tradeIdAccountsMap = template.execute(
				"select * from TRADES where id < 3", new PSCallback());
		System.out.println("ID-ACCOUNTS map:" + tradeIdAccountsMap);
	}

	private class PSCallback implements
			PreparedStatementCallback<Map<Integer, Object>> {
		Map<Integer, Object> tradeIdAccountsMap = new HashMap<Integer, Object>();

		@Override
		public Map<Integer, Object> doInPreparedStatement(PreparedStatement ps)
				throws SQLException, DataAccessException {
			ResultSet rs = ps.executeQuery();

			while (rs.next()) {
				int tradeId = rs.getInt(1);
				String account = rs.getString(2);
				tradeIdAccountsMap.put(tradeId, account);
			}
			return tradeIdAccountsMap;
		}

	}

	public void testPSCallback2() throws Exception {
		template.execute(new PreparedStatementCreator() {

			@Override
			public PreparedStatement createPreparedStatement(Connection con)
					throws SQLException {
				return null;
			}
		}, new PreparedStatementCallback<Trade>() {

			@Override
			public Trade doInPreparedStatement(PreparedStatement ps)
					throws SQLException, DataAccessException {
				// TODO Auto-generated method stub
				return null;
			}
		});
	}

	class PSCreator implements PreparedStatementCreator {

		@Override
		public PreparedStatement createPreparedStatement(Connection con)
				throws SQLException {
			return null;
		}

	}

	private void testCSCallback() {
		template.execute("", new CallableStatementCallback<List<Trade>>() {

			@Override
			public List<Trade> doInCallableStatement(CallableStatement cs)
					throws SQLException, DataAccessException {

				// do your processing here with the cs
				List<Trade> trades = null;
				return trades;
			}
		});
	}

	public static void main(String[] args) throws Exception {
		JdbcTemplateCallbacksTest t = new JdbcTemplateCallbacksTest();
//		t.getTradesViaPSCallback();
		t.getTradePSCallbackAsAnonymous();
	}
}
