package com.example.thecode.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class HomeController {
	@RequestMapping(path ="/", method = RequestMethod.GET)
	public String index(@ModelAttribute("errors") String errors, Model model) {
		model.addAttribute("errors", errors);
		return "NewFile.jsp";
	}
	@RequestMapping("/code")
	public String success() {
		return "success.jsp";
	}
	@RequestMapping(path="/codecheck", method = RequestMethod.POST)
	public String checkpost(@RequestParam (value= "code") String code, RedirectAttributes redirectAttributes) {
		if(code.equals("bushido")) {
			return "redirect:/code";
		}
		redirectAttributes.addFlashAttribute("errors", "You must train harder!");
		return "redirect:/";	
	}
}
