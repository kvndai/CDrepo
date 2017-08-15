package com.example.dojoninja.controllers;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.dojoninja.models.Dojo;
import com.example.dojoninja.models.Ninja;
import com.example.dojoninja.services.HomeServices;


@Controller
public class HomeController {
	
	private final HomeServices homeService;
	public HomeController(HomeServices homeService) {
		this.homeService = homeService;
	}
	
	@RequestMapping("/dojos/new")
	public String dojo(@ModelAttribute("dojo") Dojo dojo) {
		return "newdojo.jsp";
	}
	
	@RequestMapping("/ninjas/new")
	public String ninja(@ModelAttribute("ninja") Ninja ninja, Model model) {
		model.addAttribute("dojo", homeService.findDojo());
		return "newninja.jsp";	
	}
	
	@PostMapping("/dojos/new")
	public String createDojo(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result, RedirectAttributes redirectAttributes) {
		if (result.hasErrors()) {
        	redirectAttributes.addFlashAttribute("errors", "You have errors");
            return "redirect:/dojos/new";
        }else{
        homeService.addDojo(dojo);
            return "redirect:/ninjas/new";
        }
	}
	
	@PostMapping("/ninjas/new")
	public String createNinja(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result, RedirectAttributes redirectAttributes) {
		if (result.hasErrors()) {
        	redirectAttributes.addFlashAttribute("errors", "You have errors");
            return "redirect:/ninjas/new";
        }else{
        	homeService.addNinja(ninja);
            return "redirect:/dojos/" + ninja.getDojo().getId();
        }
	}
	
	@RequestMapping("/dojos/{id}")
	public String detail(@PathVariable("id") Long id, Model model) {
		model.addAttribute("dojo", homeService.findDojo(id));
		return "result.jsp";
	}
}
