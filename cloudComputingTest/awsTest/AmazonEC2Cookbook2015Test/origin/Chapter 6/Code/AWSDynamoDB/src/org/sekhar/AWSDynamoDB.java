package org.sekhar;

import java.util.ArrayList;
import java.util.List;

import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBQueryExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeDefinition;
import com.amazonaws.services.dynamodbv2.model.CreateTableRequest;
import com.amazonaws.services.dynamodbv2.model.KeySchemaElement;
import com.amazonaws.services.dynamodbv2.model.KeyType;
import com.amazonaws.services.dynamodbv2.model.ProvisionedThroughput;

public class AWSDynamoDB {

	public static void main(String[] args) {

		// CreateTable();

		// InsertItem();

		GetItem();

	}

	// Initialize DynamoDB client.
	public static AmazonDynamoDBClient Initialize() {

		// Create BasicAWSCredentials with Access Key Id and Secret Access Key.
		BasicAWSCredentials credentials = new BasicAWSCredentials(
				"Access Key Id", "Secret Access Key");

		// Create DynamoDB client.
		AmazonDynamoDBClient dynamoDBClient = new AmazonDynamoDBClient(
				credentials);

		// Set endpoint.
		dynamoDBClient.setEndpoint("dynamodb.ap-southeast-1.amazonaws.com");

		// Return client.
		return dynamoDBClient;
	}

	// Create table.
	public static void CreateTable() {

		// Get DynamoDB client.
		AmazonDynamoDBClient dynamoDBClient = Initialize();

		// Create attribute definition collection.
		ArrayList<AttributeDefinition> definitions = new ArrayList<AttributeDefinition>();

		// Add attribute definition for UserId.
		definitions.add(new AttributeDefinition().withAttributeName("UserId")
				.withAttributeType("N"));

		// Create key schema element collection.
		ArrayList<KeySchemaElement> schema = new ArrayList<KeySchemaElement>();

		// Set UserId as primary key and type as HASH.
		schema.add(new KeySchemaElement().withAttributeName("UserId")
				.withKeyType(KeyType.HASH));

		// Set provisioned throughput.
		ProvisionedThroughput throughput = new ProvisionedThroughput()
				.withReadCapacityUnits(10L).withWriteCapacityUnits(10L);

		// Prepare create table request.
		CreateTableRequest request = new CreateTableRequest()
				.withTableName("user").withKeySchema(schema)
				.withProvisionedThroughput(throughput);

		// Set attribute definitions.
		request.setAttributeDefinitions(definitions);

		// Creates table.
		dynamoDBClient.createTable(request);
	}

	// Insert item.
	public static void InsertItem() {

		// Get DynamoDB client.
		AmazonDynamoDBClient dynamoDBClient = Initialize();

		// Create mapper object.
		DynamoDBMapper mapper = new DynamoDBMapper(dynamoDBClient);

		// Initialize user object.
		User objUser = new User();

		// Set user id.
		objUser.UserId = 123;

		// Set user name.
		objUser.Name = "Andrew";

		// Set age.
		objUser.Age = 28;

		// Set city.
		objUser.City = "San Francisco";

		// Save user item.
		mapper.save(objUser);
	}

	// Retrieve item.
	public static void GetItem() {

		// Get DynamoDB client.
		AmazonDynamoDBClient dynamoDBClient = Initialize();

		// Create mapper object.
		DynamoDBMapper mapper = new DynamoDBMapper(dynamoDBClient);

		// Initialize user object.
		User objUser = new User();

		// Set user id.
		objUser.UserId = 123;

		// Prepare query.
		DynamoDBQueryExpression<User> query = new DynamoDBQueryExpression<User>()
				.withHashKeyValues(objUser);

		// Retrieve items from DynamoDB.
		List<User> list = mapper.query(User.class, query);

		// Iterate through all items.
		for (User user : list) {

			// Get user name.
			String userName = user.getName();

			// Get user age.
			int userAge = user.getAge();
		}
	}
}
