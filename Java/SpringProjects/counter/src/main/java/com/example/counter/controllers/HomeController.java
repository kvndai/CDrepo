package com.example.counter.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	@RequestMapping("/")
	public String index(HttpSession session) {
		Integer counter = (Integer) session.getAttribute("counter");
		if (counter == null) {
			counter = 0;
			session.setAttribute("counter", counter);
		}
		else {
			counter++;
			session.setAttribute("counter", counter);
		}
		return "index.jsp";
	}
	
	@RequestMapping("/counters")
	public String counter(HttpSession session) {
		Integer counter = (Integer) session.getAttribute("counter");
		session.setAttribute("counter", counter);
		return "counter.jsp";
	}
}
