package com.ffbe.RainbowCollector.controllers;

import com.mysql.jdbc.Connection;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
public class unitListController extends HttpServlet {
    Connection conn;

    //   @RequestMapping("/unitList")
    public void getUnitList(HttpServletRequest req, HttpServletResponse resp) {
        final String selectSql = "SELECT * FROM UNITS";
        String path = req.getRequestURI();
    }

}


