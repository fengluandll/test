package com.apress;

import javax.inject.Inject;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.mangofactory.swagger.configuration.SpringSwaggerConfig;
import com.mangofactory.swagger.models.dto.ApiInfo;
import com.mangofactory.swagger.models.dto.builder.ApiInfoBuilder;
import com.mangofactory.swagger.plugin.EnableSwagger;
import com.mangofactory.swagger.plugin.SwaggerSpringMvcPlugin;

@Configuration
@EnableSwagger
public class SwaggerConfig {

	@Inject
	private SpringSwaggerConfig springSwaggerConfig;
	
	@Bean
	public SwaggerSpringMvcPlugin configureSwagger() {
		swaggerSpringMvcPlugin.useDefaultResponseMessages(false);
		
	    return swaggerSpringMvcPlugin;
	}
}
