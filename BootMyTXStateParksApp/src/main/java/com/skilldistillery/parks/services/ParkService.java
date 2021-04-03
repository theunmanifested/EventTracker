package com.skilldistillery.parks.services;

import java.util.List;

import com.skilldistillery.parks.entities.ParkVisit;

public interface ParkService {

	List<ParkVisit> allParks();
	
	ParkVisit retrievePark(int parkId);
	
}
