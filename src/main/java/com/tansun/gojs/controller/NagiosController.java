package com.tansun.gojs.controller;

import com.tansun.gojs.entity.nagios.NotificationsLogsEntity;
import com.tansun.gojs.mq.producer.RockerProducer;
import com.tansun.gojs.service.NagiosService;
import com.tansun.gojs.task.NagiosTask;
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

    @Autowired
    private NagiosTask nagiosTask;

    @RequestMapping("/nagiosDemo")
    public String gotoLeafletDemo() throws Exception {

        this.nagiosTask.produceTask();

        return "nagios test";
    }

}
