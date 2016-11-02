package com.madhusudhan.jsd.jpa;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.springframework.context.ApplicationContext;

import com.madhusudhan.jsd.domain.DomainUtil;
import com.madhusudhan.jsd.domain.jpa.Trade;

public class EntityManagerTest {

	private ApplicationContext ctx = null;

	private EntityManagerFactory factory = null;
	private EntityManager entityManager = null;
	
	public EntityManagerTest() {
//		ctx = new ClassPathXmlApplicationContext("jpa-em-beans.xml");
	}
	
	private void init() {
		factory = Persistence.createEntityManagerFactory("TradePU");
		entityManager = factory.createEntityManager();
	}
	
	public void persistTrade(Trade t) {
		entityManager.persist(t);
	}
	
	public static void main(String[] args) {
		EntityManagerTest test = new EntityManagerTest();
		
		test.init();
		Trade t = new Trade();
		t.setAccount("56677");
		t.setDirection("BUY");
		t.setQuantity(3955500);
		test.persistTrade(t);
	}
}
