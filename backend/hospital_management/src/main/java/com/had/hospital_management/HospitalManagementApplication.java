package com.had.hospital_management;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.had.hospital_management.model.Role;
import com.had.hospital_management.model.UserEntity;
import com.had.hospital_management.repository.RoleRepository;
import com.had.hospital_management.repository.UserRepository;

@SpringBootApplication
public class HospitalManagementApplication implements CommandLineRunner {
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	RoleRepository role_repo;
	@Autowired
	UserRepository user_repo;

	public static void main(String[] args) {
		SpringApplication.run(HospitalManagementApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Role r1 = new Role(1, "PATIENT");
		role_repo.save(r1);
		Role r2 = new Role(2, "DOCTOR");
		role_repo.save(r2);
		Role r3 = new Role(3, "RADIOLOGIST");
		role_repo.save(r3);
		Role r4 = new Role(4, "LAB");
		role_repo.save(r4);

		String DEFAULT_PATTERN = "yyyy-MM-dd HH:mm:ss";

		String yourDateString = "2015-01-01 12:00:00";
		DateFormat formatter = new SimpleDateFormat(DEFAULT_PATTERN);
		Date myDate = formatter.parse(yourDateString);

		// PATIENT ADD
		UserEntity u1 = new UserEntity(1, "patient1@mail.com", passwordEncoder.encode("password"), "Patient1", "Chan", "M", myDate, "pa1", r1);
		user_repo.save(u1);
		u1 = new UserEntity(2, "patient2@mail.com", passwordEncoder.encode("password"), "Patient2", "Chan", "M", myDate, "pa1", r1);
		user_repo.save(u1);
		u1 = new UserEntity(3, "patient3@mail.com", passwordEncoder.encode("password"), "Patient3", "Chan", "M", myDate, "pa1", r1);
		user_repo.save(u1);
		u1 = new UserEntity(4, "patient4@mail.com", passwordEncoder.encode("password"), "Patient4", "Chan", "M", myDate, "pa1", r1);
		user_repo.save(u1);
		u1 = new UserEntity(5, "patient5@mail.com", passwordEncoder.encode("password"), "Patient5", "Chan", "M", myDate, "pa1", r1);
		user_repo.save(u1);
		

		// DOCTOR ADD
		UserEntity u2 = new UserEntity(6, "doctor1@mail.com", passwordEncoder.encode("password"), "Doctor1", "Chan", "M", myDate, "da1", r2);
		user_repo.save(u2);
		u2 = new UserEntity(7, "doctor2@mail.com", passwordEncoder.encode("password"), "Doctor2", "Chan", "M", myDate, "da1", r2);
		user_repo.save(u2);
		u2 = new UserEntity(8, "doctor3@mail.com", passwordEncoder.encode("password"), "Doctor3", "Chan", "M", myDate, "da1", r2);
		user_repo.save(u2);
		u2 = new UserEntity(9, "doctor4@mail.com", passwordEncoder.encode("password"), "Doctor4", "Chan", "M", myDate, "da1", r2);
		user_repo.save(u2);
		u2 = new UserEntity(10, "doctor5@mail.com", passwordEncoder.encode("password"), "Doctor5", "Chan", "M", myDate, "da1", r2);
		user_repo.save(u2);

		// RADIOLOGIST Add
		UserEntity u3 = new UserEntity(11, "radiologist1@mail.com", passwordEncoder.encode("password"), "Radiologist1", "Chan", "M", myDate, "ra1", r3);
		user_repo.save(u3);
		u3 = new UserEntity(12, "radiologist2@mail.com", passwordEncoder.encode("password"), "Radiologist2", "Chan", "M", myDate, "ra1", r3);
		user_repo.save(u3);
		u3 = new UserEntity(13, "radiologist3@mail.com", passwordEncoder.encode("password"), "Radiologist3", "Chan", "M", myDate, "ra1", r3);
		user_repo.save(u3);
		u3 = new UserEntity(14, "radiologist4@mail.com", passwordEncoder.encode("password"), "Radiologist4", "Chan", "M", myDate, "ra1", r3);
		user_repo.save(u3);
		u3 = new UserEntity(15, "radiologist5@mail.com", passwordEncoder.encode("password"), "Radiologist5", "Chan", "M", myDate, "ra1", r3);
		user_repo.save(u3);


		// LAB Add
		UserEntity u4 = new UserEntity(16, "lab1@mail.com", passwordEncoder.encode("password"), "Lab1", "Chan", "M", myDate, "ra1", r4);
		user_repo.save(u4);
		u4 = new UserEntity(17, "lab2@mail.com", passwordEncoder.encode("password"), "Lab2", "Chan", "M", myDate, "ra1", r4);
		user_repo.save(u4);
		u4 = new UserEntity(18, "lab3@mail.com", passwordEncoder.encode("password"), "Lab3", "Chan", "M", myDate, "ra1", r4);
		user_repo.save(u4);
		u4 = new UserEntity(19, "lab4@mail.com", passwordEncoder.encode("password"), "Lab4", "Chan", "M", myDate, "ra1", r4);
		user_repo.save(u4);
		u4 = new UserEntity(20, "lab5@mail.com", passwordEncoder.encode("password"), "Lab5", "Chan", "M", myDate, "ra1", r4);
		user_repo.save(u4);
	}
}
