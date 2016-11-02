package com.madhusudhan.jsd.jdo.template;
import java.util.List;

import javax.jdo.PersistenceManagerFactory;

import org.springframework.orm.jdo.JdoTemplate;

import com.madhusudhan.jsd.jdo.JDOPrice;

public class JdoTemplatePriceDAO {
//	private PersistenceManagerFactory persistenceManagerFactory = null;
	
	private JdoTemplate jdoTemplate = null;
	
	public JdoTemplate getJdoTemplate() {
		return jdoTemplate;
	}

	public void setJdoTemplate(JdoTemplate jdoTemplate) {
		this.jdoTemplate = jdoTemplate;
	}

	public void persist(JDOPrice p){
		
		jdoTemplate.makePersistent(p);
		
		System.out.println("Persisted:"+p);
	}
	
	public void persistAllPrices(List<JDOPrice> prices){
		
		jdoTemplate.makePersistentAll(prices);
		
		System.out.println("Persisted:"+prices.size()+" prices");
	}

//	public void setPersistenceManagerFactory(PersistenceManagerFactory persistenceManagerFactory) {
//		jdoTemplate = new JdoTemplate(persistenceManagerFactory);
//	}
//
//	public PersistenceManagerFactory getPersistenceManagerFactory() {
//		
//		return persistenceManagerFactory;
//	}
}
