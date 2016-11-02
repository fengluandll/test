package com.madhusudhan.jsd.basics;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;

public class JdbcTemplateInsertsTest {

	private ApplicationContext ctx = null;
	private JdbcTemplate template = null;
	private DataSource datasource = null;

	public JdbcTemplateInsertsTest() {
		ctx = new ClassPathXmlApplicationContext("datasources-beans.xml");
		datasource = ctx.getBean("mySqlDataSource", DataSource.class);
		System.out.println("Datasource obtained:" + datasource);
		template = new JdbcTemplate(datasource);
	}

	private void insertTrade() {
		int rowsUpdated = template
				.update("insert into TRADES values(?,?,?,?,?,?)", 61,"JSDATA","REV",500000,"NEW","SELL");
		
		System.out.println("Rows Updated:" + rowsUpdated);
	}

	private void updateTrade(String status, int id) {
		// int rowsUpdated =
		// template.update("update TRADES set status='"+status+"' where id="+id+"");

		int rowsUpdated = template.update(
				"update TRADES set status=? where id=?", status, id);

		System.out.println("Rows Updated:" + rowsUpdated);
	}

	private void replayTradesUsingSP(List tradeIds) {

		template.update(
				"call JSDATA.REPLAY_TRADES_SP (?)", tradeIds);
	}

	private void updateTradeUsingTypes(String status, int id) {

		int rowsUpdated = template.update(
				"update TRADES set status=? where id=?", new Object[] { status,
						id }, new int[] { java.sql.Types.VARCHAR,
						java.sql.Types.INTEGER });

		System.out.println("Rows Updated:" + rowsUpdated);
	}

	private void deleteTrade(int id){
		int rowsUpdated = template.update("deleted from TRADES where id=?",id);
		System.out.println("Rows Updated:" + rowsUpdated);		
	}
	
	private void updateTradeUsingTypes2(String status, int id) {

		int rowsUpdated = template.update(
				"update TRADES set status=? where id=?", new Object[] { "UNKNOWN",
						"6" }, new int[] { java.sql.Types.VARCHAR,
						java.sql.Types.INTEGER });

		System.out.println("Rows Updated:" + rowsUpdated);
	}

	public static void main(String[] args) {
		JdbcTemplateInsertsTest t = new JdbcTemplateInsertsTest();
//		t.insertTrade();
		t.updateTrade("CANCEL", 61);
//		t.updateTradeUsingTypes("COMMIT", 6);
	}
}
