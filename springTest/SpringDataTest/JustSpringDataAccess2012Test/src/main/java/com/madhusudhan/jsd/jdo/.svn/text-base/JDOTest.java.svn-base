package com.madhusudhan.jsd.jdo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
public class JDOTest {

	private ApplicationContext ctx = null;
	private JDOPriceDAO priceDAO = null;

	public JDOTest() {
		ctx = new ClassPathXmlApplicationContext("jdo-beans.xml");
		priceDAO = ctx.getBean("priceDao", JDOPriceDAO.class);
		System.out.println("JDOPriceDAO:" + priceDAO);
	}
	
	private void persist(JDOPrice p) {
		priceDAO.persist(p);
	}

	public static void main(String[] args) {
		JDOTest test = new JDOTest();
		JDOPrice p = new JDOPrice();
		p.setId(321);
		p.setPrice(12.22);
		p.setSecurity("UKMSKS");
		test.persist(p);
	}

}
