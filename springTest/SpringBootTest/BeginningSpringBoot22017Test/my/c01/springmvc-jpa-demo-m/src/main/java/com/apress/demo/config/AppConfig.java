package com.apress.demo.config;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(basePackages = "com.apress.demo.repositories")
@PropertySource(value = {"classpath:application.properties"})
public class AppConfig {
    
}
