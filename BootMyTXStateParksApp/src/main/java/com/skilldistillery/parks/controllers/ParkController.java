package com.skilldistillery.parks.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.parks.entities.ParkVisit;
import com.skilldistillery.parks.services.ParkService;

@CrossOrigin({ "*", "http://localhost:4300/" })
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
	public List<ParkVisit> listParks(){
		return parkSvc.allParks();
	}
	
	// SHOW / READ
	@GetMapping(path="parks/{parkVId}")
	public ParkVisit show(@PathVariable Integer parkVId, HttpServletResponse resp) {
		ParkVisit pVisit = parkSvc.retrievePark(parkVId);
		if(pVisit == null) {
			resp.setStatus(404);
		}
		return pVisit;
	}
	
	// CREATE
	@PostMapping("parks")
	public ParkVisit create(@RequestBody ParkVisit pVisit) {
		try {
			pVisit = parkSvc.createPVisit(pVisit);
		} catch (Exception e) {
			System.err.println(e);
			pVisit = null;
		}
		return pVisit;
	}
	
	// UPDATE
	@PutMapping("parks/{parkVId}")
	public ParkVisit update(@RequestBody ParkVisit pVisit, @PathVariable Integer parkVId) {
		try {
			pVisit = parkSvc.updatePVisit(pVisit, parkVId);
		} catch (Exception e) {
			System.err.println(e);
			pVisit = null;
		}
		return pVisit;
	}
	
	// DELETE
	@DeleteMapping("parks/{parkVId}")
	public void delete(@PathVariable Integer parkVId, HttpServletResponse resp) {
		try {
			parkSvc.deletePVisit(parkVId);
		} catch (Exception e) {
			System.err.println(e);
			resp.setStatus(404);
		} 
	}
}
