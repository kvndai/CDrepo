package com.example.relationships.models;

import java.util.*;
import javax.persistence.*;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="licenses")
public class License {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date expiration_date;
    private String state;
    private Date created_at;
    private Date updated_at;
    @OneToOne(cascade=CascadeType.ALL, fetch=FetchType.LAZY)
    @JoinColumn(name="person_id")
    private Person person;
    private String number;
    private static Long counter = (long) 0;
    @PrePersist
    protected void onCreate() {
    	created_at = new Date();
    }
    
    @PreUpdate
    protected void onUpdate() {
    	updated_at = new Date();
    }
    public License() {
        
    }
    
    public License(String state, Person person, Date expiration_date) {
	this.expiration_date = expiration_date;
    this.state = state;
    this.person = person;
    this.number = generateNumber();
    this.created_at = new Date();
    this.updated_at = new Date();
}
    
    public static String generateNumber() {
		counter++;
		String counterS = counter.toString();
		String count = "";
		for(int i = 0; i < (6 - counterS.length()); i ++) {
			count += "0";
		}
		count += counterS;
		return count;
}
    
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public Date getExpiration_date() {
		return expiration_date;
	}

	public void setExpiration_date(Date expiration_date) {
		this.expiration_date = expiration_date;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public Date getcreated_at() {
		return created_at;
	}

	public void setcreated_at(Date created_at) {
		this.created_at = created_at;
	}

	public Date getupdated_at() {
		return updated_at;
	}

	public void setupdated_at(Date updated_at) {
		this.updated_at = updated_at;
	}

	public Person getPerson() {
		return person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}
    
    
    
}
