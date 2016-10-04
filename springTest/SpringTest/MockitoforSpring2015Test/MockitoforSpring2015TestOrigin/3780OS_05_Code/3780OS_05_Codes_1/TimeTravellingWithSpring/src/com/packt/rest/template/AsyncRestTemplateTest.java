package com.packt.rest.template;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ExecutionException;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.AsyncClientHttpRequest;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.util.concurrent.ListenableFuture;
import org.springframework.web.client.AsyncRequestCallback;
import org.springframework.web.client.AsyncRestTemplate;
import org.springframework.web.client.ResponseExtractor;

@RunWith(JUnit4.class)
public class AsyncRestTemplateTest {

	@Test
	@Ignore
	public void exchange(){
		AsyncRestTemplate asyncRestTemplate = new AsyncRestTemplate();
		String url ="http://localhost:8080/RESTfulWeb/hello/all/";
		HttpMethod method = HttpMethod.GET;
		Class<String> responseType = String.class;
		//create request entity using HttpHeaders
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.TEXT_PLAIN);
		HttpEntity<String> requestEntity = new HttpEntity<String>("params", headers);
		ListenableFuture<ResponseEntity<String>> future = asyncRestTemplate.exchange(url, method, requestEntity, responseType);
		try {
			//waits for the result
			ResponseEntity<String> entity = future.get();
			//prints body source code for the given URL
			System.out.println(entity.getBody());
		} catch (InterruptedException e) {
			e.printStackTrace();
		} catch (ExecutionException e) {
			e.printStackTrace();
		}
	}
	
	@Test
	public void execute(){
		AsyncRestTemplate asycTemp = new AsyncRestTemplate();
		String url ="http://localhost:8080/RESTfulWeb/hello/reader";
		HttpMethod method = HttpMethod.GET;
		 
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.TEXT_PLAIN);
		AsyncRequestCallback requestCallback = new AsyncRequestCallback (){
					@Override
			public void doWithRequest(AsyncClientHttpRequest request)
							throws IOException {
						System.out.println(request.getURI());
					}
				};
				
		ResponseExtractor<String> responseExtractor = new ResponseExtractor<String>(){
			@Override
			public String extractData(ClientHttpResponse response)
					throws IOException {
				return response.getStatusText();
			}
		};
		
		Map<String,String> urlVariable = new HashMap<String, String>();
		System.out.println("calling");
		ListenableFuture<String> future = asycTemp.execute(url, method, requestCallback, responseExtractor, urlVariable);
		try {
			//waits for the result
			String result = future.get();
			System.out.println("Status =" +result);
		} catch (InterruptedException e) {
			e.printStackTrace();
		} catch (ExecutionException e) {
			e.printStackTrace();
		}
	}
}
