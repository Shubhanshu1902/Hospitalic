package com.had.hospital_management.repository;

import com.had.hospital_management.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role,Long> {
    Optional<Role> findByName(String name);
    Optional<Role> findById(Long id);
}
