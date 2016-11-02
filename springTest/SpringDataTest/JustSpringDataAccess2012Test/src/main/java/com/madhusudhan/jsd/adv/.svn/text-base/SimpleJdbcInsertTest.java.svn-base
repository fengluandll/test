package com.madhusudhan.jsd.adv;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.ParameterizedBeanPropertyRowMapper;
import org.springframework.jdbc.core.simple.ParameterizedRowMapper;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;

import com.madhusudhan.jsd.domain.Trade;

public class SimpleJdbcInsertTest {

	private ApplicationContext ctx = null;
	private JdbcTemplate template = null;
	private DataSource datasource = null;
	private SimpleJdbcInsert jdbcInsert = null;
	private SimpleJdbcCall jdbcCall = null;

	public SimpleJdbcInsertTest() {
		ctx = new ClassPathXmlApplicationContext("datasources-beans.xml");
		datasource = ctx.getBean("mySqlDataSource", DataSource.class);
		template = new JdbcTemplate(datasource);
		// jdbcInsert = new
		// SimpleJdbcInsert(datasource).withTableName("TRADES");
		jdbcInsert = new SimpleJdbcInsert(datasource).withTableName("TRADES")
				.usingColumns("id", "account", "security", "quantity");

		jdbcCall = new SimpleJdbcCall(datasource)
				.withProcedureName("BIG_TRADES");
	}

	public void insertTrade(Trade t) {
		Map tradeMap = new HashMap();
		tradeMap.put("id", t.getId());
		tradeMap.put("account", t.getAccount());
		tradeMap.put("security", t.getSecurity());
		tradeMap.put("quantity", t.getQuantity());
		// tradeMap.put("status", t.getStatus());
		// tradeMap.put("direction", t.getDirection());

		jdbcInsert.execute(tradeMap);
	}

	public Trade getBigTradeUsingSimpleJdbcCall(String quantity) {
		SqlParameterSource inValues = new MapSqlParameterSource().addValue(
				"quantity", quantity);

		Map bigTrades = jdbcCall.execute(inValues);

		Trade t = new Trade();
		t.setId((Integer) bigTrades.get("id"));
		t.setAccount((String) bigTrades.get("account"));

		return t;

	}

	public List getBigTradesUsingSimpleJdbcCall(int quantity) {
		SqlParameterSource inValues = new MapSqlParameterSource().addValue(
				"quantity", quantity);
		jdbcCall = new SimpleJdbcCall(datasource).withProcedureName(
				"big_trades").returningResultSet("trades",
				new ParameterizedBeanPropertyRowMapper());
		
		Map bigTrades = jdbcCall.execute();

		return (List)bigTrades.get("trades");
	}

	public void insertTradeUsingSqlParameterSource(Trade t) {
		SqlParameterSource source = new BeanPropertySqlParameterSource(t);

		jdbcInsert.execute(source);
	}

	private Trade createDummyTrade() {
		Trade t = new Trade();
		t.setId(232);
		t.setAccount("ABCDUMMY");
		t.setSecurity("SECDUMMY");
		t.setQuantity(100);
		t.setDirection("BUY");
		t.setStatus("NEW");

		return t;
	}

	public static void main(String[] args) {
		SimpleJdbcInsertTest test = new SimpleJdbcInsertTest();

		// test.insertTrade(test.createDummyTrade());
//		test.insertTradeUsingSqlParameterSource(test.createDummyTrade());
		test.getBigTradesUsingSimpleJdbcCall(1000);
	}
}
