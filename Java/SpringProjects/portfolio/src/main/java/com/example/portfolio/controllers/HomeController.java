package com.example.portfolio.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller

public class HomeController {
	@RequestMapping("/")
	public String index() {
		return "forward:/main.html";
	}
	@RequestMapping("/projects")
	public String projects() {
		return "forward:/myprojects.html";
	}
	@RequestMapping("/about")
	public String about() {
		return "forward:/aboutme.html";
		
	}
}