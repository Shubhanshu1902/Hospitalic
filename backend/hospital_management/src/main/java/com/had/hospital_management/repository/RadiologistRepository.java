package com.had.hospital_management.repository;

import com.had.hospital_management.model.Radiologist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RadiologistRepository extends JpaRepository<Radiologist, Long> {
}
