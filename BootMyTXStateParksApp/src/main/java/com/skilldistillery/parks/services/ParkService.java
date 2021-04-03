package com.skilldistillery.parks.services;

import java.util.List;

import com.skilldistillery.parks.entities.ParkVisit;

public interface ParkService {
	
	// READ
	List<ParkVisit> allParks();
	
	ParkVisit retrievePark(Integer parkVId);
	
	// CREATE
	ParkVisit createPVisit(ParkVisit pVisit);
	
	// UPDATE
	ParkVisit updatePVisit(ParkVisit pVisit, Integer parkVId);
	
	// DELETE
	boolean deletePVisit(Integer parkVId);
}
