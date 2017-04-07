package com.tansun.gojs.mq.consumer;

import com.alibaba.rocketmq.client.consumer.DefaultMQPushConsumer;
import com.alibaba.rocketmq.client.consumer.listener.ConsumeConcurrentlyContext;
import com.alibaba.rocketmq.client.consumer.listener.ConsumeConcurrentlyStatus;
import com.alibaba.rocketmq.client.consumer.listener.MessageListenerConcurrently;
import com.alibaba.rocketmq.client.exception.MQClientException;
import com.alibaba.rocketmq.common.consumer.ConsumeFromWhere;
import com.alibaba.rocketmq.common.message.MessageExt;
import com.tansun.gojs.mq.producer.RockerProducer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Lazy;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.util.List;

/**
 * rocker消费者
 * Created by soddygosongguochao on 2017/4/6.
 */

@Scope("singleton")
@Component
@Lazy(false)
public class RockerConsume {

    private Logger logger = LoggerFactory.getLogger(RockerProducer.class);

    private String ip = "127.0.0.1";
    private String port = "9876";
    private String topic = "topic1";
    private String tag = "test";

    DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("ConsumerGroupName");


    @PostConstruct
    public void init() {
        consumer.setNamesrvAddr(ip + ":" + port);
        try {
//            consumer.subscribe("TopicTest1", "TagA || TagC || TagD");
            consumer.subscribe(this.topic, "*");
            consumer.setConsumeFromWhere(ConsumeFromWhere.CONSUME_FROM_FIRST_OFFSET);
            consumer.registerMessageListener(new MessageListenerConcurrently() {

                /**
                 * * 默认msgs里只有一条消息，可以通过设置consumeMessageBatchMaxSize参数来批量接收消息
                 */
                @Override
                public ConsumeConcurrentlyStatus consumeMessage(
                        List<MessageExt> msgs, ConsumeConcurrentlyContext context) {
                    System.out.println(Thread.currentThread().getName()
                            + " Receive New Messages: " + msgs);

                    MessageExt msg = msgs.get(0);
                    String message = msg.getBody().toString();
                    System.out.printf("message:%s\r\n", message);

                    return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
                }
            });

            consumer.start();

            System.out.println("Consumer Started.\r\n");

        } catch (MQClientException e) {
            e.printStackTrace();
        }
    }

    @PreDestroy
    public void destroy() {
        consumer.shutdown();
        System.out.printf("consumer destroy");

    }


}
