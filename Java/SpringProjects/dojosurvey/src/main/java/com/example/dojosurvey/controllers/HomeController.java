package com.example.dojosurvey.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {
	@RequestMapping(path="/", method=RequestMethod.GET)
	public String index() {
		return "index.jsp";
	}
	
	@RequestMapping(path="/process", method=RequestMethod.POST)
	public String process(@RequestParam(value = "name") String name, @RequestParam(value = "location") String location, @RequestParam(value = "language") String language, @RequestParam(value = "comments") String comments, Model model, HttpSession session) {
		session.setAttribute("name", name);
		session.setAttribute("comments", comments);
		session.setAttribute("location", location);
		session.setAttribute("language", language);
		return "redirect:/process";
	}
	
	@RequestMapping(path="/process", method=RequestMethod.GET)
	public String process(HttpSession session) {
		session.setAttribute("comments", session.getAttribute("comments"));
		session.setAttribute("location", session.getAttribute("location"));
		session.setAttribute("language", session.getAttribute("language"));
		session.setAttribute("name", session.getAttribute("name"));
		return "result.jsp";
	}
}
