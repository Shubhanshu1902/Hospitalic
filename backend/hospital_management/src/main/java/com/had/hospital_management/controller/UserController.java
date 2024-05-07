package com.had.hospital_management.controller;

import com.had.hospital_management.model.UserEntity;
import com.had.hospital_management.security.JWTGenerator;
import com.had.hospital_management.service.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService ;
    @Autowired
    private JWTGenerator jwtgen;
    @PostMapping("/save")
    public UserEntity save(@RequestBody UserEntity userEntity) {
        System.out.println(userEntity);
        System.out.println("reached");
        return userService.save(userEntity);
    }

    @GetMapping("/find_all")
    public List<UserEntity> findAll(){
        return userService.findAll();
    }

    @GetMapping("/get_by_id/{id}")
    public ResponseEntity<UserEntity> getById(@PathVariable("id") Long id){
        UserEntity userEntity = userService.findById(id);
        if(userEntity != null) {
            return ResponseEntity.ok(userEntity);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/hello")
    public String helloWorld(@RequestHeader (name="Authorization") String token) {
        System.out.println("hello reached");
        System.out.println(jwtgen.getUserIdFromJWT(token));
        return "Hello wordl";
    }

    @GetMapping("/get_all_doctor")
    public List<UserEntity> getAllDoctor(){
        return userService.getAllDoctor();
    }
    @GetMapping("/get_all_radiologist")
    public List<UserEntity>getAllRadiologist(){
        return userService.getAllRadiologist();
    }
    @GetMapping("/get_all_lab")
    public List<UserEntity>getAllLab(){
        return userService.getAllLab();
    }
    @GetMapping("/get_user_by_username/{username}")
    public ResponseEntity<UserEntity>getUserByUsername(@PathVariable("username") String username){
        UserEntity userEntity = userService.getUserByUsername(username);
        if(userEntity != null) {
            return ResponseEntity.ok(userEntity);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    
    @DeleteMapping("delete_by_id/{id}")
    @PreAuthorize("@userService.hasAuthorityUsingUserId(authentication.principal.username,#id)")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id) {
        try {
            userService.deleteById(id);
            return new ResponseEntity<>("User deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete user", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
