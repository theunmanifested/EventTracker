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
	private Park park;
	
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
		park = em.find(Park.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		park = null;
	}

	@Test
	void test_park_entity_mapping() {
		assertNotNull(park);
		assertEquals("Longhorn Cavern State Park", park.getName());
	}

}
