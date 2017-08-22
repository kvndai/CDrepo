package com.example.events.services;

import com.example.events.models.User;
import com.example.events.repositories.*;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
@Service
public class UserDetailsServiceImplementaion implements UserDetailsService {
	private UserRepository userReoisitory;
	
	public UserDetailsServiceImplementaion(UserRepository userReoisitory) {
		this.userReoisitory = userReoisitory;
	}
	
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userReoisitory.findByUsername(username);
		
		if(user == null) {
			throw new UsernameNotFoundException("User not found");
		}
		
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), getAuthorities());
	}

	private List<GrantedAuthority> getAuthorities(){
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        
        return authorities;
    }

}
