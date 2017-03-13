package com.tansun.gojs.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by soddygosongguochao on 2017/3/13.
 */
@Controller
public class IndexController {

    @RequestMapping(value="/")
    public ModelAndView index(HttpServletRequest request, HttpServletResponse response){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("/index.html");
        return modelAndView;
    }
}
