package com.test.lambda;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class ComparatorTest {
	static class Person {
		private String givenName;
		public String surName;

		public String getSurName() {
			return surName;
		}

		public void setSurName(String surName) {
			this.surName = surName;
		}

		private int age;
		private String eMail;
		private String phone;
		private String address;

		public static List<Person> createShortList() {
			ArrayList<Person> a = new ArrayList<Person>();
			Person person;
			person = new Person();
			a.add(person);
			person.surName = "Zhang";

			person = new Person();
			a.add(person);
			person.surName = "Wang";
			return a;
		}

		public void printName() {
			System.out.println(surName);
		}

	}

	public static void main(String[] args) {
		List<Person> personList = Person.createShortList();
		Collections.sort(personList, new Comparator<Person>() {

			@Override
			public int compare(Person p1, Person p2) {
				return p1.getSurName().compareTo(p2.getSurName());
			}
		});

		System.out.println("=== Sorted Asc SurName ===");
		for (Person person : personList) {
			person.printName();
		}

		// Print Asc
		System.out.println("=== Sorted Asc SurName ===");
		Collections.sort(personList, (Person p1, Person p2) ->
		  p1.getSurName().compareTo(p2.getSurName()));

		for (Person p : personList) {
			p.printName();
		}

		// Print Desc
		System.out.println("=== Sorted Desc SurName ===");
		Collections.sort(personList, (p1, p2) -> 
		p2.getSurName().compareTo(p1.getSurName()));

		for (Person p : personList) {
			p.printName();
		}
	}

}
