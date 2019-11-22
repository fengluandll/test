package com.microservice.webflux.demo;

import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.client.ClientResponse;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

public class DemoWebClient {

    public String getResult() {
        WebClient client = WebClient.create("http://localhost:8080");
        Mono<ClientResponse> result =
                client.get().uri("/welcome")
                        .accept(MediaType.TEXT_PLAIN)
                        .exchange();
        return ">> result = "
                + result.flatMap(res -> res.bodyToMono(String.class)).block();
    }
}
