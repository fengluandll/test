package org.sekhar;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.route53.AmazonRoute53Client;
import com.amazonaws.services.route53.model.Change;
import com.amazonaws.services.route53.model.ChangeAction;
import com.amazonaws.services.route53.model.ChangeBatch;
import com.amazonaws.services.route53.model.ChangeResourceRecordSetsRequest;
import com.amazonaws.services.route53.model.CreateHostedZoneRequest;
import com.amazonaws.services.route53.model.CreateHostedZoneResult;
import com.amazonaws.services.route53.model.DelegationSet;
import com.amazonaws.services.route53.model.HostedZone;
import com.amazonaws.services.route53.model.HostedZoneConfig;
import com.amazonaws.services.route53.model.ListHostedZonesResult;
import com.amazonaws.services.route53.model.RRType;
import com.amazonaws.services.route53.model.ResourceRecord;
import com.amazonaws.services.route53.model.ResourceRecordSet;

public class AWSRoute53 {

	public static void main(String[] args) {

		DeleteRecordSet();

	}

	// Create Hosted Zone.
	public static void CreateHostedZone() {

		// Create BasicAWSCredentials with Access Key Id and Secret Access Key.
		BasicAWSCredentials credentials = new BasicAWSCredentials(
				"Access Key Id", "Secret Access Key");

		// Create Route53 client.
		AmazonRoute53Client route53Client = new AmazonRoute53Client(credentials);

		// Set endpoint.
		route53Client.setEndpoint("route53.amazonaws.com");

		// Prepare hosted zone request.
		CreateHostedZoneRequest request = new CreateHostedZoneRequest();

		// Set hosted zone name.
		request.setName("cloudinternals.in");

		// Configuration for hosted zone.
		HostedZoneConfig config = new HostedZoneConfig();

		// Set comment for hosted zone.
		config.setComment("Cloud Internals hosted zone");

		// Set hosted zone configuration.
		request.setHostedZoneConfig(config);

		// Caller reference.
		String callerReference = new Date().toString();

		// Set caller reference.
		request.setCallerReference(callerReference);

		// Create hosted zone.
		CreateHostedZoneResult result = route53Client.createHostedZone(request);

		// Get the hosted zone id.
		String hostedZoneId = result.getHostedZone().getId();

		// Get delegation set.
		DelegationSet delegationSet = result.getDelegationSet();

		// Get name servers information.
		List<String> nameservers = delegationSet.getNameServers();
	}

	// List all the Hosted Zones.
	public static void ListHostedZones() {

		// Create BasicAWSCredentials with Access Key Id and Secret Access Key.
		BasicAWSCredentials credentials = new BasicAWSCredentials(
				"Access Key Id", "Secret Access Key");

		// Create Route53 client.
		AmazonRoute53Client route53Client = new AmazonRoute53Client(credentials);

		// Set endpoint.
		route53Client.setEndpoint("route53.amazonaws.com");

		// List the Hosted Zones.
		ListHostedZonesResult result = route53Client.listHostedZones();

		// Iterate through all the Hosted Zones.
		for (HostedZone hostedZone : result.getHostedZones()) {

			// Get the Hosted Zone id.
			String hostedZoneId = hostedZone.getId();

			// Get the Hosted Zone name.
			String hostedZoneName = hostedZone.getName();
		}
	}

	// Create record set.
	public static void CreateRecordSet() {

		// Create BasicAWSCredentials with Access Key Id and Secret Access Key.
		BasicAWSCredentials credentials = new BasicAWSCredentials(
				"Access Key Id", "Secret Access Key");

		// Create Route53 client.
		AmazonRoute53Client route53Client = new AmazonRoute53Client(credentials);

		// Set endpoint.
		route53Client.setEndpoint("route53.amazonaws.com");

		// Collection of resource records.
		Collection<ResourceRecord> resourceRecords = new ArrayList<ResourceRecord>();

		// Create resource record.
		ResourceRecord resourceRecord = new ResourceRecord();

		// Set IP address.
		resourceRecord.setValue("52.74.74.131");

		// Add resource record to the list.
		resourceRecords.add(resourceRecord);

		// Create resource record set.
		ResourceRecordSet resourceRecordSet = new ResourceRecordSet();

		// Set domain name for the record set.
		resourceRecordSet.setName("api.cloudinternals.in");

		// Set record type.
		resourceRecordSet.setType(RRType.A);

		// Resource record cache time to live in seconds.
		resourceRecordSet.setTTL((long) 300);

		// Set resource records list.
		resourceRecordSet.setResourceRecords(resourceRecords);

		// Create change object.
		Change change = new Change();

		// Set action to create.
		change.setAction(ChangeAction.CREATE);

		// Set resource record set.
		change.setResourceRecordSet(resourceRecordSet);

		// Collection of changes.
		Collection<Change> changes = new ArrayList<Change>();

		// Add the change.
		changes.add(change);

		// Create change batch object.
		ChangeBatch changeBatch = new ChangeBatch();

		// Set changes list.
		changeBatch.setChanges(changes);

		// Prepare resource record set request.
		ChangeResourceRecordSetsRequest request = new ChangeResourceRecordSetsRequest();

		// Set change batch.
		request.setChangeBatch(changeBatch);

		// Set hosted zone id.
		request.setHostedZoneId("Z2RBSZ6TBBCOGZ");

		// Create A record.
		route53Client.changeResourceRecordSets(request);
	}

	// Delete record set.
	public static void DeleteRecordSet() {

		// Create BasicAWSCredentials with Access Key Id and Secret Access Key.
		BasicAWSCredentials credentials = new BasicAWSCredentials(
				"Access Key Id", "Secret Access Key");

		// Create Route53 client.
		AmazonRoute53Client route53Client = new AmazonRoute53Client(credentials);

		// Set endpoint.
		route53Client.setEndpoint("route53.amazonaws.com");

		// Collection of resource records.
		Collection<ResourceRecord> resourceRecords = new ArrayList<ResourceRecord>();

		// Create resource record.
		ResourceRecord resourceRecord = new ResourceRecord();

		// Set IP address.
		resourceRecord.setValue("52.74.74.131");

		// Add resource record to the list.
		resourceRecords.add(resourceRecord);

		// Create resource record set.
		ResourceRecordSet resourceRecordSet = new ResourceRecordSet();

		// Set domain name for the record set.
		resourceRecordSet.setName("api.cloudinternals.in");

		// Set record type.
		resourceRecordSet.setType(RRType.A);

		// Resource record cache time to live in seconds.
		resourceRecordSet.setTTL((long) 300);

		// Set resource records list.
		resourceRecordSet.setResourceRecords(resourceRecords);

		// Create change object.
		Change change = new Change();

		// Set action to create.
		change.setAction(ChangeAction.DELETE);

		// Set resource record set.
		change.setResourceRecordSet(resourceRecordSet);

		// Collection of changes.
		Collection<Change> changes = new ArrayList<Change>();

		// Add the change.
		changes.add(change);

		// Create change batch object.
		ChangeBatch changeBatch = new ChangeBatch();

		// Set changes list.
		changeBatch.setChanges(changes);

		// Prepare resource record set request.
		ChangeResourceRecordSetsRequest request = new ChangeResourceRecordSetsRequest();

		// Set change batch.
		request.setChangeBatch(changeBatch);

		// Set hosted zone id.
		request.setHostedZoneId("Z2RBSZ6TBBCOGZ");

		// Delete A record.
		route53Client.changeResourceRecordSets(request);
	}
}
