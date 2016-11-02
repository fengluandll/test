package com.madhusudhan.jsd.hibernate.tx;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Transactional(propagation=Propagation.SUPPORTS, readOnly=false)
public class PriceDAO {

	private SessionFactory sessionFactory = null;
	
	public void persist(Price p) {
		getSession().save(p);
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}


	public Session getSession() {
		return sessionFactory.getCurrentSession();
	}
}
