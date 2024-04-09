package com.had.hospital_management.service;

import com.had.hospital_management.model.Role;
import com.had.hospital_management.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UtilService {
    @Autowired
    private RoleRepository roleRepository;

    public Role saverole(Role role)  {return roleRepository.save(role);}
}
