package com.example.dojoninja.models;

import java.util.*;
import javax.persistence.*;


@Entity
@Table(name="dojo")
public class Dojo {
    
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private Date createdAt;
    private Date updatedAt;
    @OneToMany(mappedBy="dojo", fetch = FetchType.LAZY)
    private List<Ninja> ninjas;
    
    @PrePersist
    protected void onCreate() {
    	createdAt = new Date();
    }
    
    @PreUpdate
    protected void onUpdate() {
    	updatedAt = new Date();
    }
    
    public Dojo() {
        
    }
    public Dojo(String name) {
        this.name = name;
        this.createdAt = new Date();
        this.updatedAt = new Date();        
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public List<Ninja> getNinjas() {
		return ninjas;
	}

	public void setNinjas(List<Ninja> ninjas) {
		this.ninjas = ninjas;
	}
    
    
}
