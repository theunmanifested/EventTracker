package com.skilldistillery.parks.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.parks.entities.Park;

public interface ParkRepository extends JpaRepository<Park, Integer> {

}
