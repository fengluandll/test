package org.sekhar;

import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.sns.AmazonSNSClient;
import com.amazonaws.services.sns.model.CreateTopicResult;

public class AWSSNS {

	public static void main(String[] args) {

		Publish();

	}

	// Create topic.
	public static void CreateTopic() {

		// Create BasicAWSCredentials with Access Key Id and Secret Access Key.
		BasicAWSCredentials credentials = new BasicAWSCredentials(
				"Access Key Id", "Secret Access Key");

		// Create SNS client.
		AmazonSNSClient snsClient = new AmazonSNSClient(credentials);

		// Set endpoint.
		snsClient.setEndpoint("sns.ap-southeast-1.amazonaws.com");

		// Create topic.
		CreateTopicResult result = snsClient.createTopic("emailalerts");

		// Get the topic Arn.
		String topicArn = result.getTopicArn();
	}

	// Subscribe to a topic.
	public static void Subscribe() {

		// Create BasicAWSCredentials with Access Key Id and Secret Access Key.
		BasicAWSCredentials credentials = new BasicAWSCredentials(
				"Access Key Id", "Secret Access Key");

		// Create SNS client.
		AmazonSNSClient snsClient = new AmazonSNSClient(credentials);

		// Set endpoint.
		snsClient.setEndpoint("sns.ap-southeast-1.amazonaws.com");

		// Subscribe to a topic by email protocol.
		snsClient.subscribe(
				"arn:aws:sns:ap-southeast-1:968336292411:emailalerts", "email",
				"sekhar@mactores.com");
	}

	// Publish to a topic.
	public static void Publish() {

		// Create BasicAWSCredentials with Access Key Id and Secret Access Key.
		BasicAWSCredentials credentials = new BasicAWSCredentials(
				"Access Key Id", "Secret Access Key");

		// Create SNS client.
		AmazonSNSClient snsClient = new AmazonSNSClient(credentials);

		// Set endpoint.
		snsClient.setEndpoint("sns.ap-southeast-1.amazonaws.com");

		// Publish to a topic.
		snsClient.publish(
				"arn:aws:sns:ap-southeast-1:968336292411:emailalerts",
				"This is test message.");
	}
}
