package com.had.hospital_management.service;

import com.had.hospital_management.model.Patient;
import com.had.hospital_management.repository.PatientRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    public Patient save(Patient patient) {
        System.out.println("savepatient reached");
        System.out.println(patient);
        return patientRepository.save(patient);
    }
    public List<Patient> findAll(){
        return patientRepository.findAll();
    }

    public Patient findById(Long Id){
        return patientRepository.findById(Id).orElse(null);
    }

    @Transactional
    public void deleteById(Long id) {
        Patient patient = patientRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Patient with id " + id + " not found"));
    }
}
