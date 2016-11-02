package com.madhusudhan.jsd.adv;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabase;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;

public class InMemoryDatabaseTest {

	private JdbcTemplate template = null;
	
	public InMemoryDatabaseTest() {
		EmbeddedDatabaseBuilder builder = new EmbeddedDatabaseBuilder();
		EmbeddedDatabase db = builder.setType(EmbeddedDatabaseType.DERBY).addScript("trades-table.sql").build();
		template = new JdbcTemplate(db);
	}
	
	private void insertTrade() {
		template.execute("insert into TRADES values (1,'1234AAA','MDMD',100000,'NEW','BUY');");
		System.out.println("Trade inserted");
	}
	public static void main(String[] args) {
		InMemoryDatabaseTest test = new InMemoryDatabaseTest();
		test.insertTrade();
	}
}
