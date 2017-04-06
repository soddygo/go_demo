package com.tansun.gojs.service;

import com.tansun.gojs.entity.nagios.NotificationsEntity;
import com.tansun.gojs.entity.nagios.NotificationsLogsEntity;

import java.util.List;

/**
 * nagios查询接口
 * Created by soddygosongguochao on 2017/4/6.
 */
public interface NagiosService {
    /**
     * 查询所有通知消息
     * @return 消息对象
     * @throws Exception 异常
     */
    List<NotificationsEntity> getNotificationList()throws Exception;

    /**
     * 获取未读通知
     * @return 消息对象
     * @throws Exception 异常
     */
    List<NotificationsLogsEntity> doNoSendMessageList() throws Exception;
}
