package com.apress;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by YunZhang on 4/2/17.
 */
@RestController
public class SimpleWebController {
    @RequestMapping("/")
    public String greetings(){
        return "<h1> Spring Boot Rocks in Java too!</h1>";
    }
}
