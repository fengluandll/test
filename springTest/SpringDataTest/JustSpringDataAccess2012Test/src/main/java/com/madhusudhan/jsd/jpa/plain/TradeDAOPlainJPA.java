package com.madhusudhan.jsd.jpa.plain;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceUnit;

import com.madhusudhan.jsd.domain.jpa.Trade;

public class TradeDAOPlainJPA {

	private EntityManagerFactory entityManagerFactory = null;
	
	private EntityManager manager = null;

	public TradeDAOPlainJPA() {
		
	}
	public void setManager(EntityManager manager) {
		this.manager = manager;
	}

	public EntityManager getManager() {
		return manager;
	}

	void persist(Trade t){
		begin();
		System.out.println("Persisting the entity...");
		getManager().persist(t);
		System.out.println("Persisted the entity...");
		commit();
	}
	
	private void commit() {
		getManager().getTransaction().commit();
	}
	private void begin() {
		getManager().getTransaction().begin();
		
	}
	public void delete(Trade t){
		begin();
		getManager().remove(t);
		commit();
	}

	void find(int t){
		getManager().find(Trade.class, t);
	}
	
	@PersistenceUnit
	public void setEntityManagerFactory(EntityManagerFactory entityManagerFactory) {
		this.entityManagerFactory = entityManagerFactory;
		setManager(getEntityManagerFactory().createEntityManager());
	}

	public EntityManagerFactory getEntityManagerFactory() {
		return entityManagerFactory;
	}
}
