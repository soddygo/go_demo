package com.tansun.gojs.util;

import org.apache.commons.lang3.RandomUtils;
import org.apache.commons.lang3.StringUtils;

import javax.persistence.Table;
import javax.servlet.http.HttpServletRequest;
import java.lang.annotation.Annotation;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
import java.util.UUID;

/**
 * 系统常用工具
 */
public class BaseUtils {
	
	
	/**
	 * 获取实体类注解上的表名
	 * @param clazz
	 * @return
	 */
	public static <T> String getTablename(Class<T> clazz){
		
		Annotation[] annos = clazz.getDeclaredAnnotations();
		for(Annotation anno : annos){
			if(anno instanceof Table){
				Table t = (Table)anno;
				return t.name();
			}
		}
		return "";
	}
	
	/**
	 * 强制转换对象
	 * @param obj
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static <T> T forceCast(Object obj){
		
		return obj==null ? null : (T) obj;
	}
	
	
	/**
	 * 使用md5的算法进行加密
	 */
	public static String makeMD5(String plainText) {
		byte[] secretBytes = null;
		try {
			secretBytes = MessageDigest.getInstance("md5").digest(plainText.getBytes());
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		String md5code = new BigInteger(1, secretBytes).toString(16);// 16进制数字
		// 如果生成数字未满32位，需要前面补0
		for (int i = 0; i < 32 - md5code.length(); i++) {
			md5code = "0" + md5code;
		}
		return md5code;
	}
	
	
	/**
	 * 生成UUID
	 * @return
	 */
	public static String makeUUID(){
		
		return UUID.randomUUID().toString().replace("-", "");
		
	}
	
	/**
	 * 生成数字字符串
	 * @return
	 */
	public static String makeUniNumKey(){
		
		StringBuffer sb = new StringBuffer();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmssSSS");
		sb.append(sdf.format(new Date()));
		sb.append(new Integer(RandomUtils.nextInt(100, 999)).toString());
		return sb.toString();
		
	}
	
	
	/**
	 * 生成验证码
	 * @return
	 */
	public static String makeAuthcode(){
		
		return new Integer(RandomUtils.nextInt(100000, 999999)).toString();
		
	}
	
	/**
	 * 生成随机字符串
	 * @param length 生成字符串的长度  
	 * @return
	 */
	public static String getRandomStr(int length) { 
		
	    String base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";     
	    Random random = new Random();     
	    StringBuffer sb = new StringBuffer();     
	    for (int i = 0; i < length; i++) {     
	        int number = random.nextInt(base.length());     
	        sb.append(base.charAt(number));     
	    }     
	    return sb.toString();     
	 }  
	
	
	/**
	 * 获取登录用户的IP地址
	 * @param request
	 * @return
	 */
	public static String getIpAddr(HttpServletRequest request) {
		String ip = request.getHeader("x-forwarded-for");
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("WL-Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getRemoteAddr();
		}
		if (ip.equals("0:0:0:0:0:0:0:1")) {
			ip = "127.0.0.1";
		}
		if (ip.split(",").length > 1) {
			ip = ip.split(",")[0];
		}
		return ip;
	}
	
	
	
	
	/**
	 * 根据身份证号获取性别
	 * @param idcard
	 * @return
	 */
	public static String getGenderByIdcard(String idcard) {
		if(StringUtils.isBlank(idcard)){
			return null;
		}
		Integer check = null;
		if(idcard.length() == 15){
			check = Integer.parseInt(idcard.substring(13, 14));
		} else if(idcard.length() == 18){
			check = Integer.parseInt(idcard.substring(16, 17));
		}
		if(check != null){
			if(check%2 == 1){
				return "男";
			}
			if(check%2 == 0){
				return "女";
			}
		}
		return null;
		
	}
	
	
	/**
	 * 根据身份证号获取生日
	 * @param idcard
	 * @return
	 */
	public static Date getBirthdayByIdcard(String idcard) {
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		if(StringUtils.isBlank(idcard)){
			return null;
		}
		StringBuffer dateStr = new StringBuffer();
		if(idcard.length() == 15){
			dateStr.append("19").append(idcard.substring(6,12));
		} else if(idcard.length() == 18){
			dateStr.append(idcard.substring(6,14));
		}
		try {
			return sdf.parse(dateStr.toString());
		} catch (Exception e) {
			return null;
		}
		
	}
	
	public static void main(String[] args) {
		System.out.println("管理员密码:" + BaseUtils.makeMD5("zzpttrsadmin!@#"));
		System.out.println("用户密码:" + BaseUtils.makeMD5("111111"));
	}
	
}
