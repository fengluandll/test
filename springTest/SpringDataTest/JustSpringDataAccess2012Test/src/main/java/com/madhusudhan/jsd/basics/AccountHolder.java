package com.madhusudhan.jsd.basics;

import com.madhusudhan.jsd.domain.Account;


public class AccountHolder {

	private Account account = null;

	public AccountHolder() {
		System.out.println("AccountHolder init");
	}
	public void setAccount(Account account) {
		this.account = account;
	}

	public Account getAccount() {
		return account;
	}
}
