package com.madhusudhan.jsd.domain;

public class Address {
	private String firstLine = null;
	private String secondLine = null;
	private String postCode = null;
	private String country = null;

	public String getFirstLine() {
		return firstLine;
	}
	public void setFirstLine(String firstLine) {
		this.firstLine = firstLine;
	}
	public String getSecondLine() {
		return secondLine;
	}
	public void setSecondLine(String secondLine) {
		this.secondLine = secondLine;
	}
	public String getPostCode() {
		return postCode;
	}
	public void setPostCode(String postCode) {
		this.postCode = postCode;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	@Override
	public String toString() {
		return "Address [firstLine=" + firstLine + ", secondLine=" + secondLine
				+ ", postCode=" + postCode + ", country=" + country + "]";
	}
}
