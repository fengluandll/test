package com.madhusudhan.jsd.jpa;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

import com.madhusudhan.jsd.domain.jpa.Trade;

public class TradeDAO {

	private EntityManagerFactory entityManagerFactory = null;
	
	private EntityManager manager = null;

	public TradeDAO() {
		manager = getEntityManagerFactory().createEntityManager();
	}
	public void setManager(EntityManager manager) {
		this.manager = manager;
	}

	public EntityManager getManager() {
		return manager;
	}

	void persit(Trade t){
		getManager().persist(t);
	}
	
	void delete(Trade t){
		getManager().remove(t);
	}

	void find(int t){
		getManager().find(Trade.class, t);
	}

	public void setEntityManagerFactory(EntityManagerFactory entityManagerFactory) {
		this.entityManagerFactory = entityManagerFactory;
	}

	public EntityManagerFactory getEntityManagerFactory() {
		return entityManagerFactory;
	}
}
