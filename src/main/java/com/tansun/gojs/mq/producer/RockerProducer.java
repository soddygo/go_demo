package com.tansun.gojs.mq.producer;

import com.alibaba.rocketmq.client.exception.MQBrokerException;
import com.alibaba.rocketmq.client.exception.MQClientException;
import com.alibaba.rocketmq.client.producer.DefaultMQProducer;
import com.alibaba.rocketmq.client.producer.SendResult;
import com.alibaba.rocketmq.common.message.Message;
import com.alibaba.rocketmq.remoting.exception.RemotingException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Lazy;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

/**
 * rocker生产者
 * Created by soddygosongguochao on 2017/4/6.
 */
@Scope("singleton")
@Component
@Lazy(false)
public class RockerProducer {


    private Logger logger = LoggerFactory.getLogger(RockerProducer.class);


    private String ip = "127.0.0.1";
    private String port = "9876";
    private String topic = "topic1";
    private String tag = "test";

    DefaultMQProducer producer = new DefaultMQProducer("ProducerGroupName");

    @PostConstruct
    public void init() {
        producer.setNamesrvAddr(ip + ":" + port);
        try {
            producer.start();
        } catch (MQClientException e) {
            e.printStackTrace();
        }
        System.out.println("RockerProducer Started.\r\n");

    }

    public void sendMessage(String key, String message)
            throws InterruptedException, RemotingException, MQClientException, MQBrokerException {
        Message msg = new Message(this.topic,// topic
                this.tag,// tag
                key,// key
                (message).getBytes());// body

        SendResult sendResult = producer.send(msg);
        System.out.printf("sendResult:%s\r\n", sendResult);


    }

    @PreDestroy
    public void destroy() {
        producer.shutdown();
        System.out.printf("producer destroy");
    }

}
