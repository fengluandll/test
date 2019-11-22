package com.microservice.vertx.demoVertx;

import io.vertx.core.Vertx;
import io.vertx.ext.unit.Async;
import io.vertx.ext.unit.TestContext;
import io.vertx.ext.unit.junit.VertxUnitRunner;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(VertxUnitRunner.class)
public class AuthorVerticleTest {

  private Vertx vertx;

  public AuthorVerticleTest() {
  }

  @Before
  public void setUp(TestContext context) {
    vertx = Vertx.vertx();
    vertx.deployVerticle(AuthorVerticle.class.getName(),
      context.asyncAssertSuccess());
  }

  @After
  public void tearDown(TestContext context) {
    if (vertx != null) {
      vertx.close(context.asyncAssertSuccess());
    }
  }

  /**
   * Test of start method, of class AuthorVerticle.
   *
   * @param context
   */
  @Test
  public void testStart(TestContext context) {
    final Async async = context.async();
    vertx.createHttpClient().getNow(8080, "localhost", "/authors",
      response -> {
        response.handler(body -> {
          context.assertTrue(body.toString().contains("\"name\" : \"Mauro\""));
          async.complete();
        });
      });
  }
}
