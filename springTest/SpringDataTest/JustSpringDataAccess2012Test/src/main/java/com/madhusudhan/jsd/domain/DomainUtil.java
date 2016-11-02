package com.madhusudhan.jsd.domain;

import java.util.Random;


public class DomainUtil {
	
	private static Random r = null;
	
	public static Trade createDummyTrade() {
	
		Trade t = new Trade();
		
		r = new Random();
		
		t.setId( r.nextInt(1000));
		t.setAccount("DUMMY1");
		t.setSecurity("SEC1111");
		t.setQuantity(10000);
		t.setDirection("BUY");
		t.setStatus("NEW");

		return t;
	}
	
}
