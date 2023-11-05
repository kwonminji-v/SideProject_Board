package com.playhub.Post;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PostController {

    @GetMapping("/api/start")
    public String test(){
        return "다시 시작해보자 ! 파이팅 !";
    }
}
