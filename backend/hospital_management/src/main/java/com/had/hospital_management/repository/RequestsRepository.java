package com.had.hospital_management.repository;

import com.had.hospital_management.model.Requests;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RequestsRepository extends JpaRepository<Requests , Long> {
}
