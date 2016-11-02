package com.madhusudhan.jsd.jpa.support;

import org.springframework.orm.jpa.support.JpaDaoSupport;

import com.madhusudhan.jsd.domain.jpa.Trade;


public class JPAPriceDAOSupport extends JpaDaoSupport {
	public void persist(Trade t) {
		getJpaTemplate().persist(t);
	}
}
