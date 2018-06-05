package org.sekhar;

import java.io.IOException;
import java.net.InetSocketAddress;

import net.spy.memcached.MemcachedClient;

public class AWSElasticCache {

	public static void main(String[] args) throws IOException {

		// Create memcached client.
		MemcachedClient client = new MemcachedClient(new InetSocketAddress(
				"appcachecluster.nzrwy7.cfg.apse1.cache.amazonaws.com", 11211));

		// Set value for key andrew.
		client.set("andrew", 3600, 43);

		// Get value.
		int value = (int) client.get("andrew");
	}
}
