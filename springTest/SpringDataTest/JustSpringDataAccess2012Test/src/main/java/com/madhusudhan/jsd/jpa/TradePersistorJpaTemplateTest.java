package com.madhusudhan.jsd.jpa;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.madhusudhan.jsd.domain.jpa.Trade;

public class TradePersistorJpaTemplateTest {
	
	private TradeDAOJpaTemplate dao = null;
	
	private ApplicationContext ctx = null;
	
	public TradePersistorJpaTemplateTest() {
		ctx = new ClassPathXmlApplicationContext("jpa-beans.xml");
		dao = ctx.getBean("tradeDao",TradeDAOJpaTemplate.class);
		System.out.println("TradeDAO:"+dao);
		
	}
	public void persist(Trade p){
	
		dao.persist(p);
	}
	
	public static void main(String[] args) {
		TradePersistorJpaTemplateTest test = new TradePersistorJpaTemplateTest();
		Trade t = new Trade();
		t.setAccount("232433");
		t.setSecurity("SEC4567");
		t.setDirection("BUY");
		t.setQuantity(12344);
		t.setId(2009);
		test.persist(t);
	}
}
