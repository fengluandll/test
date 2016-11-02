package com.madhusudhan.jsd.basics;

import javax.sql.DataSource;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;

public class JavaDBTest {
	private ApplicationContext ctx = null;
	private JdbcTemplate template = null;
	private DataSource datasource = null;

	public JavaDBTest() {
		ctx = new ClassPathXmlApplicationContext("java-db-beans.xml");
		datasource = ctx.getBean("javaDBDataSource", DataSource.class);
		System.out.println("Datasource obtained:" + datasource);
		template = new JdbcTemplate(datasource);
	}

	private void createTRADESTable() {
		template.execute("create table TRADES (ID int NOT NULL,  ACCOUNT VARCHAR(20) NOT NULL, SECURITY VARCHAR(10) NOT NULL, QUANTITY INT NOT NULL,  STATUS VARCHAR(10), DIRECTION VARCHAR(10))");
	}

	private void insertTrade() {
		int rowsUpdated = template.update(
				"insert into TRADES values(?,?,?,?,?,?)", 33, "JSDATA", "REV",
				500000, "NEW", "SELL");

		System.out.println("Rows Updated:" + rowsUpdated);
	}

	public static void main(String[] args) {
		JavaDBTest test = new JavaDBTest();
//		test.createTRADESTable();
		test.insertTrade();
	}
}
