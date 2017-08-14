package com.example.relationships.services;
import org.springframework.stereotype.Service;

import com.example.relationships.models.Person;
import com.example.relationships.repositories.RelationshipRepository;

import java.util.*;


@Service
public class RelationshipService {
	private RelationshipRepository relationshipRepository;
	public RelationshipService(RelationshipRepository relationshipRepository) {
		this.relationshipRepository = relationshipRepository;
	}
	
	public void addPerson(Person person) {
		relationshipRepository.save(person);
	}
}
