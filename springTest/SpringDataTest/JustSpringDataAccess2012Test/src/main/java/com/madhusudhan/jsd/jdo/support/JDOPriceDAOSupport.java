package com.madhusudhan.jsd.jdo.support;

import org.springframework.orm.jdo.support.JdoDaoSupport;

import com.madhusudhan.jsd.jdo.JDOPrice;

public class JDOPriceDAOSupport extends JdoDaoSupport {

	public void persist(JDOPrice p){
		getJdoTemplate().makePersistent(p);
	}
}
