package com.tansun.gojs.util;

import org.springframework.beans.factory.DisposableBean;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Utils - Spring
 * 
 * @author TRS Team
 * @version 1.0
 */
@Component("springUtils")
@Lazy(false)
public final class SpringUtils implements ApplicationContextAware, DisposableBean {

	/** applicationContext */
	private static ApplicationContext applicationContext;

	/**
	 * 不可实例化
	 */
	private SpringUtils() {
	}

	@Override
	public void setApplicationContext(ApplicationContext applicationContext) {
		SpringUtils.applicationContext = applicationContext;
	}

	public void destroy() throws Exception {
		applicationContext = null;
	}

	/**
	 * 获取applicationContext
	 * 
	 * @return applicationContext
	 */
	public static ApplicationContext getApplicationContext() {
		return applicationContext;
	}

	/**
	 * 获取实例
	 * 
	 * @param name
	 *            Bean名称
	 * @return 实例
	 */
	public static Object getBean(String name) {
		return applicationContext.getBean(name);
	}

	/**
	 * 按照类型获取实例
	 * 
	 * @param type
	 * @return
	 */
	public static <T> T getBean(Class<T> type) {

		return applicationContext.getBean(type);
	}

	public static <T> Map<String, T> getBeansMap(Class<T> type) {

		return applicationContext.getBeansOfType(type);
	}

	public static <T> List<T> getBeans(Class<T> type) {

		Map<String, T> map = getBeansMap(type);

		List<T> result = new ArrayList<T>(map.size());
		for (T entity : map.values()) {
			result.add(entity);
		}

		return result;
	}

	/**
	 * 获取实例
	 * 
	 * @param name
	 *            Bean名称
	 * @param type
	 *            Bean类型
	 * @return 实例
	 */
	public static <T> T getBean(String name, Class<T> type) {
		return applicationContext.getBean(name, type);
	}

}