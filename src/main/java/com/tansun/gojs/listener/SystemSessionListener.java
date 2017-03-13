package com.tansun.gojs.listener;

import org.infinispan.notifications.Listener;

import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;
import java.util.HashMap;
import java.util.Map;

/**
 * HttpSession监听器
 *
 * @author Feibiao
 */
@WebListener
public class SystemSessionListener implements HttpSessionListener {

    /**
     * 判断是否在线的活跃时间
     */
    private final static int ONLINE_ACTIVETIME = 10 * 60 * 1000;

    /**
     * session总数
     */
    private final static Map<String, HttpSession> sessionMap = new HashMap<String, HttpSession>();

    public void sessionCreated(HttpSessionEvent sessionEvent) {
        HttpSession session = sessionEvent.getSession();
        sessionMap.put(session.getId(), session);
    }

    public void sessionDestroyed(HttpSessionEvent sessionEvent) {
        HttpSession session = sessionEvent.getSession();
        sessionMap.remove(session.getId());

    }


}
