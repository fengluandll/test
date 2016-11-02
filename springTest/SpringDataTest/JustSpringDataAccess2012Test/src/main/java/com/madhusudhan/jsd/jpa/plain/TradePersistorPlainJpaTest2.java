package com.madhusudhan.jsd.jpa.plain;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.madhusudhan.jsd.domain.jpa.Trade;

public class TradePersistorPlainJpaTest2 {
	
	private TradeDAOPlainJPA2 dao = null;
	
	private ApplicationContext ctx = null;
	
	public TradePersistorPlainJpaTest2() {
		ctx = new ClassPathXmlApplicationContext("plain-jpa-beans.xml");
		dao = ctx.getBean("tradeDao2",TradeDAOPlainJPA2.class);
		System.out.println("TradeDAOPlainJPA2:"+dao);
		
	}
	public void persist(Trade p){
	
		dao.persist(p);
	}
	
	public static void main(String[] args) {
		TradePersistorPlainJpaTest2 test = new TradePersistorPlainJpaTest2();
		Trade t = new Trade();
		t.setAccount("232433");
		t.setSecurity("SEC4567");
		t.setDirection("BUY");
		t.setQuantity(12344);
		t.setId(2011);
		test.persist(t);
	}
}
