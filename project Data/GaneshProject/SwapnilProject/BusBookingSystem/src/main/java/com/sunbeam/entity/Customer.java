package com.sunbeam.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor

@Table(name="customers")


public class Customer extends BaseEntity {
	
	@Column(name = "customer_fname")
	private String customerFname;
	
	@Column(name = "customer_lname")
	private String customerLname;
	
	@Column(name = "customer_email",unique =true)
	private String customerEmail;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "gender")
	private Gender gender;
	
	@Column(name = "customer_phone")
	private String customerPhone;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "address")
	private String address;

	@Column(name = "age")
	private int age;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "role")
	private Role role;
	
	

}
