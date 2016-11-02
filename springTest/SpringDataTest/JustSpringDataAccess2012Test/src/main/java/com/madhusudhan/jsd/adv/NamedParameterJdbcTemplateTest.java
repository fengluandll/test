package com.madhusudhan.jsd.adv;

import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcOperations;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;

import com.madhusudhan.jsd.domain.Trade;

public class NamedParameterJdbcTemplateTest {

	private ApplicationContext ctx = null;
	private NamedParameterJdbcTemplate template = null;
	private DataSource datasource = null;
	
	public NamedParameterJdbcTemplateTest() {
		ctx = new ClassPathXmlApplicationContext("datasources-beans.xml");
		datasource = ctx.getBean("mySqlDataSource",DataSource.class);
		System.out.println("Datasource obtained:"+datasource);
		template = new NamedParameterJdbcTemplate(datasource);
	}
	
	public int getTradesCount(String s, String a){
		Map bindValues = new HashMap();
		bindValues.put("status", s);
		bindValues.put("account", a);
		int numOfTrades = template.queryForInt("select count(*) from TRADES where account=:account and status=:status", bindValues);
		System.out.println("Number of Trades: "+numOfTrades);
		return numOfTrades;
	}

	public int getTradesCountUsingSqlParameterSource(String s, String a){
		SqlParameterSource bindValues = new MapSqlParameterSource().addValue("status", s).addValue("account", a);
		int numOfTrades = template.queryForInt("select count(*) from TRADES where account=:account and status=:status", bindValues);
		System.out.println("Number of Trades (using SqlParameterSource): "+numOfTrades);
		return numOfTrades;
	}
	
	public int getTradesCountUsingBeanSqlParameterSource(Trade t){
		SqlParameterSource bindValues = new BeanPropertySqlParameterSource(t);
		int numOfTrades = template.queryForInt("select count(*) from TRADES where account=:account and status=:status", bindValues);
		System.out.println("Number of Trades (using SqlParameterSource): "+numOfTrades);
		return numOfTrades;
	}

	private void getMeMyJdbcTemplate(){
		JdbcOperations op = template.getJdbcOperations();
		//op.equals(..);
	}
	public static void main(String[] args) {
		NamedParameterJdbcTemplateTest t = new NamedParameterJdbcTemplateTest();
//		t.getTradesCount("NEW", "1234AAA");
//		t.getTradesCountUsingSqlParameterSource("NEW", "1234AAA");
		Trade trade = new Trade();
		trade.setAccount("1234AAA");
		trade.setId(1234);
		trade.setStatus("NEW");
		
		int count = t.getTradesCountUsingBeanSqlParameterSource(trade);
		System.out.println("==>"+count);
	}
	
	
}
