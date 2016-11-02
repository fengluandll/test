package com.madhusudhan.jsd.jpa;

import org.springframework.orm.jpa.JpaTemplate;

import com.madhusudhan.jsd.domain.jpa.Trade;

public class TradeDAOJpaTemplate {
	private JpaTemplate jpaTemplate = null;

	public void persist(Trade t){
		getJpaTemplate().persist(t);
	}
	public JpaTemplate getJpaTemplate() {
		return jpaTemplate;
	}

	public void setJpaTemplate(JpaTemplate jpaTemplate) {
		this.jpaTemplate = jpaTemplate;
	}
	
	
}
