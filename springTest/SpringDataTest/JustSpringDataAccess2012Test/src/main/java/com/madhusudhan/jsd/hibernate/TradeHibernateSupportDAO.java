package com.madhusudhan.jsd.hibernate;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.madhusudhan.jsd.domain.Trade;

public class TradeHibernateSupportDAO extends HibernateDaoSupport {
	
	public TradeHibernateSupportDAO(SessionFactory sessionFactory) {
		setSessionFactory(sessionFactory);
	}
	public List<Trade> getAllTrades() {
		Session session = getSession(false);
		List<Trade> trades = session.createQuery("from Trade").list();
		return trades;
	}
	
}
