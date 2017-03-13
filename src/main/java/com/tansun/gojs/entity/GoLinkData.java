package com.tansun.gojs.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * 线的对象
 * Created by soddygosongguochao on 2017/3/10.
 */
@Entity
@Table(name = "goLinkData")
public class GoLinkData implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private Integer id;
    private Integer fromId;
    private Integer toId;
    private String color;
    private String text;

    private String Shape;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getFromId() {
        return fromId;
    }

    public void setFromId(Integer fromId) {
        this.fromId = fromId;
    }

    public Integer getToId() {
        return toId;
    }

    public void setToId(Integer toId) {
        this.toId = toId;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getShape() {
        return Shape;
    }

    public void setShape(String shape) {
        Shape = shape;
    }
}



