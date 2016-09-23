package lambdasinaction.chap1.my;


import java.util.Currency;

public class Transaction {
	private Currency currency;
	private int year;
	private int price;

	public Transaction(Currency trader, int year, int price)
	{
		this.currency = trader;
		this.year = year;
		this.price = price;
	}

	public Currency getCurrency(){
		return this.currency;
	}

	public int getYear(){
		return this.year;
	}

	public int getPrice(){
		return this.price;
	}
	
	public String toString(){
	    return "{" + this.currency + ", " +
	           "year: "+this.year+", " +
	           "price:" + this.price +"}";
	}
}