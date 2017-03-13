package com.tansun.gojs.service;

import com.tansun.gojs.entity.GoLinkData;
import com.tansun.gojs.entity.GoNodeData;

import java.util.List;

/**
 * 服务层
 * Created by soddygosongguochao on 2017/3/10.
 */
public interface GoService {


    /**
     * 查询节点信息
     * @return 节点信息
     * @throws Exception 异常
     */
    List<GoNodeData> queryNodeDataList() throws Exception;

    /**
     * 查询节点之间线的信息
     * @return 线信息
     * @throws Exception 异常
     */
    List<GoLinkData> queryLinkDataList() throws Exception;
}
