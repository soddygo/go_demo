package com.tansun.gojs.listener;

import net.bull.javamelody.SessionListener;
import org.apache.log4j.Logger;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.annotation.WebListener;

@WebListener
public class SystemContextLoaderListener extends ContextLoaderListener {

	public static ServletContext context;


	@Override
	public void contextDestroyed(ServletContextEvent event) {
		
		super.contextDestroyed(event);
	}
	
	@Override
	public void contextInitialized(ServletContextEvent event) {

		Logger trslog = Logger.getLogger(getClass());
		context = event.getServletContext();
		context.setInitParameter("contextConfigLocation", "classpath*:spring/spring.xml");
		context.addListener(SessionListener.class);

		super.contextInitialized(event);
		//系统初始化方法执行
		WebApplicationContext springContext = WebApplicationContextUtils.getWebApplicationContext(event.getServletContext());
//		SpringFactory.Spring.setSpringContext(springContext);
//		SpringFactory.Spring.springLog();
	}
}
