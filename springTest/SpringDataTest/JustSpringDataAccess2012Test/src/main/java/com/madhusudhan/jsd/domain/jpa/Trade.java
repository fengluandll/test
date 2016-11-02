package com.madhusudhan.jsd.domain.jpa;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Trade {
	@Column( nullable=false)
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id = 0;
	@Column
	private String direction = null;
	@Column
	private String account = null;
	@Column
	private String security = null;
	@Column
	private String status = null;
	@Column
	private int quantity = 0;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDirection() {
		return direction;
	}
	public void setDirection(String direction) {
		this.direction = direction;
	}
	public String getAccount() {
		return account;
	}
	public void setAccount(String account) {
		this.account = account;
	}
	public String getSecurity() {
		return security;
	}
	public void setSecurity(String security) {
		this.security = security;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "Trade [id=" + id + ", direction=" + direction + ", account="
				+ account + ", security=" + security + ", status=" + status
				+ "]";
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

}
