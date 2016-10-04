package com.packt.async;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations="classpath:com/packt/async/applicationContext.xml")
@EnableAsync
public class AsyncTaskExecutionTest {

	@Autowired
	ApplicationContext context;
	
	@Test
	public void jobTest() throws Exception {
	  AccountJob job = (AccountJob)context.getBean(AccountJob.class);
	  job.process();
	}
}
