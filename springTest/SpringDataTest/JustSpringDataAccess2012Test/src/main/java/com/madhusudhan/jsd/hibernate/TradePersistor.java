package com.madhusudhan.jsd.hibernate;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.madhusudhan.jsd.domain.DomainUtil;
import com.madhusudhan.jsd.domain.Trade;

public class TradePersistor {
	private ApplicationContext ctx = null;
	private SessionFactory factory = null;
	private Session session = null;
	
	public TradePersistor() {
		ctx = new ClassPathXmlApplicationContext("hibernate-beans.xml");
		factory = ctx.getBean("sessionFactory",SessionFactory.class);
		session = factory.getCurrentSession();
	}

	private void persist(Trade t) {
		Transaction tx = session.beginTransaction();
		session.save(t);
		tx.commit();
		System.out.println("Trade saved");
	}
	
	public static void main(String[] args) {
		TradePersistor persistor = new TradePersistor();
		persistor.persist(DomainUtil.createDummyTrade());
	}
}
