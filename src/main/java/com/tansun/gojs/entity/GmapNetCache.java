package com.tansun.gojs.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * 瓦片图对象
 * Created by soddygosongguochao on 2017/3/27.
 */
@Entity
@Table(name = "gmapnetcache")
public class GmapNetCache implements Serializable {

    private static final long serialVersionUID = 1L;

//
//    @EmbeddedId
//    private GmapPk gmapPk;//联合主键

    @Column(name = "Type")
    @Id
    private Integer type;

    @Column(name = "Zoom")
    @Id
    private Integer zoom;

    @Column(name = "X")
    @Id
    private Integer x;

    @Column(name = "Y")
    @Id
    private Integer y;

    @Column(name = "Tile")
    private byte[] tile;//图片 longblob


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

    public byte[] getTile() {
        return tile;
    }

    public void setTile(byte[] tile) {
        this.tile = tile;
    }
}
