package com.packt.lifecycle;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.BeanFactoryAware;
import org.springframework.beans.factory.BeanNameAware;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

public class HelloWorld implements ApplicationContextAware,BeanNameAware, InitializingBean,
		BeanFactoryAware,BeanPostProcessor,  DisposableBean {

	private String message;

	public String getMessage() {
		return message;
	}
	
	@Autowired
	public void setMessage(String message) {
		this.message = message;
	}	
	
	
	public void setBeanName(String arg0) {
		System.out.println("setBeanName is called with " + arg0);

	}

	@Override
	public void afterPropertiesSet() throws Exception {
		System.out.println("afterPropertiesSet is called ");
	}

	@Override
	public void setBeanFactory(BeanFactory arg0) throws BeansException {
		System.out.println("setBeanFactory is called ");
	}

	public void myInit() {
		System.out.println("custom myInit is called ");
	}

	public void myDestroy() {
		System.out.println("custom myDestroy is called ");
	}
	
	@Override
	public void destroy() throws Exception {
		System.out.println("destroy is called ");// TODO Auto-generated method stub
	}

	@Override
	public Object postProcessAfterInitialization(Object arg0, String arg1)
			throws BeansException {
		System.out.println("postProcessAfterInitialization is called with "+arg0+" and "+arg1);
		return null;
	}

	@Override
	public Object postProcessBeforeInitialization(Object arg0, String arg1)
			throws BeansException {
		System.out.println("postProcessBeforeInitialization is called with "+arg0+" and "+arg1);
		return null;
	}

	@Override
	public void setApplicationContext(ApplicationContext arg0)
			throws BeansException {
		System.out.println("setApplicationContext is called ");	
	}

}
