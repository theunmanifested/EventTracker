package com.skilldistillery.parks.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.parks.entities.ParkVisit;

public interface ParkRepository extends JpaRepository<ParkVisit, Integer> {

}
