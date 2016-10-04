package com.packt.lifecycle.my;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Created by Allbts-IT on 4/10/2016.
 */
public class HelloWorldExample {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext2.xml");
        HelloWorld world = context.getBean("helloWorld", HelloWorld.class);
        System.out.println(world.getMessage());
    }
}
