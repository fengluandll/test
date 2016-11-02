package com.madhusudhan.jsd.jdo.support;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.madhusudhan.jsd.jdo.JDOPrice;
public class JDOSupportTest {

	private ApplicationContext ctx = null;
	private JDOPriceDAOSupport priceDAO = null;

	public JDOSupportTest() {
		ctx = new ClassPathXmlApplicationContext("jdo-support-beans.xml");
		priceDAO = ctx.getBean("jdoPriceDAOSupport", JDOPriceDAOSupport.class);
		System.out.println("JDOPriceDAO:" + priceDAO);
	}
	
	private void persist(JDOPrice p) {
		priceDAO.persist(p);
	}

	public static void main(String[] args) {
		JDOSupportTest test = new JDOSupportTest();
		JDOPrice p = new JDOPrice();
		p.setId(321);
		p.setPrice(12.22);
		p.setSecurity("JDOSUPPORT");
		test.persist(p);
	}

}
