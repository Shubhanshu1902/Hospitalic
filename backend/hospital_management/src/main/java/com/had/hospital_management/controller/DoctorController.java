package com.had.hospital_management.controller;

import com.had.hospital_management.model.Doctor;
import com.had.hospital_management.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doctor")
public class DoctorController {
    @Autowired
    private DoctorService doctorService;
    @PostMapping("/save")
    public Doctor save(@RequestBody Doctor doctor){
        return doctorService.save(doctor);
    }

    @GetMapping("/find_all")
    public List<Doctor> findAll()
    {
        return doctorService.findAll();
    }

    @GetMapping("/get_by_id/{id}")
    public ResponseEntity<Doctor> getById(@PathVariable("id") Long id)
    {
        Doctor doctor = doctorService.getById(id);
        if (doctor != null) {
            return ResponseEntity.ok(doctor);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete_by_id/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id) {
        try {
            doctorService.deleteById(id);
            return new ResponseEntity<>("Doctor deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete doctor", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
