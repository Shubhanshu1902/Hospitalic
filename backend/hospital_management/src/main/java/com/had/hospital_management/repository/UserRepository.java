package com.had.hospital_management.repository;

import com.had.hospital_management.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity,Long> {
    Optional<UserEntity> findByUsername(String username);
    Boolean existsByUsername(String username);
    @Query(
            nativeQuery = true,
            value = "select * from users where role_id = 2"
    )
    List<UserEntity> getAllDoctor();
    @Query(
            nativeQuery = true,
            value = "select * from users where role_id = 3"
    )
    List<UserEntity> getAllRadiologist();
    @Query(
            nativeQuery = true,
            value = "select * from users where role_id = 4"
    )
    List<UserEntity> getAllLab();
    @Query(
            nativeQuery = true,
            value = "select * from users where username = :username"
    )
    UserEntity getUserByUsername(@Param("username") String username);

    @Query(
            nativeQuery = true,
            value = "select id from users where username = :username"
    )
    Long getUserIdByUsername(@Param("username") String username);
}
