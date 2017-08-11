package com.example.sqlang.repositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.sqlang.models.*;

@Repository
public interface LanguageRepository extends CrudRepository<Language, Long>{

}