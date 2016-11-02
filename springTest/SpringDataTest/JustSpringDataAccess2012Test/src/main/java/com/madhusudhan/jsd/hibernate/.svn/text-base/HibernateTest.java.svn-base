package com.madhusudhan.jsd.hibernate;

import java.util.Random;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.madhusudhan.jsd.domain.DomainUtil;
import com.madhusudhan.jsd.domain.Trade;

//import org.springframework.orm.hibernate4.LocalSessionFactoryBean;
public class HibernateTest {
	
	private ApplicationContext ctx = null;
	private SessionFactory factory = null;
	
	public HibernateTest() {
		ctx = new ClassPathXmlApplicationContext("hibernate-beans.xml");
		factory = ctx.getBean("sessionFactory",SessionFactory.class);
	}

	public void testHibernate() throws Exception {
		Session session = factory.getCurrentSession();
		System.out.println("Found session:"+session);
		session.beginTransaction();
		session.save(DomainUtil.createDummyTrade());
		session.getTransaction().commit();
	}

	public static void main(String[] args) {
		HibernateTest test = new HibernateTest();
		
		try {
			test.testHibernate();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
