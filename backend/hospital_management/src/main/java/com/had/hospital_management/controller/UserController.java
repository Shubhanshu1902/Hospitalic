package com.had.hospital_management.controller;

import com.had.hospital_management.model.UserEntity;
import com.had.hospital_management.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService ;

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
    public String helloWorld() {
        System.out.println("hello reached");
        return "Hello wordl";
    }

    @DeleteMapping("delete_by_id/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id) {
        try {
            userService.deleteById(id);
            return new ResponseEntity<>("User deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete user", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
