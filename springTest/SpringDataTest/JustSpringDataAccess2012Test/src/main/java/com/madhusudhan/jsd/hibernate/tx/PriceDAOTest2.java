package com.madhusudhan.jsd.hibernate.tx;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class PriceDAOTest2 {
	private ApplicationContext ctx = null;
	private PriceDAO priceDAO = null;

	@Before
	public void setUp() throws Exception {
		ctx = new ClassPathXmlApplicationContext("tx-hibernate-beans.xml");
		priceDAO = ctx.getBean("priceDAO", PriceDAO.class);
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void persist() {
	Price p = new Price();
		
		p.setId(2);
		p.setSecurity("USJSD");
		p.setPrice(12.22);
	
		System.out.println("Price being persisted:" + p);
		
		priceDAO.persist(p);
		System.out.println("**** Persisted ******");
	}

}
