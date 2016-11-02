package com.madhusudhan.jsd.jdo.template;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.madhusudhan.jsd.jdo.JDOPrice;

public class JdoUsingTemplateTest {
	private ApplicationContext ctx = null;
	private JdoTemplatePriceDAO jdoTemplatePriceDAO = null;

	public JdoUsingTemplateTest() {
		ctx = new ClassPathXmlApplicationContext("jdo-template-beans.xml");
		jdoTemplatePriceDAO = ctx.getBean("jdoTemplatePriceDAO", JdoTemplatePriceDAO.class);
		System.out.println("jdoTemplatePriceDAO:" + jdoTemplatePriceDAO);
	}

	private void persist(JDOPrice p) {
		jdoTemplatePriceDAO.persist(p);
	}

	public static void main(String[] args) {
		JdoUsingTemplateTest test = new JdoUsingTemplateTest();
		JDOPrice p = new JDOPrice();
		p.setId(32233);
		p.setPrice(32.22);
		p.setSecurity("UKMS");
		test.persist(p);
	}

}
