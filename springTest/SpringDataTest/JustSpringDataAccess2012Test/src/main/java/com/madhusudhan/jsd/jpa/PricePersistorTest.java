package com.madhusudhan.jsd.jpa;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class PricePersistorTest {
	private PriceDAO dao = new PriceDAO();
	
	private ApplicationContext ctx = null;
	
	public PricePersistorTest() {
		ctx = new ClassPathXmlApplicationContext("jpa-beans.xml");
		dao = ctx.getBean("priceDao",PriceDAO.class);
		System.out.println("PriceDAO:"+dao);
		
	}
	public void pricePersist(Price p){
		dao.insert(p);
	}
	
	public static void main(String[] args) {
		PricePersistorTest test = new PricePersistorTest();
		Price p = new Price();
		p.setId("22222");
		p.setPrice(1234.44);
		test.pricePersist(p);
	}
}
