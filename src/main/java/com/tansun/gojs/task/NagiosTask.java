package com.tansun.gojs.task;

import com.tansun.gojs.service.NagiosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * nagios 监控数据任务
 * Created by soddygosongguochao on 2017/4/7.
 */
@Component
public class NagiosTask {


    @Autowired
    private NagiosService nagiosService;


    /**
     * push 监控数据
     */
    public void produceTask() throws Exception {

        this.nagiosService.doSendMessageList();
    }
}
