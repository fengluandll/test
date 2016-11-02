package com.madhusudhan.jsd.hibernate;

import java.sql.SQLException;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.HibernateTemplate;

import com.madhusudhan.jsd.domain.DomainUtil;
import com.madhusudhan.jsd.domain.Trade;

public class HibernateDaoSupportTest {
	
	private HibernateTemplate template = null;
	
	private ApplicationContext ctx = null;
	
	public HibernateDaoSupportTest() {
		ctx = new ClassPathXmlApplicationContext("hibernate-beans.xml");
		
		template = ctx.getBean("hibernateTemplate",HibernateTemplate.class);
	}
	
	public void insertTrade(Trade t){
		template.save(t);
		System.out.println("Trade inserted using HibernateTemplate");
	}
	
	public void deleteTrade(Trade t){
		template.delete(t);
		System.out.println("Trade deleted using HibernateTemplate");
	}
	
	public void findAllTrades(String status){
		String tradeQuery = "from Trade t where status=?";
		List<Trade> trades = template.find(tradeQuery,status);
		System.out.println("Trade retrieved using HibernateTemplate:"+trades);
	}

	public void inCallBack() {
		template.execute(new HibernateCallback(){

			@Override
			public Object doInHibernate(Session session)
					throws HibernateException, SQLException {
				// Use the session to execute custom calls
				// ...
				return null;
			}});
	}
//	public void findTradesInCallback(){
//		List<Trade> trades = template.find(tradeQuery,"NEW");
//		System.out.println("Trade retrieved using HibernateTemplate:"+trades);
//	}
	
	public static void main(String[] args) {
		HibernateDaoSupportTest t = new HibernateDaoSupportTest();
		t.insertTrade(DomainUtil.createDummyTrade());
//		t.deleteTrade(DomainUtil.createDummyTrade());
		t.findAllTrades("NEW");
		
	}
}
