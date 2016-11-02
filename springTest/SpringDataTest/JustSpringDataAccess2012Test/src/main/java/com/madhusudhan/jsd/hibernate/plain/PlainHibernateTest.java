package com.madhusudhan.jsd.hibernate.plain;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.madhusudhan.jsd.domain.DomainUtil;
import com.madhusudhan.jsd.domain.Trade;

public class PlainHibernateTest {
	private SessionFactory factory = null;
	private Configuration configuration = null;
	public PlainHibernateTest() {
		configuration = new Configuration();
//		configuration.addResource("hibernate.cfg.xml");
		configuration.addFile("src/main/resources/hbm/Trade.hbm.xml");
		factory = configuration.buildSessionFactory();
	}
	
	private void testInsert(Trade t) {
		Session session = factory.getCurrentSession();
		session.beginTransaction();
		session.save(t);
		session.getTransaction().commit();
		System.out.println("Inserted Trade"+t.getId());
	}
	
	public static void main(String[] args) {
		Trade t = DomainUtil.createDummyTrade();
		PlainHibernateTest test = new PlainHibernateTest();
		test.testInsert(t);
	}

}
