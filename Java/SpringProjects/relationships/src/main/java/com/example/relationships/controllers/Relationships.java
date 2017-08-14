package com.example.relationships.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.relationships.services.RelationshipService;
import com.example.relationships.models.Person;


@Controller
public class Relationships {
	private final RelationshipService relationshipService;
	
	public Relationships(RelationshipService relationshipService) {
		this.relationshipService = relationshipService;
	}
	
	@RequestMapping("/persons/new")
	public String person() {
		return "person.jsp";
	}
	
	@PostMapping("/persons/new")
    public String createPerson(@Valid @ModelAttribute("person") Person person, BindingResult result, RedirectAttributes redirectAttributes) {
        if (result.hasErrors()) {
        	redirectAttributes.addFlashAttribute("errors", "You have errors");
            return "redirect:/persons";
        }else{
        	relationshipService.addPerson(person);
            return "redirect:/licenses/new";
        }
    }
	
	@RequestMapping("/licences/new")
	public String license() {
		return "license.jsp";
	}
}
