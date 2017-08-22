package com.example.events.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.events.models.Event;
@Repository
public interface EventRepository extends CrudRepository<Event, Long> {

}
