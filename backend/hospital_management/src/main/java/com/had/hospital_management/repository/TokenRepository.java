package com.had.hospital_management.repository;

import com.had.hospital_management.model.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TokenRepository extends JpaRepository<Token,String> {
}
