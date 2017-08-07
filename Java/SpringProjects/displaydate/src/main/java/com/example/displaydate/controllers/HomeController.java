package com.example.displaydate.controllers;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
        @RequestMapping("/")
        public String index() {
            return "index.jsp";
        }
        
        @RequestMapping("/dates")
        public String date(Model model) {
        		Date date = new java.util.Date();
        		model.addAttribute("date", date);
            return "date.jsp";
        }
        
        @RequestMapping("/times")
        public String time(Model model) {
        		String sdf = new SimpleDateFormat("HH:mm:ss").format(Calendar.getInstance().getTime());
        		model.addAttribute("sdf",sdf);
            return "time.jsp";
        }
}

