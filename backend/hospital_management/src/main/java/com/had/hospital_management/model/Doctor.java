package com.had.hospital_management.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Doctor {
    @jakarta.persistence.Id
    private Long id;
    private String first_name;
    private String last_name;
    private String email;
    private String gender;
    private Date dob;
    private String address;
    private String password;
}
