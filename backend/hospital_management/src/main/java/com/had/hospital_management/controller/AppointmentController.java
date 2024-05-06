package com.had.hospital_management.controller;

import com.had.hospital_management.model.Appointment;
import com.had.hospital_management.service.AppointmentService;
import com.had.hospital_management.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointment")
public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;
    @Autowired
    private UserService userService;

    @PostMapping("/save")
    @PreAuthorize("#appointment.getUser1().getUsername() == authentication.principal.username")
    public Appointment save(@RequestBody Appointment appointment) {
        System.out.println(appointment);
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
    @GetMapping("get_appointment_by_doctor_id/{id}")
    @PreAuthorize("userService.findById(#id).getUsername() == authentication.principal.username")
    public List<Appointment> getAppointmentByDoctorId(@PathVariable("id")Long id){
        return appointmentService.getAppointmentByDoctorId(id);
    }
    @GetMapping("get_appointment_by_patient_id/{id}")
    @PreAuthorize("userService.findById(#id).getUsername() == authentication.principal.username")
    public List<Appointment> getAppointmentByPatientId(@PathVariable("id")Long id){
        return appointmentService.getAppointmentByPatientId(id);
    }
    @GetMapping("get_appointment_by_lab_id/{id}")
    @PreAuthorize("userService.findById(#id).getUsername() == authentication.principal.username")
    public List<Appointment> getAppointmentByLabId(@PathVariable("id")Long id){
        return appointmentService.getAppointmentByLabId(id);
    }
    @PostMapping("assign_lab/{lab_id}/{id}")
    @PreAuthorize("appointmentService.getById(#id).getUser2().getUsername() == authentication.principal.username")
    public void assignLab(@PathVariable("lab_id") Long lab_id,@PathVariable("id") Long id){
        appointmentService.assignLab(lab_id , id);
    }
    @PostMapping("update_doctor_status/{id}")
    public void updateDoctorStatus(@PathVariable("id") Long id){
        appointmentService.updateDoctorStatus(id);
    }
    @PostMapping("update_lab_status/{id}")
    public void updateLabStatus(@PathVariable("id") Long id){
        appointmentService.updateLabStatus(id);
    }
    @PostMapping("add_prescription/{id}")
    public void addPrescription(@PathVariable("id") Long id,@RequestBody String pres){
        appointmentService.addPrescription(id,pres);
    }

    @PostMapping("add_lab_prescription/{id}")
    public void addLabPrescription(@PathVariable("id") Long id,@RequestBody String pres){
        appointmentService.addLabPrescription(id,pres);
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