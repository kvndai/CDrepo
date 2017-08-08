package com.example.ninjagold.controller;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.request;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.Random;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {
	ArrayList<String> activities = new ArrayList<String>();
	
	@RequestMapping(path="/gold", method=RequestMethod.GET)
	public String index(HttpSession session, Model model) {
		Integer counter = (Integer) session.getAttribute("counter");
		if (counter == null) {
			counter = 0;
			session.setAttribute("counter", counter);
		}
		return "index.jsp";
	}
	
	@RequestMapping(path="/gold", method=RequestMethod.POST)
	public String process(HttpSession session, @RequestParam(value = "building") String building, Model model) {
		Integer counter = (Integer) session.getAttribute("counter");
		Random rand = new Random();
		String log;
		Date date = new java.util.Date();
		String sdf = new SimpleDateFormat("HH:mm:ss").format(Calendar.getInstance().getTime());
		
		if(building.equals("farm")) {
			Integer randomNum = rand.nextInt((21 - 10) + 1) + 10;
			System.out.println(counter);
			System.out.println(randomNum);
			counter += randomNum;
			session.setAttribute("counter", counter);
			log = "You entered a farm and earned " + randomNum + "gold " + date + sdf;
			activities.add(log);
			
		} else if(building.equals("cave")) {
			Integer randomNum = rand.nextInt((11 - 5) + 1) + 5;
			System.out.println(counter);
			System.out.println(randomNum);
			counter += randomNum;
			session.setAttribute("counter", counter);
			log = "You entered a cave and earned " + randomNum + "gold " + date + sdf;
			activities.add(log);
			
		} else if(building.equals("house")) {
			Integer randomNum = rand.nextInt((5 - 2) + 1) + 2;
			System.out.println(counter);
			System.out.println(randomNum);
			counter += randomNum;
			session.setAttribute("counter", counter);
			log = "You entered a house and earned " + randomNum + "gold " + date + sdf;
			activities.add(log);
			
		} else if(building.equals("casino")) {
			Integer randomNum = rand.nextInt((50 - 0) + 1) + 0;
			Integer randomInt = rand.nextInt((2-1) + 1) + 1;
			System.out.println(counter);
			System.out.println(randomInt);
			if(randomInt == 1) {
				counter -= randomNum;
			} else {
				counter += randomNum;
			}
			session.setAttribute("counter", counter);
			if(randomInt == 1) {
				log = "You entered a casino and lost " + randomNum + "gold " + date + sdf;
				activities.add(log);
			} else {
				log = "You entered a casino and earned " + randomNum + "gold " + date + sdf;
				activities.add(log);
			}
		}
		session.setAttribute("activities", activities);
		return "redirect:/gold";
	}
	
	@RequestMapping(path="/reset", method=RequestMethod.POST)
		public String reset(HttpSession session) {
			Integer counter = (Integer) session.getAttribute("counter");
			counter = null;
			session.setAttribute("counter", counter);
			ArrayList<String> activities = new ArrayList<String>();
			session.setAttribute("activities", activities);
			return "redirect:/gold";
		}
}
