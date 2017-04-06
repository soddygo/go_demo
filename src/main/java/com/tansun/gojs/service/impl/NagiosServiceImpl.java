package com.tansun.gojs.service.impl;

import com.tansun.gojs.dao.BaseDao;
import com.tansun.gojs.entity.nagios.NotificationsEntity;
import com.tansun.gojs.entity.nagios.NotificationsLogsEntity;
import com.tansun.gojs.service.NagiosService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * nagios信息采集实现
 * Created by soddygosongguochao on 2017/4/6.
 */
@Service
public class NagiosServiceImpl implements NagiosService {


    @Resource(name = "baseDao")
    private BaseDao baseDao;

    @Override
    public List<NotificationsEntity> getNotificationList() throws Exception {
        final String sql ="  SELECT\n" +
                "    # 告警表唯一ID\n" +
                "    UUID()                ID,\n" +
                "    # 底层上报的原始ID\n" +
                "    T5.NOTIFICATION_ID    ID_ORIGINAL,\n" +
                "    # 故障发生对象的IP\n" +
                "    T1.ADDRESS            IP,\n" +
                "    # 故障发生的主机名\n" +
                "    T1.DISPLAY_NAME       HOSTNAME,\n" +
                "    # 数据来源标志\n" +
                "    '基础环境监控'              SOURCE,\n" +
                "    # 业务系统\n" +
                "    ''                    BUSINESS_SYSTEM,\n" +
                "    # 监控分类：操作系统、数据库、中间件等\n" +
                "    T31.ALIAS             CATEGORY,\n" +
                "    # 对象类（探针类型）的分类：CPU、FILESYSTEM、磁盘、数据库实例1\n" +
                "    T6.NAME1              OBJECT_CLASS,\n" +
                "    # 对象类（探针类型）指：CPU_TOTAL、/HOME、DISK1、表空间1\n" +
                "    T3.SERVICE_OBJECT_ID  OBJECT,\n" +
                "    # 实例\n" +
                "    T1.INSTANCE_ID        INSTANCE,\n" +
                "    # 监控指标:CPU使用率、内存使用率等\n" +
                "    T3.DISPLAY_NAME       PARAMETER,\n" +
                "    # 指标值\n" +
                "    T4.CHECK_COMMAND      PARAMETER_VALUE,\n" +
                "    # 级别（1-5）\n" +
                "    NULL                  SEVERITY,\n" +
                "    # 原始级别\n" +
                "    T5.NOTIFICATION_TYPE  ORIGINAL_SEVERITY,\n" +
                "    # 标题\n" +
                "    T5.OUTPUT             TITLE,\n" +
                "    # 告警正文\n" +
                "    T5.LONG_OUTPUT        SUMMARY,\n" +
                "    # 状态更改事件（INSERT、UPDATE等）\n" +
                "    T4.CURRENT_STATE      STATE_CHANGE,\n" +
                "    # 首次发生时间\n" +
                "    T4.LAST_STATE_CHANGE  FIRST_OCCURRENCE,\n" +
                "    # 最后修改时间\n" +
                "    T4.STATUS_UPDATE_TIME DATE_MODIFICATION,\n" +
                "    # 到达时间（接收到数据的时间）\n" +
                "    NULL                  ARRIVAL_TIME,\n" +
                "    # 底层上报时间\n" +
                "    T4.LAST_CHECK         REPORT_TIME,\n" +
                "    # 重复次数\n" +
                "    0                     REPEAT_COUNT,\n" +
                "    # 是否确认（0 未确认 1确认）\n" +
                "    0                     ACKNOWLEDGED,\n" +
                "    # 告警状态（1打开，2自动关闭，3手动关闭，4第三方关闭）\n" +
                "    1                     STATUS,\n" +
                "    # 短信标志（0，1）\n" +
                "    0                     SMS_FLAG,\n" +
                "    # 邮件标志（0，1）\n" +
                "    0                     MAIL_FLAG,\n" +
                "    # 微信标志（0，1）\n" +
                "    0                     WECHAT_FLAG,\n" +
                "    # 电话标志（0，1）\n" +
                "    0                     PHONE_FLAG,\n" +
                "    # 维护期标志 （0，1）\n" +
                "    0                     MAINTENANCE_FLAG,\n" +
                "    # 工单标志 （0，1）\n" +
                "    0                     ITSM_FLAG,\n" +
                "    # 工单号\n" +
                "    NULL                  ITSM_ID,\n" +
                "    # 工单状态（0 打开，1 关闭）\n" +
                "    0                     ITSM_STATUS,\n" +
                "    # 工单状态（文字描述），TSRM GATEWAY支撑字段\n" +
                "    NULL                  ITSM_STATUS_DESCRIPTION,\n" +
                "    # 升级标志（0，1，2，3）1自动升级，2人为升级，3规则升级,4定时器升级\n" +
                "    0                     UPGRADE_FLAG,\n" +
                "    # 入库时间\n" +
                "    NULL                  PUT_STORAGE_TIME,\n" +
                "    # 操作时间\n" +
                "    NULL                  OPERATION_DATE,\n" +
                "    # 位置\n" +
                "    NULL                  POSITION,\n" +
                "    # 峰值\n" +
                "    NULL                  PEAK,\n" +
                "    # 持续时间\n" +
                "    NULL                  DUTRTION,\n" +
                "    # 轨迹信息\n" +
                "    NULL                  EVENT_TRACE,\n" +
                "    # 备注\n" +
                "    NULL                  EVENT_COMMENTS,\n" +
                "    # 未确认超时（0，1）\n" +
                "    0                     ACKNOWLEDGED_TIMEOUT,\n" +
                "    # 未关闭超时（0，1）\n" +
                "    0                     CLOSE_TIMEOUT\n" +
                "\n" +
                "  FROM nagios_hosts T1\n" +
                "    LEFT JOIN nagios_instances T2\n" +
                "      ON T1.INSTANCE_ID = T2.INSTANCE_ID\n" +
                "    LEFT JOIN nagios_servicegroups T31 # 可以没有分组\n" +
                "      ON T1.INSTANCE_ID = T31.INSTANCE_ID\n" +
                "    LEFT JOIN nagios_servicegroup_members T32  # 可以没有分组\n" +
                "      ON T31.INSTANCE_ID = T32.INSTANCE_ID\n" +
                "         AND T31.SERVICEGROUP_ID = T32.SERVICEGROUP_ID\n" +
                "    LEFT JOIN nagios_services T3\n" +
                "      ON T1.INSTANCE_ID = T3.INSTANCE_ID\n" +
                "         AND T1.HOST_OBJECT_ID = T3.HOST_OBJECT_ID\n" +
                "    LEFT JOIN nagios_servicestatus T4\n" +
                "      ON T1.INSTANCE_ID = T4.INSTANCE_ID\n" +
                "         AND T3.SERVICE_OBJECT_ID = T4.SERVICE_OBJECT_ID\n" +
                "    LEFT JOIN nagios_notifications T5\n" +
                "      ON T3.INSTANCE_ID = T5.INSTANCE_ID\n" +
                "         AND T3.SERVICE_OBJECT_ID = T5.OBJECT_ID\n" +
                "    LEFT JOIN nagios_objects T6\n" +
                "      ON T3.SERVICE_OBJECT_ID = T6.OBJECT_ID\n" +
                "\n";

        System.out.printf("sql:%s",sql);
        return this.baseDao.queryForList(sql,NotificationsEntity.class);
    }

    @Override
    public List<NotificationsLogsEntity> doNoSendMessageList() throws Exception {
        List<NotificationsLogsEntity> result = this.baseDao.findAll(NotificationsLogsEntity.class);
        if(result.size()>0){
            this.baseDao.deleteAll(result);//读取后，删除数据库数据
        }
        return result;
    }
}
