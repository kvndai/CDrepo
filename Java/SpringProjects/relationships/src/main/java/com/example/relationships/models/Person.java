package com.example.relationships.models;

import java.util.*;
import javax.persistence.*;

@Entity
@Table(name="persons")
public class Person {
    
    @Id
    @GeneratedValue
    private Long id;
	private String firstName;
    private String lastName;
    private Date created_at;
    private Date updated_at;
    @OneToOne(mappedBy="person", fetch=FetchType.LAZY)
    private License license;
    
    @PrePersist
    protected void onCreate() {
    	created_at = new Date();
    }
    
    @PreUpdate
    protected void onUpdate() {
    	updated_at = new Date();
    }
    
    public Person() {
        
    }
    public Person(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.created_at = new Date();
        this.updated_at = new Date();
    }
    
    
    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
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

	public License getLicense() {
		return license;
	}

	public void setLicense(License license) {
		this.license = license;
	}
    
}
