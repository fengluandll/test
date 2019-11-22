package com.microservice.webflux.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		DemoWebClient demoWebClient = new DemoWebClient();
		System.out.println(demoWebClient.getResult());
	}

}
