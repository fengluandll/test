package com.microservice.webflux.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

@Configuration
public class DemoRouter {
    @Bean
    public RouterFunction<ServerResponse> route(DemoHandler demoHandler) {
        return RouterFunctions.route(RequestPredicates.GET("/welcome")
                .and(RequestPredicates.accept(MediaType.TEXT_PLAIN)), demoHandler::hello);
    }
}
