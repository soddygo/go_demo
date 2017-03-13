package com.tansun.gojs.controller;

import com.tansun.gojs.entity.GoLinkData;
import com.tansun.gojs.entity.GoNodeData;
import com.tansun.gojs.service.GoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

/**
 * gojs controller
 * Created by soddygosongguochao on 2017/3/10.
 */


@RestController
@RequestMapping(value = "/go")
public class GoController {

    @Autowired
    private GoService goService;

    @RequestMapping("/demo")
    public ModelAndView gotoDemo() throws Exception {

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("forward:/static/html/gojsDemo.html");
        return modelAndView;
    }


    /**
     * 获取节点之间线的关系
     *
     * @return 节点之间线信息的列表
     */
    @RequestMapping("/getLinkDatas")
    @ResponseBody
    public List<GoLinkData> getLinkDatas() throws Exception {
        return this.goService.queryLinkDataList();
    }


    /**
     * 获取节点信息
     *
     * @return 节点信息的列表
     */
    @RequestMapping("/getNodeDatas")
    @ResponseBody
    public List<GoNodeData> getNodeDatas() throws Exception {
        return this.goService.queryNodeDataList();
    }


}
