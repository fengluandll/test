package org.sekhar;

import java.util.ArrayList;
import java.util.Collection;

import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.simpledb.AmazonSimpleDBClient;
import com.amazonaws.services.simpledb.model.Attribute;
import com.amazonaws.services.simpledb.model.CreateDomainRequest;
import com.amazonaws.services.simpledb.model.GetAttributesRequest;
import com.amazonaws.services.simpledb.model.GetAttributesResult;
import com.amazonaws.services.simpledb.model.PutAttributesRequest;
import com.amazonaws.services.simpledb.model.ReplaceableAttribute;

public class AWSSimpleDB {

	public static void main(String[] args) {

		CreateDomain();

		InsertItem();

		GetItem();
	}

	// Initialize SimpleDB client.
	public static AmazonSimpleDBClient Initialize() {

		// Create BasicAWSCredentials with Access Key Id and Secret Access Key.
		BasicAWSCredentials credentials = new BasicAWSCredentials(
				"Access Key Id", "Secret Access Key");

		// Create SimpleDB client.
		AmazonSimpleDBClient simpleDBClient = new AmazonSimpleDBClient(
				credentials);

		// Set endpoint.
		simpleDBClient.setEndpoint("sdb.ap-southeast-1.amazonaws.com");

		// Return client.
		return simpleDBClient;
	}

	// Create SimpleDB domain.
	public static void CreateDomain() {

		// Get SimpleDB client.
		AmazonSimpleDBClient simpleDBClient = Initialize();

		// Create domain request.
		CreateDomainRequest request = new CreateDomainRequest("user");

		// Creates domain.
		simpleDBClient.createDomain(request);
	}

	// Insert item.
	public static void InsertItem() {

		// Get SimpleDB client.
		AmazonSimpleDBClient simpleDBClient = Initialize();

		// Name attribute.
		ReplaceableAttribute nameAttribute = new ReplaceableAttribute();
		nameAttribute.setName("Name");
		nameAttribute.setValue("Andrew");

		// Age attribute.
		ReplaceableAttribute ageAttribute = new ReplaceableAttribute();
		ageAttribute.setName("Age");
		ageAttribute.setValue("28");

		// City attribute.
		ReplaceableAttribute cityAttribute = new ReplaceableAttribute();
		cityAttribute.setName("City");
		cityAttribute.setValue("San Francisco");

		// Create collection for attributes.
		Collection<ReplaceableAttribute> item = new ArrayList<>();
		item.add(nameAttribute);
		item.add(ageAttribute);
		item.add(cityAttribute);

		// Put request.
		PutAttributesRequest request = new PutAttributesRequest();

		// Set domain name.
		request.setDomainName("user");

		// Set item name.
		request.setItemName("andrew");

		// Set item attributes.
		request.setAttributes(item);

		// Insert item into domain.
		simpleDBClient.putAttributes(request);
	}

	// Retrieve item.
	public static void GetItem() {

		// Get SimpleDB client.
		AmazonSimpleDBClient simpleDBClient = Initialize();

		// Prepare get request.
		GetAttributesRequest request = new GetAttributesRequest();

		// Set domain name.
		request.setDomainName("user");

		// Set item name.
		request.setItemName("andrew");

		// Get item from domain.
		GetAttributesResult result = simpleDBClient.getAttributes(request);

		// Iterate through all attributes.
		for (Attribute attribute : result.getAttributes()) {

			// Get attribute name.
			String name = attribute.getName();

			// Get attribute valeu.
			String value = attribute.getValue();
		}
	}
}
