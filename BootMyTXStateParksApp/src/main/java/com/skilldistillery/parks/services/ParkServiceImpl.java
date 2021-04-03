package com.skilldistillery.parks.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.parks.entities.ParkVisit;
import com.skilldistillery.parks.repositories.ParkRepository;

@Service
@Transactional
public class ParkServiceImpl implements ParkService {

	@Autowired
	private ParkRepository parkRepo;
	
	@Override
	public List<ParkVisit> allParks() {
		return parkRepo.findAll();
	}

	@Override
	public ParkVisit retrievePark(Integer parkVId) {
		Optional<ParkVisit> pvOptional = parkRepo.findById(parkVId);
		if (pvOptional.isPresent()) {
			return pvOptional.get();
		}
		return null;
	}

	@Override
	public ParkVisit createPVisit(ParkVisit pVisit) {
		parkRepo.saveAndFlush(pVisit);
		return pVisit;
	}

	@Override
	public ParkVisit updatePVisit(ParkVisit pVisit, Integer parkVId) {
		ParkVisit uPVisit = retrievePark(parkVId);
		if (uPVisit != null) {
			System.out.println("zzzzzzzzzzzzzzzzzzzparkVId " + parkVId);
			uPVisit.setActive(true);
			uPVisit.setParkName(pVisit.getParkName());
			uPVisit.setLength(pVisit.getLength());
			uPVisit.setDate(pVisit.getDate());
			uPVisit.setMainActivity(pVisit.getMainActivity());
			uPVisit.setLogVisit(pVisit.getLogVisit());
			uPVisit.setCity(pVisit.getCity());
			uPVisit.setCounty(pVisit.getCounty());
			uPVisit.setWaterActivity(pVisit.isWaterActivity());
			uPVisit.setFirstTimeVisit(pVisit.isFirstTimeVisit());
			uPVisit.setImageUrl(pVisit.getImageUrl());
			uPVisit.setCreatedAt(pVisit.getCreatedAt());
			uPVisit.setLastUpdated(LocalDateTime.now().toString());
			parkRepo.saveAndFlush(uPVisit);
			return uPVisit;
		}
		return null;
	}

	@Override
	public boolean deletePVisit(Integer parkVId) {
		if (parkVId != null) {
			parkRepo.deleteById(parkVId);
			return true;
		}
		return false;
	}

	
}
