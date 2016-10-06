package com.packt.lifecycle.my2;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.*;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

/**
 * Created by Allbts-IT on 4/10/2016.
 */
public class HelloWorld implements ApplicationContextAware,BeanNameAware, InitializingBean,
        BeanFactoryAware,BeanPostProcessor, DisposableBean {
    private String message;
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }

    public void myInit(){
        System.out.println("custom myInit is called ");
    }

    public void myDestroy(){
        System.out.println("custom myDestroy is called ");
    }

    @Override
    public void setBeanFactory(BeanFactory beanFactory) throws BeansException {
        System.out.println("setBeanFactory is called ");
    }

    @Override
    public void setBeanName(String s) {
        System.out.println("setBeanName is called with " + s);
    }

    @Override
    public void destroy() throws Exception {
        System.out.println("destroy is called ");// TODO Auto-generated method stub
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println("afterPropertiesSet is called ");
    }

    @Override
    public Object postProcessBeforeInitialization(Object o, String s) throws BeansException {
        System.out.println("postProcessBeforeInitialization is called with "+o+" and "+s);
        return null;
    }

    @Override
    public Object postProcessAfterInitialization(Object o, String s) throws BeansException {
        System.out.println("postProcessAfterInitialization is called with "+o+" and "+s);
        return null;
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        System.out.println("setApplicationContext is called ");
    }
}
