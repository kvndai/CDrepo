package com.example.grouplang.services;

import java.util.*;

import org.springframework.stereotype.Service;

import com.example.grouplang.models.Language;

@Service
public class LanguageService {
	
	private List<Language> languages = new ArrayList<Language>(Arrays.asList(
			new Language("Java", "James Gosling", "1.8")
			));
	
	public List<Language> allLanguages() {
		return languages;
	}
	
    public void addLanguage(Language language) {
        languages.add(language);
    }
    
    public Language findLanguageByIndex(int index) {
        if (index < languages.size()){
            return languages.get(index);
        }else{
            return null;
        }
    }
    
    public void updateLanguage(int id, Language language) {
        if (id < languages.size()){
            languages.set(id, language);
        }
    }
    
    public void destroyLanguage(int id) {
        if (id < languages.size()){
            languages.remove(id);
        }
    }
}