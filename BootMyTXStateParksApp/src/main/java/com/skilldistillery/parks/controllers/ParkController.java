package com.skilldistillery.parks.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.parks.entities.Park;
import com.skilldistillery.parks.services.ParkService;

@RequestMapping("api")
@RestController
public class ParkController {
	
	@Autowired
	private ParkService parkSvc;
	
	@GetMapping("ping")
	public String ping() {
		return "pong";
	}
	
	@GetMapping("parks")
	public List<Park> listParks(){
		return parkSvc.allParks();
	}
}
