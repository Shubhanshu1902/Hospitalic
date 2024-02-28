package com.had.hospital_management.controller;

import com.had.hospital_management.model.Patient;
import com.had.hospital_management.service.PatientService;
import com.had.hospital_management.service.PatientServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class PatientController {

    @Autowired
    private PatientService patientService;

    @PostMapping("/patients")
    public Patient savePatient(@RequestBody Patient patient) {
        System.out.println(patient);
        System.out.println("reached");
        return patientService.savePatient(patient);
//        return "patientpencho";
    }


    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    public String helloWorld() {
        System.out.println("hello reached");
        return "Hello wordl";
    }


}
