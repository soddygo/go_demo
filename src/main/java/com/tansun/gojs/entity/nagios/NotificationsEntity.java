package com.tansun.gojs.entity.nagios;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Arrays;
import java.util.Date;

/**
 * nagios 监控信息试图
 * Created by soddygosongguochao on 2017/4/6.
 */
@Entity
@Table(name = "notifications", schema = "nagios")
public class NotificationsEntity implements Serializable {

    @Id
    private String id;
    private Integer idOriginal;
    private String ip;
    private String hostname;
    private String source;
    private String businessSystem;
    private String category;
    private String objectClass;
    private Integer object;
    private Integer instance;
    private String parameter;
    private String parameterValue;
    private String severity;
    private Integer originalSeverity;
    private String title;
    private String summary;
    private Integer stateChange;
    private Date firstOccurrence;
    private Date dateModification;
    private Date arrivalTime;
    private Date reportTime;
    private Integer repeatCount;
    private Integer acknowledged;
    private Integer status;
    private Integer smsFlag;
    private Integer mailFlag;
    private Integer wechatFlag;
    private Integer phoneFlag;
    private Integer maintenanceFlag;
    private Integer itsmFlag;
    private String itsmId;
    private Integer itsmStatus;
    private String itsmStatusDescription;
    private Integer upgradeFlag;
    private String operationDate;
    private String position;
    private String peak;
    private String dutrtion;
    private String eventTrace;
    private String eventComments;
    private Integer acknowledgedTimeout;
    private Integer closeTimeout;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getIdOriginal() {
        return idOriginal;
    }

    public void setIdOriginal(Integer idOriginal) {
        this.idOriginal = idOriginal;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getHostname() {
        return hostname;
    }

    public void setHostname(String hostname) {
        this.hostname = hostname;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getBusinessSystem() {
        return businessSystem;
    }

    public void setBusinessSystem(String businessSystem) {
        this.businessSystem = businessSystem;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getObjectClass() {
        return objectClass;
    }

    public void setObjectClass(String objectClass) {
        this.objectClass = objectClass;
    }

    public Integer getObject() {
        return object;
    }

    public void setObject(Integer object) {
        this.object = object;
    }

    public Integer getInstance() {
        return instance;
    }

    public void setInstance(Integer instance) {
        this.instance = instance;
    }

    public String getParameter() {
        return parameter;
    }

    public void setParameter(String parameter) {
        this.parameter = parameter;
    }

    public String getParameterValue() {
        return parameterValue;
    }

    public void setParameterValue(String parameterValue) {
        this.parameterValue = parameterValue;
    }

    public String getSeverity() {
        return severity;
    }

    public void setSeverity(String severity) {
        this.severity = severity;
    }

    public Integer getOriginalSeverity() {
        return originalSeverity;
    }

    public void setOriginalSeverity(Integer originalSeverity) {
        this.originalSeverity = originalSeverity;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public Integer getStateChange() {
        return stateChange;
    }

    public void setStateChange(Integer stateChange) {
        this.stateChange = stateChange;
    }

    public Date getFirstOccurrence() {
        return firstOccurrence;
    }

    public void setFirstOccurrence(Date firstOccurrence) {
        this.firstOccurrence = firstOccurrence;
    }

    public Date getDateModification() {
        return dateModification;
    }

    public void setDateModification(Date dateModification) {
        this.dateModification = dateModification;
    }

    public Date getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(Date arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public Date getReportTime() {
        return reportTime;
    }

    public void setReportTime(Date reportTime) {
        this.reportTime = reportTime;
    }

    public Integer getRepeatCount() {
        return repeatCount;
    }

    public void setRepeatCount(Integer repeatCount) {
        this.repeatCount = repeatCount;
    }

    public Integer getAcknowledged() {
        return acknowledged;
    }

    public void setAcknowledged(Integer acknowledged) {
        this.acknowledged = acknowledged;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getSmsFlag() {
        return smsFlag;
    }

    public void setSmsFlag(Integer smsFlag) {
        this.smsFlag = smsFlag;
    }

    public Integer getMailFlag() {
        return mailFlag;
    }

    public void setMailFlag(Integer mailFlag) {
        this.mailFlag = mailFlag;
    }

    public Integer getWechatFlag() {
        return wechatFlag;
    }

    public void setWechatFlag(Integer wechatFlag) {
        this.wechatFlag = wechatFlag;
    }

    public Integer getPhoneFlag() {
        return phoneFlag;
    }

    public void setPhoneFlag(Integer phoneFlag) {
        this.phoneFlag = phoneFlag;
    }

    public Integer getMaintenanceFlag() {
        return maintenanceFlag;
    }

    public void setMaintenanceFlag(Integer maintenanceFlag) {
        this.maintenanceFlag = maintenanceFlag;
    }

    public Integer getItsmFlag() {
        return itsmFlag;
    }

    public void setItsmFlag(Integer itsmFlag) {
        this.itsmFlag = itsmFlag;
    }

    public String getItsmId() {
        return itsmId;
    }

    public void setItsmId(String itsmId) {
        this.itsmId = itsmId;
    }

    public Integer getItsmStatus() {
        return itsmStatus;
    }

    public void setItsmStatus(Integer itsmStatus) {
        this.itsmStatus = itsmStatus;
    }

    public String getItsmStatusDescription() {
        return itsmStatusDescription;
    }

    public void setItsmStatusDescription(String itsmStatusDescription) {
        this.itsmStatusDescription = itsmStatusDescription;
    }

    public Integer getUpgradeFlag() {
        return upgradeFlag;
    }

    public void setUpgradeFlag(Integer upgradeFlag) {
        this.upgradeFlag = upgradeFlag;
    }

    public String getOperationDate() {
        return operationDate;
    }

    public void setOperationDate(String operationDate) {
        this.operationDate = operationDate;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getPeak() {
        return peak;
    }

    public void setPeak(String peak) {
        this.peak = peak;
    }

    public String getDutrtion() {
        return dutrtion;
    }

    public void setDutrtion(String dutrtion) {
        this.dutrtion = dutrtion;
    }

    public String getEventTrace() {
        return eventTrace;
    }

    public void setEventTrace(String eventTrace) {
        this.eventTrace = eventTrace;
    }

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
