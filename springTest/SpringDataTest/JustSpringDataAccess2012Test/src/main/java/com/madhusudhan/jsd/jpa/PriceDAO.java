package com.madhusudhan.jsd.jpa;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class PriceDAO {
	private EntityManager manager = null;
	
	private EntityManagerFactory entityManagerFactory = null;
	
	public PriceDAO() {
		setEntityManagerFactory(Persistence.createEntityManagerFactory("TradePU"));
		
		manager = getEntityManagerFactory().createEntityManager();
		
		System.out.println("Manager found:"+manager);
	}
	
	public void insert(Price p){
		manager.getTransaction().begin();
		manager.persist(p);
		manager.getTransaction().commit();
	}

	public void setEntityManagerFactory(EntityManagerFactory entityManagerFactory) {
		this.entityManagerFactory = entityManagerFactory;
	}

	public EntityManagerFactory getEntityManagerFactory() {
		return entityManagerFactory;
	}
}
