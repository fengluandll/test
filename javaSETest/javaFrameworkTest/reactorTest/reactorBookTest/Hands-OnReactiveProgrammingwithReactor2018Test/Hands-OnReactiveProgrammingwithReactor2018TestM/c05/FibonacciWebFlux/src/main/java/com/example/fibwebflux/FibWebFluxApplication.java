package com.example.fibwebflux;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.reactive.config.EnableWebFlux;

@SpringBootApplication
@EnableWebFlux
public class FibWebFluxApplication {

    public static void main(String[] args) {
        SpringApplication.run(FibWebFluxApplication.class, args);
    }

}
