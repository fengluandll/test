package com.madhusudhan.jsd.jpa.plain;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.madhusudhan.jsd.domain.jpa.Trade;


public class TradePersistorPlainJpaTest {
	
	private TradeDAOPlainJPA dao = null;
	
	private ApplicationContext ctx = null;
	
	public TradePersistorPlainJpaTest() {
		ctx = new ClassPathXmlApplicationContext("plain-jpa-beans.xml");
		dao = ctx.getBean("tradeDao",TradeDAOPlainJPA.class);
		System.out.println("TradeDAOPlainJPA:"+dao);
		
	}
	public void persist(Trade p){
	
		dao.persist(p);
	}
	
	public static void main(String[] args) {
		TradePersistorPlainJpaTest test = new TradePersistorPlainJpaTest();
		Trade t = new Trade();
		t.setAccount("232433");
		t.setSecurity("SEC4567");
		t.setDirection("BUY");
		t.setQuantity(12344);
		t.setId(2009);
		test.persist(t);
	}
}
