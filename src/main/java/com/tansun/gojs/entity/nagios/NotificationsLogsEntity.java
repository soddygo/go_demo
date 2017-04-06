package com.tansun.gojs.entity.nagios;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Arrays;

/**
 * 已经通知过消息的记录
 * Created by soddygosongguochao on 2017/4/6.
 */
@Entity
@Table(name = "notifications_logs", schema = "nagios")
public class NotificationsLogsEntity {
    @Id
    private String id;
    @Column(name = "ID_ORIGINAL", nullable = true)
    private Integer idOriginal;
    private String ip;
    private String hostname;
    private String source;

    @Column(name = "BUSINESS_SYSTEM", nullable = true, length = 5)
    private String businessSystem;
    private String category;
    @Column(name = "OBJECT_CLASS", nullable = true, length = 128)
    private String objectClass;
    private Integer object;
    private Short instance;
    private String parameter;
    @Column(name = "PARAMETER_VALUE", nullable = true, length = 255)
    private String parameterValue;
    private Integer severity;
    @Column(name = "ORIGINAL_SEVERITY", nullable = true)
    private Short originalSeverity;
    private String title;
    private String summary;
    @Column(name = "STATE_CHANGE", nullable = true)
    private Short stateChange;
    @Column(name = "FIRST_OCCURRENCE", nullable = true)
    private Timestamp firstOccurrence;
    @Column(name = "DATE_MODIFICATION", nullable = true)
    private Timestamp dateModification;
    @Column(name = "ARRIVAL_TIME", nullable = true)
    private Timestamp arrivalTime;
    @Column(name = "REPORT_TIME", nullable = true)
    private Timestamp reportTime;
    @Column(name = "REPEAT_COUNT", nullable = true)
    private Integer repeatCount;
    private Integer acknowledged;
    private Integer status;
    @Column(name = "SMS_FLAG", nullable = true)
    private Integer smsFlag;
    @Column(name = "MAIL_FLAG", nullable = true)
    private Integer mailFlag;

    @Column(name = "WECHAT_FLAG", nullable = true)
    private Integer wechatFlag;
    @Column(name = "PHONE_FLAG", nullable = true)
    private Integer phoneFlag;
    @Column(name = "MAINTENANCE_FLAG", nullable = true)
    private Integer maintenanceFlag;
    @Column(name = "ITSM_FLAG", nullable = true)
    private Integer itsmFlag;
    @Column(name = "ITSM_ID", nullable = true, length = 5)
    private String itsmId;
    @Column(name = "ITSM_STATUS", nullable = true)
    private Integer itsmStatus;
    @Column(name = "ITSM_STATUS_DESCRIPTION", nullable = true, length = 5)
    private String itsmStatusDescription;
    @Column(name = "UPGRADE_FLAG", nullable = true)
    private Integer upgradeFlag;
    @Column(name = "PUT_STORAGE_TIME", nullable = true)
    private Timestamp putStorageTime;
    @Column(name = "OPERATION_DATE", nullable = true)
    private Timestamp operationDate;
    private String position;
    private String peak;
    @Column(name = "DUTRTION", nullable = true, length = 5)
    private String dutrtion;
    @Column(name = "EVENT_TRACE", nullable = true, length = 5)
    private String eventTrace;
    @Column(name = "EVENT_COMMENTS", nullable = true, length = 5)
    private String eventComments;
    @Column(name = "ACKNOWLEDGED_TIMEOUT", nullable = true)

    private Integer acknowledgedTimeout;
    @Column(name = "CLOSE_TIMEOUT", nullable = true)

    private Integer closeTimeout;


