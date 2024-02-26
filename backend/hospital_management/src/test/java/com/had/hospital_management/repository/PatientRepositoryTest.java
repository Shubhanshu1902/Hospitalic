package com.had.hospital_management.repository;

import com.had.hospital_management.model.Patient;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PatientRepositoryTest {
    @Autowired
    private PatientRepository patientRepository;

    @Test
    public void savePatient() {
        Patient patient = Patient.builder()
                .First_Name("arin")
                .Last_Name("awasthi")
                .build();

        patientRepository.save(patient); 
    }
}