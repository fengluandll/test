package com.madhusudhan.jsd.basics;

import javax.sql.DataSource;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;

public class JdbcTest {

	private ApplicationContext ctx = null;
	private JdbcTemplate template = null;
	private DataSource datasource = null;
	
	public JdbcTest() {
		ctx = new ClassPathXmlApplicationContext("basics-beans.xml");
		datasource = ctx.getBean("mySqlDataSource",DataSource.class);
		System.out.println("Datasource obtained:"+datasource);
		template = new JdbcTemplate(datasource);
		
	}
	
	public static void main(String[] args) {
		System.out.println("Started");
		JdbcTest t = new JdbcTest();
		t.template.execute("insert into temp_table values (4)");
	}
}
