package com.skilldistillery.parks;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class BootMyTxStateParksAppApplication extends SpringBootServletInitializer {
	  @Override
	  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	    return application.sources(BootMyTxStateParksAppApplication.class);
	  }

	public static void main(String[] args) {
		SpringApplication.run(BootMyTxStateParksAppApplication.class, args);
	}

}
