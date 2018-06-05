package org.sekhar;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;

@DynamoDBTable(tableName = "user")
public class User {

	public int UserId;

	public String Name;

	public int Age;

	public String City;

	@DynamoDBHashKey(attributeName = "UserId")
	public int getUserId() {
		return UserId;
	}

	public void setUserId(int userId) {
		UserId = userId;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public int getAge() {
		return Age;
	}

	public void setAge(int age) {
		Age = age;
	}

	public String getCity() {
		return City;
	}

	public void setCity(String city) {
		City = city;
	}

}
