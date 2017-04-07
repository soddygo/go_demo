package com.tansun.gojs.task;

import com.tansun.gojs.entity.nagios.NotificationsLogsEntity;
import com.tansun.gojs.mq.producer.RockerProducer;
import com.tansun.gojs.service.NagiosService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * nagios 监控数据任务
 * Created by soddygosongguochao on 2017/4/7.
 */
@Component
public class NagiosTask {

    private String topic = "topic1";
    private String tag = "test";


    @Autowired
    private NagiosService nagiosService;

    @Autowired
    private RockerProducer rockerProducer;

    /**
     * push 监控数据
     */
    public void produceTask() throws Exception {

        List<NotificationsLogsEntity> list = this.nagiosService.doNoSendMessageList();
        //push message
        for (NotificationsLogsEntity notificationsEntity : list) {
            final String title = notificationsEntity.getTitle();
            final String summary = notificationsEntity.getSummary();

            if (StringUtils.isNoneBlank(title)) {
                this.rockerProducer.sendMessage(this.topic, this.tag, title, summary);
            }
        }
    }
}
