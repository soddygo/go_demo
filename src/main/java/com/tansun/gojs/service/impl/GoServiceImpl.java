package com.tansun.gojs.service.impl;

import com.tansun.gojs.dao.BaseDao;
import com.tansun.gojs.entity.GoLinkData;
import com.tansun.gojs.entity.GoNodeData;
import com.tansun.gojs.service.GoService;
import org.hibernate.criterion.DetachedCriteria;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by soddygosongguochao on 2017/3/10.
 */
@Service
public class GoServiceImpl implements GoService {

    @Resource(name = "baseDao")
    private BaseDao baseDao;


    @Override
    public List<GoNodeData> queryNodeDataList() throws Exception {
        return this.baseDao.findAll(GoNodeData.class);
    }

    @Override
    public List<GoLinkData> queryLinkDataList() throws Exception {
        DetachedCriteria criteria = DetachedCriteria.forClass(GoLinkData.class);
        return this.baseDao.findByCriteria(criteria);
    }
}
