package com.example.dojoninja.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.dojoninja.models.Dojo;
import com.example.dojoninja.models.Ninja;
import com.example.dojoninja.repositories.DojoRepository;
import com.example.dojoninja.repositories.NinjaRepository;

@Service
public class HomeServices {
	
	private DojoRepository dojoRepo;
	private NinjaRepository ninjaRepo;
	public HomeServices(DojoRepository dojoRepo, NinjaRepository ninjaRepo) {
		this.dojoRepo = dojoRepo;
		this.ninjaRepo = ninjaRepo;
	}
	
	public void addDojo(Dojo dojo) {
		dojoRepo.save(dojo);
	}
	
	public List<Dojo> findDojo(){
		return (List<Dojo>) dojoRepo.findAll();
	}
	
	public void addNinja(Ninja ninja) {
		ninjaRepo.save(ninja);
	}
	
	public Dojo findDojo(Long id) {
		return dojoRepo.findOne(id);
	}
}
