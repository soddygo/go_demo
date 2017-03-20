package com.tansun.gojs.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * 节点数据对象
 * 测试数据
 * Created by soddygosongguochao on 2017/3/10.
 */
@Entity
@Table(name = "GoNodeData")
public class GoNodeData implements Serializable {

    private static final long serialVersionUID = 1L;


    @Id
    private Integer id; //id

    private Integer nodeKey;//节点key

    private String text;//文本

    private String name;

    private String ip;

    private String os;//linux，unix，mac，Windows

    private String type;//类型：1 交换机； 2 防火钱；3 服务器

    private String mark; //备注


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getOs() {
        return os;
    }

    public void setOs(String os) {
        this.os = os;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getMark() {
        return mark;
    }

    public void setMark(String mark) {
        this.mark = mark;
    }

    public Integer getNodeKey() {
        return nodeKey;
    }

    public void setNodeKey(Integer nodeKey) {
        this.nodeKey = nodeKey;
    }
}
