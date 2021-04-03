package com.skilldistillery.parks.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="park_visit")
public class ParkVisit {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;	
	
	@Column(name="park_name")
	private String parkName;
	
	private boolean active;
	
	private Integer length;
	
	private String date;
	
	@Column(name="main_activity")
	private String mainActivity;
	
	@Column(name="log_visit")
	private String logVisit;
	
	private String city;
	
	private String county;
	
	@Column(name="water_activity") 
	private boolean waterActivity;
	
	@Column(name="first_time_visit")
	private boolean firstTimeVisit;
	
	@Column(name= "img_url")
	private String imageUrl;
	
	@Column(name="best_season_num")
	private Integer bestSeason;
	
	@Column(name= "created_at")
	private String createdAt;
	
	@Column(name= "last_updated")
	private String lastUpdated;

	// constructor(s)

	public ParkVisit() {};

	// getters and setters
	
	
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getParkName() {
		return parkName;
	}

	public void setParkName(String parkName) {
		this.parkName = parkName;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public Integer getLength() {
		return length;
	}

	public void setLength(Integer length) {
		this.length = length;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getMainActivity() {
		return mainActivity;
	}

	public void setMainActivity(String mainActivity) {
		this.mainActivity = mainActivity;
	}

	public String getLogVisit() {
		return logVisit;
	}

	public void setLogVisit(String logVisit) {
		this.logVisit = logVisit;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCounty() {
		return county;
	}

	public void setCounty(String county) {
		this.county = county;
	}

	public boolean isWaterActivity() {
		return waterActivity;
	}

	public void setWaterActivity(boolean waterActivity) {
		this.waterActivity = waterActivity;
	}

	public boolean isFirstTimeVisit() {
		return firstTimeVisit;
	}

	public void setFirstTimeVisit(boolean firstTimeVisit) {
		this.firstTimeVisit = firstTimeVisit;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}	
	

	public Integer getBestSeason() {
		return bestSeason;
	}

	public void setBestSeason(Integer bestSeason) {
		this.bestSeason = bestSeason;
	}

	public String getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}

	public String getLastUpdated() {
		return lastUpdated;
	}

	public void setLastUpdated(String lastUpdated) {
		this.lastUpdated = lastUpdated;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ParkVisit other = (ParkVisit) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	
	
	
}
