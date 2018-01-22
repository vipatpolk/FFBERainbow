package com.ffbe.RainbowColector;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@Controller
@EnableAutoConfiguration
public class mainController {

    private String content = genContent();

    @RequestMapping("/")
    public String main(Map<String, Object> model) {
        model.put("content", this.content);
        return "main";
    }

    public String genContent(){
        content = "<mui-container fluid>\n" +
                "    <mui-row>\n" +
                "        <mui-col md=\"1\">md-1</mui-col>\n" +
                "        <mui-col md=\"1\">md-1</mui-col>\n" +
                "        <mui-col md=\"1\">md-1</mui-col>\n" +
                "        <mui-col md=\"1\">md-1</mui-col>\n" +
                "        <mui-col md=\"1\">md-1</mui-col>\n" +
                "        <mui-col md=\"1\">md-1</mui-col>\n" +
                "        <mui-col md=\"1\">md-1</mui-col>\n" +
                "        <mui-col md=\"1\">md-1</mui-col>\n" +
                "        <mui-col md=\"1\">md-1</mui-col>\n" +
                "        <mui-col md=\"1\">md-1</mui-col>\n" +
                "        <mui-col md=\"1\">md-1</mui-col>\n" +
                "        <mui-col md=\"1\">md-1</mui-col>\n" +
                "    </mui-row>\n" +
                "    <mui-row>\n" +
                "        <mui-col md=\"8\">md-8</mui-col>\n" +
                "        <mui-col md=\"4\">md-4</mui-col>\n" +
                "    </mui-row>\n" +
                "    <mui-row>\n" +
                "        <mui-col md=\"4\">md-4</mui-col>\n" +
                "        <mui-col md=\"4\">md-4</mui-col>\n" +
                "        <mui-col md=\"4\">md-4</mui-col>\n" +
                "    </mui-row>\n" +
                "    <mui-row>\n" +
                "        <mui-col md=\"6\">md-6</mui-col>\n" +
                "        <mui-col md=\"6\">md-6</mui-col>\n" +
                "    </mui-row>\n" +
                "</mui-container>";

        return content;
    }
}
