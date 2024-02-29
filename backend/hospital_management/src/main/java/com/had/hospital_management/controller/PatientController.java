package com.had.hospital_management.controller;

import com.had.hospital_management.model.Patient;
import com.had.hospital_management.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patient")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @PostMapping("/save")
    public Patient save(@RequestBody Patient patient) {
        System.out.println(patient);
        System.out.println("reached");
        return patientService.save(patient);
    }

    @GetMapping("/find_all")
    public List<Patient> findAll(){
        return patientService.findAll();
    }

    @GetMapping("/get_by_id/{id}")
    public ResponseEntity<Patient> getById(@PathVariable("id") Long id){
        Patient patient = patientService.findById(id);
        if(patient != null) {
            return ResponseEntity.ok(patient);
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
            patientService.deleteById(id);
            return new ResponseEntity<>("Doctor deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete doctor", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
