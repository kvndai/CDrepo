package com.example.relationships.repositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.relationships.models.Person;

@Repository
public interface RelationshipRepository extends CrudRepository<Person, Long>{

}

