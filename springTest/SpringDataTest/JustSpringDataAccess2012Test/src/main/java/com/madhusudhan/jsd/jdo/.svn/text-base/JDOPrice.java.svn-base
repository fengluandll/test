package com.madhusudhan.jsd.jdo;

import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

@PersistenceCapable(table = "PRICE")
public class JDOPrice {
	
	@Persistent
	@PrimaryKey
	private int id = 0;
	
	@Persistent
	private String security = null;
	
	@Persistent
	private double price = 0.0;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public void setSecurity(String security) {
		this.security = security;
	}

	public String getSecurity() {
		return security;
	}
}
