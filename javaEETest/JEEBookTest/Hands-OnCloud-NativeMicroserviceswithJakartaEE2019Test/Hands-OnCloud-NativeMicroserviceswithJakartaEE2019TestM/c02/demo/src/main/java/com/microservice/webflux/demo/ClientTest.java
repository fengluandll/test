package com.microservice.webflux.demo;

public class ClientTest {
    public static void main(String[] args) {
        DemoWebClient demoWebClient = new DemoWebClient();
        System.out.println(demoWebClient.getResult());
    }
}
