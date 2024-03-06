package com.had.hospital_management.dto;

import com.had.hospital_management.model.Role;
import lombok.Data;

@Data
public class RegisterDto {
    private String username;
    private String password;
    private Role role;
}
