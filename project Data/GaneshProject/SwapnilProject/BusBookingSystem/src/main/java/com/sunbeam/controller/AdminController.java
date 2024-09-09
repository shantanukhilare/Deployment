package com.sunbeam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.BusDto;
import com.sunbeam.dto.CustomerDto;
import com.sunbeam.dto.RouteDto;
import com.sunbeam.dto.ScheduleDto;
import com.sunbeam.exceptions.ResourceNotFoundException;
import com.sunbeam.service.BusService;
import com.sunbeam.service.CustomerService;
import com.sunbeam.service.RouteService;
import com.sunbeam.service.ScheduleService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/Admin")
public class AdminController {
	
	public AdminController() {
		System.out.println("Inside"+getClass());
				
	}
	
	@Autowired	
	private BusService busservice;
	
	@Autowired
	private CustomerService customerservice;
	
	@Autowired
	private ScheduleService scheduleservice;
	
	@Autowired
	private RouteService routeservice;
	
	
	///Routes
		@PostMapping("/AddRoute")
		public ResponseEntity<?> registerRoute(@RequestBody RouteDto dto)
		{
			try {
				return ResponseEntity.status(HttpStatus.CREATED).body(routeservice.addRoute(dto));
			}
			catch(RuntimeException e){
				
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResourceNotFoundException( e.getMessage()));
				
			}
		}
		
		@GetMapping("/GetAllRoutes")
		public ResponseEntity<?> getAllRoutes()
		{
			try {
				return  ResponseEntity.status(HttpStatus.OK).body(routeservice.GetAllroute());
				}
			catch(RuntimeException e)
			{
				return  ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
			}
			
		}
	
	///Buses
	@PostMapping("/AddBus")
	public ResponseEntity<?> registerBus(@RequestBody BusDto dto)
	{
		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(busservice.addBus(dto));
		}
		catch(RuntimeException e){
			
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResourceNotFoundException( e.getMessage()));
			
		}
	}
	
	@GetMapping("/GetAllBuses")
	public ResponseEntity<?> getAllBuses()
	{
		try {
			return  ResponseEntity.status(HttpStatus.OK).body(busservice.getAllBuses());
			}
		catch(RuntimeException e)
		{
			return  ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
		
	}
	
	///Customers
	@PostMapping("/AddCustomer")
	public ResponseEntity<?> RegisterCustomer(@RequestBody CustomerDto dto)
	{
		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(customerservice.registerCustomer(dto));
		}
		catch(RuntimeException e){
			
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResourceNotFoundException( e.getMessage()));
			
		}
	}
	
	@GetMapping("/GetAllCustomers")
	public ResponseEntity<?> getAllCustomers()
	{
		try {
			return  ResponseEntity.status(HttpStatus.OK).body(customerservice.getAllCustomers());
			}
		catch(RuntimeException e)
		{
			return  ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
		
	}
	
	///Schedule
		@PostMapping("/AddSchedule")
		public ResponseEntity<?> addSchedule(@RequestBody ScheduleDto dto)
		{
			try {
				return ResponseEntity.status(HttpStatus.CREATED).body(scheduleservice.AddShedule(dto));
			}
			catch(RuntimeException e){
				
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResourceNotFoundException( e.getMessage()));
				
			}
		
		}
		
		@GetMapping("/GetAllSchedule")
		public ResponseEntity<?> getAllSchedule()
		{
			try {
				return  ResponseEntity.status(HttpStatus.OK).body(scheduleservice.GetAllSchedule());
				}
			catch(RuntimeException e)
			{
				return  ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
			}
		}

		@PutMapping("/deleteBus/{id}")
		public ResponseEntity<?> deleteBus(@PathVariable Long id)
		{
			try {
				return  ResponseEntity.status(HttpStatus.OK).body(busservice.deleteBus(id));
				}
			catch(RuntimeException e)
			{
				return  ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
			}
		}
		
		
		

}
