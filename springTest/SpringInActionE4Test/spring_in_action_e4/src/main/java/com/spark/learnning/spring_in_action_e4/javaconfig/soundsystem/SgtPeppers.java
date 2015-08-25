package com.spark.learnning.spring_in_action_e4.javaconfig.soundsystem;

public class SgtPeppers implements CompactDisc {

	  private String title = "Sgt. Pepper's Lonely Hearts Club Band";  
	  private String artist = "The Beatles";
	  
	  public void play() {
	    System.out.println("Playing " + title + " by " + artist);
	  }

}
