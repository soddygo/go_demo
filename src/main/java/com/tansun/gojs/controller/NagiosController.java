package com.tansun.gojs.controller;

import com.tansun.gojs.entity.nagios.NotificationsLogsEntity;
import com.tansun.gojs.mq.producer.RockerProducer;
import com.tansun.gojs.service.NagiosService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * nagios 测试
 * Created by soddygosongguochao on 2017/4/6.
 */
@RestController
@RequestMapping(value = "/nagios")
public class NagiosController {

    @Autowired
    private NagiosService nagiosService;

    @Autowired
    private RockerProducer rockerProducer;

    @RequestMapping("/nagiosDemo")
    public String gotoLeafletDemo() throws Exception {

        List<NotificationsLogsEntity> list = this.nagiosService.doNoSendMessageList();
        System.out.printf("length:%s\r\n", list.size());
        for (NotificationsLogsEntity notificationsEntity : list) {
            final String title = notificationsEntity.getTitle();
            final String summary = notificationsEntity.getSummary();

            if (StringUtils.isNoneBlank(title)) {
                this.rockerProducer.sendMessage("topic1", "test",
                        title, summary);
            }

        }

        return "nagios test";
    }

}
