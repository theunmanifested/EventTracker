package com.skilldistillery.parks.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.parks.entities.Park;
import com.skilldistillery.parks.repositories.ParkRepository;

@Service
@Transactional
public class ParkServiceImpl implements ParkService {

	@Autowired
	private ParkRepository parkRepo;
	
	@Override
	public List<Park> allParks() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Park retrievePark(int parkId) {
		// TODO Auto-generated method stub
		return null;
	}

}
