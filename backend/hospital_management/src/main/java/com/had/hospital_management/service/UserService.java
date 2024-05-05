package com.had.hospital_management.service;

import com.had.hospital_management.model.UserEntity;
import com.had.hospital_management.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public UserEntity save(UserEntity user) {
        return userRepository.save(user);
    }
    public List<UserEntity> findAll(){
        return userRepository.findAll();
    }

    public UserEntity findById(Long Id){
        return userRepository.findById(Id).orElse(null);
    }
    public List<UserEntity> getAllDoctor(){return userRepository.getAllDoctor();}
    public List<UserEntity> getAllRadiologist(){return userRepository.getAllRadiologist();}
    public List<UserEntity> getAllLab(){return userRepository.getAllLab();}
    public UserEntity getUserByUsername(String username){ return userRepository.getUserByUsername(username);}

    @Transactional
    public void deleteById(Long id) {
        UserEntity userEntity = userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Patient with id " + id + " not found"));
    }
}
