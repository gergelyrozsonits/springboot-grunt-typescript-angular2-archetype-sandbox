package com.company.product;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Import;
import org.springframework.core.io.Resource;

import com.company.product.mvc.config.WebMvcConfiguration;

@SpringBootApplication
@Import({WebMvcConfiguration.class})
public class Application {
    @Autowired
    private ApplicationContext applicationContext;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @PostConstruct
    public void doSomething() {
        Resource resource = applicationContext.getResource("classpath:js/releasemonitor.js");
        System.out.println(resource.exists());
    }
}
