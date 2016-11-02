package com.madhusudhan.jsd.domain;

public class Account {
	private String id = null;
	private String firstName = null;

	private int accountType = 0;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public int getAccountType() {
		return accountType;
	}

	public void setAccountType(int accountType) {
		this.accountType = accountType;
	}

	@Override
	public String toString() {
		return "Account [id=" + id + ", accountType=" + accountType
				+ ", firstName=" + firstName + "]";
	}

}
