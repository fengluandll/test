package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class HelloRestStsApplication {

	public static void main(String[] args) {
		SpringApplication.run(HelloRestStsApplication.class, args);
	}
	
	@RequestMapping("/greet")
	public String greet(){
		return "hello,sts";
	}
}
