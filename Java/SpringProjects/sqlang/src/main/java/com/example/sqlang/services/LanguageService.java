package com.example.sqlang.services;
import org.springframework.stereotype.Service;
import java.util.*;
import com.example.sqlang.models.Language;
import com.example.sqlang.repositories.LanguageRepository;

@Service
public class LanguageService {
	private LanguageRepository languageRepository;
	
	public LanguageService(LanguageRepository languageRepository) {
		this.languageRepository = languageRepository;
	}
	
	public void addLanguage(Language language) {
		languageRepository.save(language);
	}
	
	public List<Language> allLanguages(){
		return (List<Language>) languageRepository.findAll();
	}
	
	public void destroyLanguage(Long id) {
		languageRepository.delete(id);
	}
    public Language findLanguageById(Long id) {
    	return languageRepository.findOne(id);
    }
    public void editLanguage(Language language) {
        languageRepository.save(language);
}
}
