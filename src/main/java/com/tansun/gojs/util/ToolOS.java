package com.tansun.gojs.util;


/**
 * 系统环境相关
 */
public class ToolOS {

	/**
	 * 获取操作系统类型名称
	 */
	public static String getOsName() {
		return System.getProperty("os.name");
	}
	
	/**
	 * 是否为windows系统
	 * @return
	 */
	public static boolean isWindows(){
		return getOsName().toLowerCase().indexOf("windows") >= 0;
	}
	/**
	 * 是否为linux系统
	 * @return
	 */
	public static boolean isLinux(){
		return getOsName().toLowerCase().indexOf("linux") >= 0;
	}
	
	/**
	 * 是否为mac os 系统
	 * @return
	 */
	public static boolean isMacOS(){  
		String osName = getOsName().toLowerCase();
        return osName.toLowerCase().indexOf("mac")>=0&&osName.indexOf("os")>0&&osName.indexOf("x")<0;  
    }
	
	/**
	 * 是否为mac os x 系统
	 * @return
	 */
	public static boolean isMacOSX(){  
		String osName = getOsName().toLowerCase();
        return osName.indexOf("mac")>=0&&osName.indexOf("os")>0&&osName.indexOf("x")>0;  
    } 


}
