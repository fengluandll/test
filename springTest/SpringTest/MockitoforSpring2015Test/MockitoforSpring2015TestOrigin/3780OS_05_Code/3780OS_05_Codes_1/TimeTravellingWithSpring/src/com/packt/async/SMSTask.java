package com.packt.async;

import java.util.concurrent.Future;

import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.AsyncResult;
import org.springframework.stereotype.Component;

@Component
public class SMSTask {

	@Async
	public Future<Boolean>  send(String... numbers) {

		System.out.println("Selecting SMS format  ");

		try {
			Thread.sleep(3000);

		} catch (InterruptedException e) {

			e.printStackTrace();
			return new AsyncResult<>(false);
		}

		System.out.println("Async SMS send task is Complete!!!");
		return new AsyncResult<>(true);
	}
}
