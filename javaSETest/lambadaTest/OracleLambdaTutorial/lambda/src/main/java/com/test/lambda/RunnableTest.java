package com.test.lambda;

public class RunnableTest {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		System.out.println("=== RunnableTest ===");
		
		Runnable r1 = new Runnable() {
			
			@Override
			public void run() {
				System.out.println("Hello world one!");				
			}
		};
		r1.run();
		
		Runnable r2 = () -> System.out.println("Hello world two!");
		
		r2.run();
	}
	

}
