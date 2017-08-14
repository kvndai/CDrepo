package com.example.relationships.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.relationships.services.RelationshipService;
import com.example.relationships.models.License;
import com.example.relationships.models.Person;


@Controller
public class Relationships {
	
	private final RelationshipService relationshipService;
	public Relationships(RelationshipService relationshipService) {
		this.relationshipService = relationshipService;
	}
	
	@RequestMapping("/persons/new")
	public String person(@ModelAttribute("person") Person person) {
		return "person.jsp";
	}
	
	@RequestMapping("/licenses/new")
	public String newLicense(@ModelAttribute("license") License license, Model model) {
		model.addAttribute("persons", relationshipService.findPersons());
		return "license.jsp";
	}
	
	@PostMapping("/persons/new")
    public String createPerson(@Valid @ModelAttribute("person") Person person, BindingResult result, RedirectAttributes redirectAttributes) {
        if (result.hasErrors()) {
        	redirectAttributes.addFlashAttribute("errors", "You have errors");
            return "redirect:/persons/new";
        }else{
        	relationshipService.addPerson(person);
            return "redirect:/licenses/new";
        }
    }
	
	@PostMapping("/licenses/new")
	public String addLicense(@Valid @ModelAttribute("license") License license, BindingResult result, RedirectAttributes redirectAttributes) {
		if (result.hasErrors()) {
        	redirectAttributes.addFlashAttribute("errors", "You have errors");
            return "redirect:/licenses/new";
        }else{
        	relationshipService.addLicense(license);
            return "redirect:/licenses/new";
        }
	}
	
	@RequestMapping("/persons/{id}")
	public String detail(@PathVariable("id") Long id, Model model) {
		model.addAttribute("person", relationshipService.findPerson(id));
		return "result.jsp";
	}
	
	
}
