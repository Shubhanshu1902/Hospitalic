package com.had.hospital_management.controller;

import com.had.hospital_management.model.Doctor;
import com.had.hospital_management.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doctor")
public class DoctorController {
    @Autowired
    private DoctorService doctorService;
    @PostMapping("/save")
    public Doctor saveDoctor(@RequestBody Doctor doctor){
        return doctorService.saveDoctor(doctor);
    }

    @GetMapping("/find_all")
    public List<Doctor> findAllDoctors()
    {
        return doctorService.findAllDoc();
    }

    @GetMapping("/get_by_id/{id}")
    public ResponseEntity<Doctor> getById(@PathVariable("id") Long id)
    {
        Doctor doctor = doctorService.findDoctorById(id);
        if (doctor != null) {
            return ResponseEntity.ok(doctor);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
