package com.madhusudhan.jsd.jpa.plain;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceUnit;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.madhusudhan.jsd.domain.jpa.Trade;

public class TradeDAOPlainJPA2 {
	
	@PersistenceContext
	private EntityManager manager = null;

	public TradeDAOPlainJPA2() {
		
	}
	public void setManager(EntityManager manager) {
		this.manager = manager;
	}

	public EntityManager getManager() {
		return manager;
	}

	void persist(Trade t){
		getManager().persist(t);
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
	}
