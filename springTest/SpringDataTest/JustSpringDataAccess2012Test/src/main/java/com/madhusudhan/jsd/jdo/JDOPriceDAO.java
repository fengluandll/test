package com.madhusudhan.jsd.jdo;
import javax.jdo.PersistenceManagerFactory;


public class JDOPriceDAO {
	
	private PersistenceManagerFactory persistenceManagerFactory = null;
	
	public void persist(JDOPrice p){
		persistenceManagerFactory.getPersistenceManager().makePersistent(p);
		
		System.out.println("Persisted:"+p);
	}

	public void setPersistenceManagerFactory(PersistenceManagerFactory persistenceManagerFactory) {
		this.persistenceManagerFactory = persistenceManagerFactory;
	}

	public PersistenceManagerFactory getPersistenceManagerFactory() {
		
		return persistenceManagerFactory;
	}
}
