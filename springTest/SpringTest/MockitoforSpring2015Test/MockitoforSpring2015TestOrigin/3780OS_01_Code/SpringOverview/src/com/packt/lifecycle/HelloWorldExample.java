package com.packt.lifecycle;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.packt.tx.FooService;

public class HelloWorldExample {
	
	public static void main(String[] args) {
		AbstractApplicationContext context = new ClassPathXmlApplicationContext(
				"applicationContext.xml");
		HelloWorld world = (HelloWorld) context.getBean("helloWorld");
		System.out.println(world.getMessage());
		 context.registerShutdownHook();
	}

}
