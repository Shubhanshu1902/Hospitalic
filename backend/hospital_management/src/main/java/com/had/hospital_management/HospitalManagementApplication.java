package com.had.hospital_management;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.had.hospital_management.model.Role;
import com.had.hospital_management.repository.RoleRepository;

@SpringBootApplication
public class HospitalManagementApplication implements CommandLineRunner{
	@Autowired RoleRepository repo;
	public static void main(String[] args) {
		SpringApplication.run(HospitalManagementApplication.class, args);
	}

	
	@Override
	public void run(String... args) throws Exception{
		Role r1 = new Role(1,"PATIENT");
		repo.save(r1);
		Role r2 = new Role(2,"DOCTOR");
		repo.save(r2);
		Role r3 = new Role(3,"RADIOLOGIST");
		repo.save(r3);
		Role r4 = new Role(4,"LAB");
		repo.save(r4);
	}

}
