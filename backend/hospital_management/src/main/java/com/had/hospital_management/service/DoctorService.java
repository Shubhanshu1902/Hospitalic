package com.had.hospital_management.service;

import com.had.hospital_management.model.Doctor;
import com.had.hospital_management.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {
    @Autowired
    private DoctorRepository doctorRepository;

    public Doctor saveDoctor(Doctor doctor)
    {
        return doctorRepository.save(doctor);
    }

    public List<Doctor> findAllDoc()
    {
        return doctorRepository.findAll();
    }

    public Doctor findDoctorById(Long Id)
    {
        return  doctorRepository.findById(Id).orElse(null);
    }
}
