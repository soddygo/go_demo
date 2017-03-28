package com.tansun.gojs.service.impl;

import com.tansun.gojs.dao.BaseDao;
import com.tansun.gojs.entity.GmapNetCache;
import com.tansun.gojs.entity.GmapPk;
import com.tansun.gojs.service.GisService;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * gis瓦片图服务
 * Created by soddygosongguochao on 2017/3/27.
 */
@Service
public class GisServiceImpl implements GisService {


    @Resource(name = "baseDao")
    private BaseDao baseDao;


    @Override
    public GmapNetCache getOnebyPk(GmapPk gmapPk) throws Exception {
        DetachedCriteria detachedCriteria = DetachedCriteria.forClass(GmapNetCache.class);
        detachedCriteria.add(Restrictions.eq("type", gmapPk.getType()))
                .add(Restrictions.eq("zoom", gmapPk.getZoom()))
                .add(Restrictions.eq("x", gmapPk.getX()))
                .add(Restrictions.eq("y", gmapPk.getY()));

        return this.baseDao.findOneByCriteria(detachedCriteria);
    }
}
