package com.tansun.gojs.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * 地图插件
 * Created by soddygosongguochao on 2017/3/30.
 */

@RestController
@RequestMapping(value = "/leaflet")
public class LeafletController {

    @RequestMapping("/leafletDemo")
    public ModelAndView gotoLeafletDemo() throws Exception {

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("forward:/static/html/leafletDemo.html");
        return modelAndView;
    }
}
