package com.microservice.vertx.demoVertx;

import java.util.concurrent.atomic.AtomicInteger;

public class Author {
  private final static AtomicInteger COUNTER = new AtomicInteger();

  private final int id;
  private final String name;
  private final String surname;

  public Author(String name, String surname) {
    this.id = COUNTER.getAndIncrement();
    this.name = name;
    this.surname = surname;
  }

  public int getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public String getSurname() {
    return surname;
  }
}
