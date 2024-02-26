package com.had.hospital_management.repository;
import com.had.hospital_management.model.Chat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ChatRepository extends JpaRepository<Chat,Long>{
}
