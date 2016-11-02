package com.madhusudhan.jsd.adv;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ParameterizedPreparedStatementSetter;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSourceUtils;
import org.springframework.jdbc.object.SqlUpdate;

import com.madhusudhan.jsd.domain.Trade;

public class JdbcTemplateBatchTest {

	private ApplicationContext ctx = null;
	private JdbcTemplate template = null;
	private NamedParameterJdbcTemplate namedTemplate = null;
	private DataSource datasource = null;

	public JdbcTemplateBatchTest() {
		ctx = new ClassPathXmlApplicationContext("datasources-beans.xml");
		datasource = ctx.getBean("mySqlDataSource", DataSource.class);
		System.out.println("Datasource obtained:" + datasource);
		template = new JdbcTemplate(datasource);
		namedTemplate = new NamedParameterJdbcTemplate(datasource);
	}

	private int[] insertTradesList(final List<Trade> trades) {
		SqlParameterSource[] tradesList = SqlParameterSourceUtils
				.createBatch(trades.toArray());
		int[] updatesCount = namedTemplate
				.batchUpdate(
						"insert into TRADES values(:id,:account,:security,:quantity,:status,:direction)",
						tradesList);

		return updatesCount;
	}

	private int[] insertTrades(final List<Trade> trades) {
		int[] updatesCount = template.batchUpdate(
				"insert into TRADES values(?,?,?,?,?,?)",
				new BatchPreparedStatementSetter() {

					@Override
					public void setValues(PreparedStatement ps, int i)
							throws SQLException {
						Trade t = trades.get(i);
						ps.setInt(1, t.getId());
						ps.setString(2, t.getAccount());
						ps.setString(3, t.getSecurity());
						ps.setInt(4, t.getQuantity());
						ps.setString(5, t.getStatus());
						ps.setString(6, t.getDirection());
					}

					@Override
					public int getBatchSize() {
						System.out.println("batch size");
						return 10;
					}
				});

		return updatesCount;
	}
	
	private int[][] insertTradesInBatches(final List<Trade> trades, int batchSize){
		int[][] updateCount = template.batchUpdate(
				"insert into TRADES values(?,?,?,?,?,?)",trades, batchSize,new ParameterizedPreparedStatementSetter<Trade>(){
					@Override
					public void setValues(PreparedStatement ps, Trade t)
							throws SQLException {
						ps.setInt(1, t.getId());
						ps.setString(2, t.getAccount());
						ps.setString(3, t.getSecurity());
						ps.setInt(4, t.getQuantity());
						ps.setString(5, t.getStatus());
						ps.setString(6, t.getDirection());
					}});
		System.out.println("-->"+updateCount);
		
		return updateCount;
	}

	private List<Trade> createTrades() {
		List<Trade> trades = new ArrayList<Trade>();
		Trade t = null;
		for (int i = 10; i < 100; i++) {
			t = new Trade();
			t.setId(i);
			t.setAccount("ABC" + i);
			t.setSecurity("SEC" + i + "XXX");
			t.setQuantity(i * i * 100);
			t.setDirection("BUY");
			t.setStatus("NEW");
			trades.add(t);
		}
		return trades;
	}

	public static void main(String[] args) {
		JdbcTemplateBatchTest t = new JdbcTemplateBatchTest();

//		 int[] updates = t.insertTrades(t.createTrades());

//		int[] updates = t.insertTradesList(t.createTrades());

		int[][] updates = t.insertTradesInBatches(t.createTrades(),10);
		for(int i = 0; i < updates.length; i ++){
			for(int j = 0; j < updates.length; j ++){
				
				System.out.println("Element: "+i+","+j+","+updates[i][j]);
			}
		}
	}

}
