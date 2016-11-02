package com.madhusudhan.jsd.hibernate;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.madhusudhan.jsd.domain.DomainUtil;
import com.madhusudhan.jsd.domain.Trade;

public class TradePersistorUsingDAO {
	private ApplicationContext ctx = null;
	private TradeDAO tradeDAO = null;
	public TradePersistorUsingDAO() {
		ctx = new ClassPathXmlApplicationContext("hibernate-beans.xml");
		tradeDAO = ctx.getBean("tradeDAO",TradeDAO.class);
	}

	private void persist(Trade t) {
		System.out.println("Trade being persisted:"+t);
		tradeDAO.persist(t);
	}
	
	private void delete(Trade t) {
		System.out.println("Trade being deleted:"+t);
		tradeDAO.delete(t);
		System.out.println("Trade deleted");
	}
	
	private void fetchTrades() {
		List<Trade> trades = tradeDAO.getAllTrades();
		System.out.println("All Trades:"+trades);
		
	}
	
	private Trade fetchTrade(int tradeId) {
		Trade trade = tradeDAO.getTrade(tradeId);
		System.out.println("Unique trade:"+trade);
		return trade;
	}
	
	public void deleteTradesByStatus(String status){
		int tradesDeleted = tradeDAO.deleteTradesByStatus(status);
		System.out.println("Number of Trades deleted: "+tradesDeleted);
	}
	
	public static void main(String[] args) {
		TradePersistorUsingDAO persistor = new TradePersistorUsingDAO();
		persistor.persist(DomainUtil.createDummyTrade());
//		persistor.delete(6);
//		Trade t = persistor.fetchTrade(6);
//		System.out.println("Deleting "+t);
//		persistor.delete(t);
		
		// Delete by Status
//		persistor.deleteTradesByStatus("UNKNOWN");
		
	}
}
