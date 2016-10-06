package com.packt.lifecycle.my2;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Created by Allbts-IT on 4/10/2016.
 */
public class HelloWorldExample {
    public static void main(String[] args) {
        AbstractApplicationContext context = new ClassPathXmlApplicationContext("applicationContext3.xml");
        HelloWorld world = context.getBean("helloWorld", HelloWorld.class);
        System.out.println(world.getMessage());
        context.registerShutdownHook();
    }
}
