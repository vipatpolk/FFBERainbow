package com.ffbe.RainbowColector;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;

@SpringBootApplication
@Controller
@EnableAutoConfiguration
public class RainbowCollectorApplication {

    public static void main(String[] args) {
        SpringApplication.run(RainbowCollectorApplication.class, args);
    }
}
