package org.sekhar;

import java.io.File;

import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.GetObjectRequest;

public class AWSS3 {

	public static void main(String[] args) {

		DownloadObject();

	}

	// Create S3 bucket.
	public static void CreateBucket() {

		// Create BasicAWSCredentials with Access Key Id and Secret Access Key.
		BasicAWSCredentials credentials = new BasicAWSCredentials(
				"Access Key Id", "Secret Access Key");

		// Create S3 client.
		AmazonS3Client s3Client = new AmazonS3Client(credentials);

		// Set endpoint.
		s3Client.setEndpoint("s3-ap-southeast-1.amazonaws.com");

		// Create bucket.
		s3Client.createBucket("laurenceluckinbill");

	}

	// Upload object.
	public static void UploadObject() {

		// Create BasicAWSCredentials with Access Key Id and Secret Access Key.
		BasicAWSCredentials credentials = new BasicAWSCredentials(
				"Access Key Id", "Secret Access Key");

		// Create S3 client.
		AmazonS3Client s3Client = new AmazonS3Client(credentials);

		// File to upload.
		File file = new File("D:\\ReadMe.txt");

		// Upload object into bucket.
		s3Client.putObject("laurenceluckinbill", "Readme.txt", file);
	}

	// Download object.
	public static void DownloadObject() {

		// Create BasicAWSCredentials with Access Key Id and Secret Access Key.
		BasicAWSCredentials credentials = new BasicAWSCredentials(
				"Access Key Id", "Secret Access Key");

		// Create S3 client.
		AmazonS3Client s3Client = new AmazonS3Client(credentials);

		// Local file path.
		String path = "D:\\ReadMe.txt";

		// Download object.
		s3Client.getObject(new GetObjectRequest("laurenceluckinbill",
				"Readme.txt"), new File(path));
	}

}
