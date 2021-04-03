package com.skilldistillery.parks.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class ParksTest {

	private static EntityManagerFactory emf;
	private static EntityManager em;
	private ParkVisit parkVisit;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("ParksPU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		parkVisit = em.find(ParkVisit.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		parkVisit = null;
	}

	@Test
	void test_park_entity_mapping() {
		assertNotNull(parkVisit);
		assertEquals("Longhorn Cavern State Park", parkVisit.getParkName());
		assertEquals("Burnet", parkVisit.getCounty());
	}

}
