package com.ffbe.RainbowCollector;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;



import java.util.Map;

@SpringBootApplication
@Controller
@EnableAutoConfiguration
public class RainbowCollectorApplication {

    @RequestMapping("/")
    public String index(Map<String, Object> model) {

        return "index";
    }


    public static void main(String[] args) {
        SpringApplication.run(RainbowCollectorApplication.class, args);
    }
}
