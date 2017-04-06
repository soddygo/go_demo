package com.tansun.gojs.entity.nagios;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * 通知消息记录
 * Created by soddygosongguochao on 2017/4/6.
 */
@Entity
@Table(name = "nagios_notifications", schema = "nagios")
public class NagiosNotificationsEntity {
    @Id
    private int notificationId;
    private short instanceId;
    private short notificationType;
    private short notificationReason;
    private int objectId;
    private Timestamp startTime;
    private int startTimeUsec;
    private Timestamp endTime;
    private int endTimeUsec;
    private short state;
    private String output;
    private String longOutput;
    private short escalated;
    private short contactsNotified;

    @Id
    @Column(name = "notification_id", nullable = false)
    public int getNotificationId() {
        return notificationId;
    }

    public void setNotificationId(int notificationId) {
        this.notificationId = notificationId;
    }

    @Basic
    @Column(name = "instance_id", nullable = false)
    public short getInstanceId() {
        return instanceId;
    }

    public void setInstanceId(short instanceId) {
        this.instanceId = instanceId;
    }

    @Basic
    @Column(name = "notification_type", nullable = false)
    public short getNotificationType() {
        return notificationType;
    }

    public void setNotificationType(short notificationType) {
        this.notificationType = notificationType;
    }

    @Basic
    @Column(name = "notification_reason", nullable = false)
    public short getNotificationReason() {
        return notificationReason;
    }

    public void setNotificationReason(short notificationReason) {
        this.notificationReason = notificationReason;
    }

    @Basic
    @Column(name = "object_id", nullable = false)
    public int getObjectId() {
        return objectId;
    }

    public void setObjectId(int objectId) {
        this.objectId = objectId;
    }

    @Basic
    @Column(name = "start_time", nullable = false)
    public Timestamp getStartTime() {
        return startTime;
    }

    public void setStartTime(Timestamp startTime) {
        this.startTime = startTime;
    }

    @Basic
    @Column(name = "start_time_usec", nullable = false)
    public int getStartTimeUsec() {
        return startTimeUsec;
    }

    public void setStartTimeUsec(int startTimeUsec) {
        this.startTimeUsec = startTimeUsec;
    }

    @Basic
    @Column(name = "end_time", nullable = false)
    public Timestamp getEndTime() {
        return endTime;
    }

    public void setEndTime(Timestamp endTime) {
        this.endTime = endTime;
    }

    @Basic
    @Column(name = "end_time_usec", nullable = false)
    public int getEndTimeUsec() {
        return endTimeUsec;
    }

    public void setEndTimeUsec(int endTimeUsec) {
        this.endTimeUsec = endTimeUsec;
    }

    @Basic
    @Column(name = "state", nullable = false)
    public short getState() {
        return state;
    }

    public void setState(short state) {
        this.state = state;
    }

    @Basic
    @Column(name = "output", nullable = false, length = 255)
    public String getOutput() {
        return output;
    }

    public void setOutput(String output) {
        this.output = output;
    }

    @Basic
    @Column(name = "long_output", nullable = false, length = -1)
    public String getLongOutput() {
        return longOutput;
    }

    public void setLongOutput(String longOutput) {
        this.longOutput = longOutput;
    }

    @Basic
    @Column(name = "escalated", nullable = false)
    public short getEscalated() {
        return escalated;
    }

    public void setEscalated(short escalated) {
        this.escalated = escalated;
    }

    @Basic
    @Column(name = "contacts_notified", nullable = false)
    public short getContactsNotified() {
        return contactsNotified;
    }

    public void setContactsNotified(short contactsNotified) {
        this.contactsNotified = contactsNotified;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        NagiosNotificationsEntity that = (NagiosNotificationsEntity) o;

        if (notificationId != that.notificationId) return false;
        if (instanceId != that.instanceId) return false;
        if (notificationType != that.notificationType) return false;
        if (notificationReason != that.notificationReason) return false;
        if (objectId != that.objectId) return false;
        if (startTimeUsec != that.startTimeUsec) return false;
        if (endTimeUsec != that.endTimeUsec) return false;
        if (state != that.state) return false;
        if (escalated != that.escalated) return false;
        if (contactsNotified != that.contactsNotified) return false;
        if (startTime != null ? !startTime.equals(that.startTime) : that.startTime != null) return false;
        if (endTime != null ? !endTime.equals(that.endTime) : that.endTime != null) return false;
        if (output != null ? !output.equals(that.output) : that.output != null) return false;
        if (longOutput != null ? !longOutput.equals(that.longOutput) : that.longOutput != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = notificationId;
        result = 31 * result + (int) instanceId;
        result = 31 * result + (int) notificationType;
        result = 31 * result + (int) notificationReason;
        result = 31 * result + objectId;
        result = 31 * result + (startTime != null ? startTime.hashCode() : 0);
        result = 31 * result + startTimeUsec;
        result = 31 * result + (endTime != null ? endTime.hashCode() : 0);
        result = 31 * result + endTimeUsec;
        result = 31 * result + (int) state;
        result = 31 * result + (output != null ? output.hashCode() : 0);
        result = 31 * result + (longOutput != null ? longOutput.hashCode() : 0);
        result = 31 * result + (int) escalated;
        result = 31 * result + (int) contactsNotified;
        return result;
    }
}
