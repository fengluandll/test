package org.sekhar;

import java.util.List;

import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.dynamodbv2.model.DeleteRequest;
import com.amazonaws.services.sqs.AmazonSQSClient;
import com.amazonaws.services.sqs.model.DeleteMessageRequest;
import com.amazonaws.services.sqs.model.Message;
import com.amazonaws.services.sqs.model.ReceiveMessageRequest;
import com.amazonaws.services.sqs.model.SendMessageRequest;

public class AWSSQS {

	public static void main(String[] args) {
		DeleteQueue();
	}

	// Create queue.
	public static void CreateQueue() {

		// Create BasicAWSCredentials with Access Key Id and Secret Access Key.
		BasicAWSCredentials credentials = new BasicAWSCredentials(
				"Access Key Id", "Secret Access Key");

		// Create SQS client.
		AmazonSQSClient sqsClient = new AmazonSQSClient(credentials);

		// Set endpoint.
		sqsClient.setEndpoint("sqs.ap-southeast-1.amazonaws.com");

		// Create queue.
		sqsClient.createQueue("thumbnailjobinput");
	}

	// Insert message.
	public static void InsertMessage() {

		// Create BasicAWSCredentials with Access Key Id and Secret Access Key.
		BasicAWSCredentials credentials = new BasicAWSCredentials(
				"Access Key Id", "Secret Access Key");

		// Create SQS client.
		AmazonSQSClient sqsClient = new AmazonSQSClient(credentials);

		// Set endpoint.
		sqsClient.setEndpoint("sqs.ap-southeast-1.amazonaws.com");

		// Insert message.
		sqsClient.sendMessage(new SendMessageRequest().withQueueUrl(
				"thumbnailjobinput").withMessageBody("789"));

	}

	// Receive message.
	public static void ReceiveMessage() {

		// Create BasicAWSCredentials with Access Key Id and Secret Access Key.
		BasicAWSCredentials credentials = new BasicAWSCredentials(
				"Access Key Id", "Secret Access Key");

		// Create SQS client.
		AmazonSQSClient sqsClient = new AmazonSQSClient(credentials);

		// Set endpoint.
		sqsClient.setEndpoint("sqs.ap-southeast-1.amazonaws.com");

		// Prepare the request.
		ReceiveMessageRequest request = new ReceiveMessageRequest(
				"thumbnailjobinput");

		// Set number of messages to retrieve from queue.
		request.setMaxNumberOfMessages(1);

		// Get messages.
		List<Message> lstMessage = sqsClient
				.receiveMessage("thumbnailjobinput").getMessages();

		// Iterate through messages.
		for (Message message : lstMessage) {

			// Get the message body.
			String msg = message.getBody();
		}
	}

	// Receive and Delete message.
	public static void ReceiveAndDeleteMessage() {

		// Create BasicAWSCredentials with Access Key Id and Secret Access Key.
		BasicAWSCredentials credentials = new BasicAWSCredentials(
				"Access Key Id", "Secret Access Key");

		// Create SQS client.
		AmazonSQSClient sqsClient = new AmazonSQSClient(credentials);

		// Set endpoint.
		sqsClient.setEndpoint("sqs.ap-southeast-1.amazonaws.com");

		// Prepare the request.
		ReceiveMessageRequest request = new ReceiveMessageRequest(
				"thumbnailjobinput");

		// Set number of messages to retrieve from queue.
		request.setMaxNumberOfMessages(1);

		// Get messages.
		List<Message> lstMessage = sqsClient
				.receiveMessage("thumbnailjobinput").getMessages();

		// Iterate through messages.
		for (Message message : lstMessage) {

			// Get the message body.
			String msg = message.getBody();

			// Process the message.

			// Delete the message after processing message.
			String receiptHandle = message.getReceiptHandle();

			// Prepare request.
			DeleteMessageRequest deleteRequest = new DeleteMessageRequest();

			// Set queue name.
			deleteRequest.setQueueUrl("thumbnailjobinput");

			// Set receipt handle.
			deleteRequest.setReceiptHandle(receiptHandle);

			// Delete message.
			sqsClient.deleteMessage(deleteRequest);
		}
	}

	// Delete queue.
	public static void DeleteQueue() {

		// Create BasicAWSCredentials with Access Key Id and Secret Access Key.
		BasicAWSCredentials credentials = new BasicAWSCredentials(
				"Access Key Id", "Secret Access Key");

		// Create SQS client.
		AmazonSQSClient sqsClient = new AmazonSQSClient(credentials);

		// Set endpoint.
		sqsClient.setEndpoint("sqs.ap-southeast-1.amazonaws.com");

		// Delete queue.
		sqsClient.deleteQueue("thumbnailjobinput");
	}
}
