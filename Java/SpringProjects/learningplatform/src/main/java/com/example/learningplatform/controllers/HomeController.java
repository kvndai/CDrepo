package com.example.learningplatform.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.stereotype.Controller;
@Controller
public class HomeController {
	@RequestMapping(path ="/", method = RequestMethod.GET)
	public String index() {
		return "index.jsp";
	}

}
