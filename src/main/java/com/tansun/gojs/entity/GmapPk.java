package com.tansun.gojs.entity;

import javax.naming.Name;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import java.io.Serializable;

/**
 * 联合主键
 * Created by soddygosongguochao on 2017/3/27.
 */
@Embeddable
public class GmapPk implements Serializable {

    public  GmapPk() {
    }

    public  GmapPk(Integer type, Integer zoom, Integer x, Integer y) {

        this.type = type;
        this.zoom = zoom;
        this.x = x;
        this.y = y;
    }


    private static final long serialVersionUID = 1L;

    @Column(name = "Type")
    private Integer type;

    @Column(name = "Zoom")
    private Integer zoom;

    @Column(name = "X")
    private Integer x;

    @Column(name = "Y")
    private Integer y;


    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public Integer getZoom() {
        return zoom;
    }

    public void setZoom(Integer zoom) {
        this.zoom = zoom;
    }

    public Integer getX() {
        return x;
    }

    public void setX(Integer x) {
        this.x = x;
    }

    public Integer getY() {
        return y;
    }

    public void setY(Integer y) {
        this.y = y;
    }
}