    @Column(name = "ID", nullable = true, length = 36)
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }


    @Column(name = "ID_ORIGINAL", nullable = true)
    public Integer getIdOriginal() {
        return idOriginal;
    }

    public void setIdOriginal(Integer idOriginal) {
        this.idOriginal = idOriginal;
    }


    @Column(name = "IP", nullable = true, length = 128)
    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }


    @Column(name = "HOSTNAME", nullable = true, length = 64)
    public String getHostname() {
        return hostname;
    }

    public void setHostname(String hostname) {
        this.hostname = hostname;
    }


    @Column(name = "SOURCE", nullable = true, length = 6)
    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }


    @Column(name = "BUSINESS_SYSTEM", nullable = true, length = 5)
    public String getBusinessSystem() {
        return businessSystem;
    }

    public void setBusinessSystem(String businessSystem) {
        this.businessSystem = businessSystem;
    }


    @Column(name = "CATEGORY", nullable = true, length = 255)
    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }


    @Column(name = "OBJECT_CLASS", nullable = true, length = 128)
    public String getObjectClass() {
        return objectClass;
    }

    public void setObjectClass(String objectClass) {
        this.objectClass = objectClass;
    }


    @Column(name = "OBJECT", nullable = true)
    public Integer getObject() {
        return object;
    }

    public void setObject(Integer object) {
        this.object = object;
    }


    @Column(name = "INSTANCE", nullable = true)
    public Short getInstance() {
        return instance;
    }

    public void setInstance(Short instance) {
        this.instance = instance;
    }


    @Column(name = "PARAMETER", nullable = true, length = 64)
    public String getParameter() {
        return parameter;
    }

    public void setParameter(String parameter) {
        this.parameter = parameter;
    }


    @Column(name = "PARAMETER_VALUE", nullable = true, length = 255)
    public String getParameterValue() {
        return parameterValue;
    }

    public void setParameterValue(String parameterValue) {
        this.parameterValue = parameterValue;
    }


    @Column(name = "SEVERITY", nullable = true)
    public Integer getSeverity() {
        return severity;
    }

    public void setSeverity(Integer severity) {
        this.severity = severity;
    }


    @Column(name = "ORIGINAL_SEVERITY", nullable = true)
    public Short getOriginalSeverity() {
        return originalSeverity;
    }

    public void setOriginalSeverity(Short originalSeverity) {
        this.originalSeverity = originalSeverity;
    }


    @Column(name = "TITLE", nullable = true, length = 255)
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }


    @Column(name = "SUMMARY", nullable = true, length = -1)
    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }


    @Column(name = "STATE_CHANGE", nullable = true)
    public Short getStateChange() {
        return stateChange;
    }

    public void setStateChange(Short stateChange) {
        this.stateChange = stateChange;
    }


    @Column(name = "FIRST_OCCURRENCE", nullable = true)
    public Timestamp getFirstOccurrence() {
        return firstOccurrence;
    }

    public void setFirstOccurrence(Timestamp firstOccurrence) {
        this.firstOccurrence = firstOccurrence;
    }


    @Column(name = "DATE_MODIFICATION", nullable = true)
    public Timestamp getDateModification() {
        return dateModification;
    }

    public void setDateModification(Timestamp dateModification) {
        this.dateModification = dateModification;
    }


    @Column(name = "ARRIVAL_TIME", nullable = true)
    public Timestamp getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(Timestamp arrivalTime) {
        this.arrivalTime = arrivalTime;
    }


    @Column(name = "REPORT_TIME", nullable = true)
    public Timestamp getReportTime() {
        return reportTime;
    }

    public void setReportTime(Timestamp reportTime) {
        this.reportTime = reportTime;
    }


    @Column(name = "REPEAT_COUNT", nullable = true)
    public Integer getRepeatCount() {
        return repeatCount;
    }

    public void setRepeatCount(Integer repeatCount) {
        this.repeatCount = repeatCount;
    }


    @Column(name = "ACKNOWLEDGED", nullable = true)
    public Integer getAcknowledged() {
        return acknowledged;
    }

    public void setAcknowledged(Integer acknowledged) {
        this.acknowledged = acknowledged;
    }


    @Column(name = "STATUS", nullable = true)
    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }


    @Column(name = "SMS_FLAG", nullable = true)
    public Integer getSmsFlag() {
        return smsFlag;
    }

    public void setSmsFlag(Integer smsFlag) {
        this.smsFlag = smsFlag;
    }


    @Column(name = "MAIL_FLAG", nullable = true)
    public Integer getMailFlag() {
        return mailFlag;
    }

    public void setMailFlag(Integer mailFlag) {
        this.mailFlag = mailFlag;
    }


    @Column(name = "WECHAT_FLAG", nullable = true)
    public Integer getWechatFlag() {
        return wechatFlag;
    }

    public void setWechatFlag(Integer wechatFlag) {
        this.wechatFlag = wechatFlag;
    }


    @Column(name = "PHONE_FLAG", nullable = true)
    public Integer getPhoneFlag() {
        return phoneFlag;
    }

    public void setPhoneFlag(Integer phoneFlag) {
        this.phoneFlag = phoneFlag;
    }


    @Column(name = "MAINTENANCE_FLAG", nullable = true)
    public Integer getMaintenanceFlag() {
        return maintenanceFlag;
    }

    public void setMaintenanceFlag(Integer maintenanceFlag) {
        this.maintenanceFlag = maintenanceFlag;
    }


    @Column(name = "ITSM_FLAG", nullable = true)
    public Integer getItsmFlag() {
        return itsmFlag;
    }

    public void setItsmFlag(Integer itsmFlag) {
        this.itsmFlag = itsmFlag;
    }


    @Column(name = "ITSM_ID", nullable = true, length = 5)
    public String getItsmId() {
        return itsmId;
    }

    public void setItsmId(String itsmId) {
        this.itsmId = itsmId;
    }


    @Column(name = "ITSM_STATUS", nullable = true)
    public Integer getItsmStatus() {
        return itsmStatus;
    }

    public void setItsmStatus(Integer itsmStatus) {
        this.itsmStatus = itsmStatus;
    }


    @Column(name = "ITSM_STATUS_DESCRIPTION", nullable = true, length = 5)
    public String getItsmStatusDescription() {
        return itsmStatusDescription;
    }

    public void setItsmStatusDescription(String itsmStatusDescription) {
        this.itsmStatusDescription = itsmStatusDescription;
    }


    @Column(name = "UPGRADE_FLAG", nullable = true)
    public Integer getUpgradeFlag() {
        return upgradeFlag;
    }

    public void setUpgradeFlag(Integer upgradeFlag) {
        this.upgradeFlag = upgradeFlag;
    }


    @Column(name = "PUT_STORAGE_TIME", nullable = true)
    public Timestamp getPutStorageTime() {
        return putStorageTime;
    }

    public void setPutStorageTime(Timestamp putStorageTime) {
        this.putStorageTime = putStorageTime;
    }


    @Column(name = "OPERATION_DATE", nullable = true)
    public Timestamp getOperationDate() {
        return operationDate;
    }

    public void setOperationDate(Timestamp operationDate) {
        this.operationDate = operationDate;
    }


    @Column(name = "POSITION", nullable = true, length = 5)
    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }


    @Column(name = "PEAK", nullable = true, length = 5)
    public String getPeak() {
        return peak;
    }

    public void setPeak(String peak) {
        this.peak = peak;
    }


    @Column(name = "DUTRTION", nullable = true, length = 5)
    public String getDutrtion() {
        return dutrtion;
    }

    public void setDutrtion(String dutrtion) {
        this.dutrtion = dutrtion;
    }


    @Column(name = "EVENT_TRACE", nullable = true, length = 5)
    public String getEventTrace() {
        return eventTrace;
    }

    public void setEventTrace(String eventTrace) {
        this.eventTrace = eventTrace;
    }


    @Column(name = "EVENT_COMMENTS", nullable = true, length = 5)
    public String getEventComments() {
        return eventComments;
    }

    public void setEventComments(String eventComments) {
        this.eventComments = eventComments;
    }


    public Integer getAcknowledgedTimeout() {
        return acknowledgedTimeout;
    }

    public void setAcknowledgedTimeout(Integer acknowledgedTimeout) {
        this.acknowledgedTimeout = acknowledgedTimeout;
    }


    public Integer getCloseTimeout() {
        return closeTimeout;
    }

    public void setCloseTimeout(Integer closeTimeout) {
        this.closeTimeout = closeTimeout;
    }


}
