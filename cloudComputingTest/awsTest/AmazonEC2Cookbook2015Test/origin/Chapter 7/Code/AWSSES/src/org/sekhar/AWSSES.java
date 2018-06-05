package org.sekhar;

import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.simpleemail.AmazonSimpleEmailServiceClient;
import com.amazonaws.services.simpleemail.model.Body;
import com.amazonaws.services.simpleemail.model.Content;
import com.amazonaws.services.simpleemail.model.Destination;
import com.amazonaws.services.simpleemail.model.Message;
import com.amazonaws.services.simpleemail.model.SendEmailRequest;

public class AWSSES {

	public static void main(String[] args) {
		SendEmail();
	}

	// Send Email.
	public static void SendEmail() {

		// List of to addresses.
		String[] TO = new String[] { "sekhar4233@gmail.com" };

		// Email from address.
		String FROM = "sekhar@mactores.com";

		// Email subject.
		String SUBJECT = "Test Email";

		// Email body.
		String BODY = "This is test email.";

		// Set to addresses.
		Destination destination = new Destination().withToAddresses(TO);

		// Create email subject.
		Content subject = new Content().withData(SUBJECT);

		// Create email body.
		Content textBody = new Content().withData(BODY);
		Body body = new Body().withText(textBody);

		// Create a message with the specified subject and body.
		Message message = new Message().withSubject(subject).withBody(body);

		// Assemble the email.
		SendEmailRequest request = new SendEmailRequest().withSource(FROM)
				.withDestination(destination).withMessage(message);

		// Create BasicAWSCredentials with Access Key Id and Secret Access Key.
		BasicAWSCredentials credentials = new BasicAWSCredentials(
				"Access Key Id", "Secret Access Key");

		// Create SES client.
		AmazonSimpleEmailServiceClient sesClient = new AmazonSimpleEmailServiceClient(
				credentials);

		// Set endpoint.
		sesClient.setEndpoint("email.us-east-1.amazonaws.com");

		// Send the email.
		sesClient.sendEmail(request);
	}
}
