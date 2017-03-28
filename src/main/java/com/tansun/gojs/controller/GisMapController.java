package com.tansun.gojs.controller;

import com.tansun.gojs.entity.GmapNetCache;
import com.tansun.gojs.entity.GmapPk;
import com.tansun.gojs.service.GisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.OutputStream;

/**
 * Gis瓦片图
 * Created by soddygosongguochao on 2017/3/27.
 */
@RestController
@RequestMapping(value = "/gis")
public class GisMapController {

    @Autowired
    private GisService gisService;

    @RequestMapping("/getGis/{type}/{z}/{x}/{y}.png")
    public void gotoDemo(@PathVariable Integer type, @PathVariable Integer z, @PathVariable Integer x,
                         @PathVariable Integer y, HttpServletResponse response) throws Exception {

        GmapPk gmapPk = new GmapPk(type, z, x, y);
        GmapNetCache gmapNetCache = this.gisService.getOnebyPk(gmapPk);
        if(gmapNetCache != null){
            byte[] tile = gmapNetCache.getTile();
            OutputStream out = response.getOutputStream();
            out.write(tile);
            out.flush();
            out.close();
        }else {
            return;
        }
    }

}
