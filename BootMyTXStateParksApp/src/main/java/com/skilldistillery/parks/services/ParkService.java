package com.skilldistillery.parks.services;

import java.util.List;

import com.skilldistillery.parks.entities.Park;

public interface ParkService {

	List<Park> allParks();
	
	Park retrievePark(int parkId);
	
}
