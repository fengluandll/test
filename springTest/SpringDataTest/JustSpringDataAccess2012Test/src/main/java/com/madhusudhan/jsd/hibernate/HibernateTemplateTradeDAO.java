package com.madhusudhan.jsd.hibernate;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.orm.hibernate3.HibernateTemplate;

import com.madhusudhan.jsd.domain.Trade;

public class HibernateTemplateTradeDAO {

	private HibernateTemplate hibernateTemplate = null;
	
	private SessionFactory sessionFactory = null;
	
	public HibernateTemplateTradeDAO() {
		setHibernateTemplate(new HibernateTemplate(getSessionFactory()));
	}

	public void getTrades() {
		List<Trade> trades = getHibernateTemplate().loadAll(Trade.class);
		System.out.println("All trades retrieved via HibernateTemplate:"+trades);
	}
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
		this.hibernateTemplate = hibernateTemplate;
	}

	public HibernateTemplate getHibernateTemplate() {
		return hibernateTemplate;
	}
}
