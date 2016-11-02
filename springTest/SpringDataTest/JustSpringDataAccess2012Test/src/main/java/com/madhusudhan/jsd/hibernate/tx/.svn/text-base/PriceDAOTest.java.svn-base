package com.madhusudhan.jsd.hibernate.tx;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class PriceDAOTest {
	private ApplicationContext ctx = null;
	private PriceDAO priceDAO = null;
	public PriceDAOTest() {
		ctx = new ClassPathXmlApplicationContext("tx-hibernate-beans.xml");
		priceDAO = ctx.getBean("priceDAO",PriceDAO.class);
	}

	private void persist(Price t) {
		System.out.println("Price being persisted:"+t);
		priceDAO.persist(t);
		System.out.println("**** Persisted ******");
	}
	
	
	public static void main(String[] args) {
		PriceDAOTest persistor = new PriceDAOTest();
		Price p = new Price();
		
		p.setId(12);
		p.setSecurity("JS12");
		p.setPrice(32.22);
		
		persistor.persist(p);
	}
}
