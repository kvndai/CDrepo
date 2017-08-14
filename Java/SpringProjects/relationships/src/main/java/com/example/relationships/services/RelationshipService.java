package com.example.relationships.services;
import org.springframework.stereotype.Service;

import com.example.relationships.models.License;
import com.example.relationships.models.Person;
import com.example.relationships.repositories.LicenseRepository;
import com.example.relationships.repositories.RelationshipRepository;

import java.util.*;


@Service
public class RelationshipService {
	private RelationshipRepository relationshipRepository;
	private LicenseRepository licenseRepository;
	public RelationshipService(RelationshipRepository relationshipRepository, LicenseRepository licenseRepository) {
		this.relationshipRepository = relationshipRepository;
		this.licenseRepository = licenseRepository;
	}
	
	public void addPerson(Person person) {
		relationshipRepository.save(person);
	}
	
	public List<Person> findPersons(){
		return (List<Person>) relationshipRepository.findAll();
	}
	
	public void addLicense(License license) {
		System.out.println(license.getNumber());
		licenseRepository.save(license);
	}
	
	public Person findPerson(Long id) {
		return relationshipRepository.findOne(id);
	}
}
