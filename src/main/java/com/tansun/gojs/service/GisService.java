package com.tansun.gojs.service;

import com.tansun.gojs.entity.GmapNetCache;
import com.tansun.gojs.entity.GmapPk;

/**
 * gis瓦片图接口
 * Created by soddygosongguochao on 2017/3/27.
 */
public interface GisService {

    /**
     * 获取瓦片图信息
     * @param gmapPk 联合主键对象
     * @return 瓦片图对象
     * @throws Exception 异常
     */
    GmapNetCache getOnebyPk(GmapPk gmapPk) throws Exception;
}
