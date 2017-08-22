package com.example.events.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.events.models.Message;
@Repository
public interface MessageRepository extends CrudRepository<Message, Long> {

	List<Message> findAllByEvent_id(Long id);
}