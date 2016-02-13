package com.spark.learnning.spring_in_action_e4.soundsystem;

import static org.junit.Assert.assertNotNull;

import org.junit.Rule;
import org.junit.Test;
import org.junit.contrib.java.lang.system.StandardOutputStreamLog;
import org.junit.runner.RunWith;
import static org.junit.Assert.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = CDPlayerConfig.class)
public class CDPlayerTest {
	@Autowired
	private CompactDisc cd;

	@Autowired
	private MediaPlayer player;
	
	@Rule
	public final StandardOutputStreamLog log = new StandardOutputStreamLog();

	@Test
	public void cdShouldNotBeNull() {
		assertNotNull(cd);
	}
	
	@Test
	public void play() {
		player.play();
		assertEquals(
				"Playing Sgt. Pepper's Lonely Hearts Club Band" +
				" by The Beatles\n",
				log.getLog());
	}
}
