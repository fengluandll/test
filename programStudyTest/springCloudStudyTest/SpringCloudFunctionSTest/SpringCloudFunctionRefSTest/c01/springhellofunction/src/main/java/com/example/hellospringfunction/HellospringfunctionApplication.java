package com.example.hellospringfunction;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import reactor.core.publisher.Flux;

import java.util.function.Function;

@SpringBootApplication
public class HellospringfunctionApplication {

    @Bean
    public Function<Flux<String>, Flux<String>> uppercase() {
        return flux -> flux.map(value -> value);
    }

    public static void main(String[] args) {
        SpringApplication.run(HellospringfunctionApplication.class, args);
    }

}
