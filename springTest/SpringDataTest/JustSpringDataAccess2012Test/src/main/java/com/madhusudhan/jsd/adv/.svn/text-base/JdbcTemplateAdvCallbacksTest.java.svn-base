package com.madhusudhan.jsd.adv;

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
import org.springframework.jdbc.core.CallableStatementCreator;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCallback;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.jdbc.core.RowCountCallbackHandler;

import com.madhusudhan.jsd.domain.Trade;

public class JdbcTemplateAdvCallbacksTest {

	private ApplicationContext ctx = null;
	private JdbcTemplate template = null;
	private DataSource datasource = null;

	public JdbcTemplateAdvCallbacksTest() {
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

		System.out.println("Trade via anonymous PS: " + t);
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

	public void testPSCallbackViaCreator() throws Exception {
		Map<Integer, Object> tradeIdAccountsMap = template.execute(
				new PSCreator(), new PSCallback());
		System.out.println("ID-ACCOUNTS map:" + tradeIdAccountsMap);
	}

	class PSCreator implements PreparedStatementCreator {

		@Override
		public PreparedStatement createPreparedStatement(Connection con)
				throws SQLException {
			PreparedStatement ps = con
					.prepareStatement("select * from TRADES where id=?");
			ps.setLong(1, 5);

			return ps;
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

	/***************/
	// CS
	/***************/
	public void testCSCallback1() throws Exception {
		template.execute("select * from TRADES", new CSCallback());
	}

	class CSCreator implements CallableStatementCreator {

		@Override
		public CallableStatement createCallableStatement(Connection con)
				throws SQLException {
			return null;
		}

	}

	private class CSCallback implements CallableStatementCallback {

		@Override
		public Object doInCallableStatement(CallableStatement cs)
				throws SQLException, DataAccessException {
			// TODO Auto-generated method stub
			return null;
		}

	}

	// Rowhandler

	private void bigTradeCountHanlderTemp() {
		template.query("select * from TRADES", new RowCallbackHandler() {
			Map<Integer, Object> tradeIdAccountsMap = new HashMap<Integer, Object>();

			@Override
			public void processRow(ResultSet rs) throws SQLException {
				while (rs.next()) {
					int tradeId = rs.getInt(1);
					String account = rs.getString(2);
					tradeIdAccountsMap.put(tradeId, account);
				}
				System.out
						.println("tradeID-Accounts Map:" + tradeIdAccountsMap);
			}
		});
	}

	private void bigTradeCountHanlder(double quantity) {
		BigTradeCounter counter = new BigTradeCounter(quantity);
		template.query("select * from TRADES", counter);
		System.out.println("Big Trades" + counter.getBigTradeCount());

	}

	private void tradeCount() {
		RowCountCallbackHandler counter = new RowCountCallbackHandler();
		template.query("select * from TRADES", counter);
		System.out.println("Number of trades: " + counter.getRowCount());

	}

	

	class BigTradeCounter implements RowCallbackHandler {
		int bigTradeCount = 0;
		double quantity = 0;

		BigTradeCounter(double quantity) {
			this.quantity = quantity;
		}

		@Override
		public void processRow(ResultSet rs) throws SQLException {
			while (rs.next()) {
				if (rs.getDouble(4) > this.quantity) {
					System.out.println("Big Trade Id:" + rs.getString(1));
					bigTradeCount++;
				}
			}
		}

		public int getBigTradeCount() {
			return bigTradeCount;
		}

	}

	public static void main(String[] args) throws Exception {
		JdbcTemplateAdvCallbacksTest t = new JdbcTemplateAdvCallbacksTest();
		// t.getTradesViaPSCallback();
		// t.getTradePSCallbackAsAnonymous();
		// t.testPSCallbackViaCreator();
		// t.testRowCallbackHandler();
		// t.bigTradeCountHanlder(5000);
		t.tradeCount();
	}

}
