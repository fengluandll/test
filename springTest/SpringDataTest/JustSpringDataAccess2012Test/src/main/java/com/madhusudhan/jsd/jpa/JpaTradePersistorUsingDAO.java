package com.madhusudhan.jsd.jpa;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.madhusudhan.jsd.domain.jpa.Trade;

public class JpaTradePersistorUsingDAO {
	private ApplicationContext ctx = null;
	private TradeDAO tradeDAO = null;
	
	public JpaTradePersistorUsingDAO() {
		ctx = new ClassPathXmlApplicationContext("jpa-beans.xml");
		tradeDAO = ctx.getBean("tradeDAO",TradeDAO.class);
	}

	public void persist(Trade t){
		tradeDAO.persit(t);
	}
	public void deleteTradesByStatus(String status){
//		int tradesDeleted = tradeDAO.deleteTradesByStatus(status);
//		System.out.println("Number of Trades deleted: "+tradesDeleted);
	}
	
	public static void main(String[] args) {
		JpaTradePersistorUsingDAO persistor = new JpaTradePersistorUsingDAO();
//		persistor.persist(DomainUtil.createDummyTrade());
//		persistor.delete(6);
//		Trade t = persistor.fetchTrade(6);
//		System.out.println("Deleting "+t);
//		persistor.delete(t);
		
		// Delete by Status
		persistor.deleteTradesByStatus("UNKNOWN");
		
	}
}
