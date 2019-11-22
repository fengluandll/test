package com.microservice.vertx.demoVertx;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Future;
import io.vertx.core.json.Json;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;

import java.util.LinkedHashMap;
import java.util.Map;

public class AuthorVerticle extends AbstractVerticle {
  private final Map<Integer, Author> authors = new LinkedHashMap<>();

  private void populateAuthorsData() {
    Author mauro = new Author("Mauro", "Vocale");
    authors.put(mauro.getId(), mauro);
    Author luigi = new Author("Luigi", "Fugaro");
    authors.put(luigi.getId(), luigi);
  }

  private void getAuthors(RoutingContext routingContext) {
    routingContext
      .response()
      .putHeader("content-type", "application/json; charset=utf-8")
      .end(Json.encodePrettily(authors.values()));
  }

  @Override
  public void start(Future<Void> future) throws Exception {
    populateAuthorsData();
    Router router = Router.router(vertx);
    router.get("/authors").handler(this::getAuthors);
    vertx.createHttpServer().requestHandler(router::accept).listen(8080,
      result -> {
        if (result.succeeded()) {
          future.complete();
        } else {
          future.fail(result.cause());
        }
      });
  }
}
