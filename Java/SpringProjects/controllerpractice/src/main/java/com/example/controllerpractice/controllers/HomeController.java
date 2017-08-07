package com.example.controllerpractice.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequestMapping("/")
public class HomeController {
	@RequestMapping("")
	public String hello() {
		return "forward:/index.html";
	}
	@RequestMapping("/world")
	public String world() {
		return "forward:/index2.html";
		
	}
}
