package com.had.hospital_management.dto;

import com.had.hospital_management.model.Role;
import lombok.Data;

import java.util.Date;

@Data
public class RegisterDto {
    private String username;//email
    private String password;
    private String first_name;
    private String last_name;
    private String gender;
    private Date dob;
    private String address;
    private Role role;
}
