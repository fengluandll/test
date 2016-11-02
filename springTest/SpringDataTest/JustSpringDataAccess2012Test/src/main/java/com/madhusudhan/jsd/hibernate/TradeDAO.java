package com.madhusudhan.jsd.hibernate;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.madhusudhan.jsd.domain.Trade;

public class TradeDAO {

	private SessionFactory sessionFactory = null;
	private Session session = null;

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void persist(Trade t) {
		beginTx();
		session.save(t);
		commitTx();
		System.out.println("Trade successfully persisted");
	}

	public Trade getTrade(int tradeId) {
		beginTx();
		String query = "from Trade where id=:tradeId";
		Query q = session.createQuery(query).setInteger("tradeId", tradeId);
		Trade t = (Trade) q.uniqueResult();
		commitTx();

		return t;
	}

	public void delete(Trade t) {
		beginTx();
		session.delete(t);
		commitTx();

	}

	public int deleteTradesByStatus(String status) {
		beginTx();
		String query = "delete from Trade where status = :status";
		
		Query q = session.createQuery(query).setString("status",status);
		
		int tradesDeleted = q.executeUpdate();

		commitTx();
		
		return tradesDeleted;
	}

	public List<Trade> getAllTrades() {
		session = getSessionFactory().getCurrentSession();
		session.beginTransaction();
		List<Trade> trades = session.createQuery("from Trade").list();
		session.getTransaction().commit();

		return trades;
	}

	private void beginTx() {
		session = getSessionFactory().getCurrentSession();
		session.beginTransaction();
	}

	private void commitTx() {
		session.getTransaction().commit();
	}

}
