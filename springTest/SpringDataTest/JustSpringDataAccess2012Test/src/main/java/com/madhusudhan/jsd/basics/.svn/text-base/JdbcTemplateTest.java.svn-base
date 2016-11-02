package com.madhusudhan.jsd.basics;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import com.madhusudhan.jsd.domain.Trade;

public class JdbcTemplateTest {

	private ApplicationContext ctx = null;
	private JdbcTemplate template = null;
	private DataSource datasource = null;
	
	public JdbcTemplateTest() {
		ctx = new ClassPathXmlApplicationContext("datasources-beans.xml");
		datasource = ctx.getBean("mySqlDataSource",DataSource.class);
		System.out.println("Datasource obtained:"+datasource);
		template = new JdbcTemplate(datasource);
	}
	
	public int getTradesCount(){
//		int numOfTrades = template.queryForInt("select count(*) from TRADES");
		int numOfTrades = template.queryForObject("select count(*) from TRADES", Integer.class);
		System.out.println("Number of Trades: "+numOfTrades);
		return numOfTrades;
	}
	
	public List<Map<String,Object>> getAllTrades(){
		List<Map<String,Object>> trades = template.queryForList("select * from TRADES");
		System.out.println("All Trades:"+trades);
		return trades;
	}

	public Map<String,Object> getTradeAsMap(){
		Map<String,Object> tradeAsMap = template.queryForMap("select * from TRADES where id=2");
		System.out.println("Trades Map:"+tradeAsMap);

		return tradeAsMap;
	}

	public int getTradeMaxId(){
		int maxId = template.queryForInt("select max(id) from TRADES");//, Integer.class);

		return maxId;
	}
	
	public String getTradeStatus(int id, String security){
		String status = template.queryForObject("select STATUS from TRADES where id = ? and security=?", 
				new Object[]{id,security}, String.class);
		return status;
	}

	public String getTradeStatus(int id){
		String status = template.queryForObject("select STATUS from TRADES where id = ?", 
				new Object[]{id}, String.class);
		return status;
	}

	public Trade getTrade(int id){
		Trade trade = template.queryForObject("select * from TRADES where id= ?", 
				new Object[]{id}, new RowMapper<Trade>(){

					@Override
					public Trade mapRow(ResultSet rs, int row)
							throws SQLException {
						Trade t = new Trade();
						t.setId(rs.getInt("ID"));
						t.setAccount(rs.getString("ACCOUNT"));
						t.setSecurity(rs.getString("SECURITY"));
						t.setQuantity(rs.getInt("QUANTITY"));
						t.setStatus(rs.getString("STATUS"));
						t.setDirection(rs.getString("DIRECTION"));
						return t;
					}
			
		});

		return trade;
	}
	
	public void createPersonTable(){
			
		System.out.println("Table created");
	}
	
	public void dropPersonTable(){
		template.execute("drop table PERSON2");
		System.out.println("Table dropped");
	}


	public Trade getMappedTrade(int id){
		Trade trade = template.queryForObject("select * from TRADES where id = ?",
				new Object[]{id} , 
				new TradeMapper());

		return trade;
	}
	
	public Trade getMappedTrade3(int id){
		Trade trade = template.queryForObject("select * from TRADES where id = ?",
				new Object[]{id} , 
				new TradeMapper());

		return trade;
	}

	public List<Trade> getAllMappedTrades(){
		List<Trade> trades = template.query("select * from TRADES",
				new TradeMapper());

		return trades;
	}

	private static final class TradeMapper implements RowMapper<Trade>{

		@Override
		public Trade mapRow(ResultSet rs, int rowNum) throws SQLException {
			
			System.out.println("rowNum: "+rowNum);
			
			Trade t = new Trade();
			t.setId(rs.getInt("ID"));
			t.setAccount(rs.getString("ACCOUNT"));
			t.setSecurity(rs.getString("SECURITY"));
			t.setQuantity(rs.getInt("QUANTITY"));
			t.setStatus(rs.getString("STATUS"));
			t.setDirection(rs.getString("DIRECTION"));
			return t;
		}
		
	}
	public Trade insertTrade(Trade trade){
		template.execute("insert into TRADES values");
		return null;
		
	}
	public static void main(String[] args) {
		JdbcTemplateTest t = new JdbcTemplateTest();
		System.out.println("Total Trades: "+t.getTradesCount());
		List<Map<String,Object>> trades = t.getAllTrades();
		System.out.println("All Trades:"+trades);
		System.out.println("Single Trade:"+t.getTrade(2));
		System.out.println("Max Trade ID:"+t.getTradeMaxId());
		System.out.println("Trades Map:"+t.getTradeAsMap());
		System.out.println("Trade status:"+t.getTradeStatus(5));
		System.out.println("Trade status for Id and Security:"+t.getTradeStatus(5,"XYZ"));
		System.out.println("Mapped Trade is"+t.getMappedTrade(4));
		System.out.println("All Mapped Trades are:"+t.getAllMappedTrades());
//		t.createPersonTable();
//		t.dropPersonTable();
		
	}
}
