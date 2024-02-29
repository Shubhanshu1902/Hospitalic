package com.had.hospital_management.controller;

import com.had.hospital_management.model.Appointment;
import com.had.hospital_management.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointment")
public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/save")
    public Appointment save(@RequestBody Appointment appointment) {
        return appointmentService.save(appointment);
    }

    @GetMapping("find_all")
    public List<Appointment> findAll(){
        return appointmentService.findAll();
    }
    @GetMapping("get_by_id/{id}")
    public ResponseEntity<Appointment> getById(@PathVariable("id") Long id){
        Appointment appointment= appointmentService.getById(id);
        if(appointment!=null){
            return ResponseEntity.ok(appointment);
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("delete_by_id/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id) {
        try {
            appointmentService.deleteById(id);
            return new ResponseEntity<>("Doctor deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete doctor", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
