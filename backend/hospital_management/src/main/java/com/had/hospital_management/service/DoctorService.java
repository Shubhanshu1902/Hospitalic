package com.had.hospital_management.service;

import com.had.hospital_management.model.Doctor;
import com.had.hospital_management.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DoctorService {
    @Autowired
    private DoctorRepository doctorRepository;

    public Doctor save(Doctor doctor)
    {
        return doctorRepository.save(doctor);
    }

    public List<Doctor> findAll()
    {
        return doctorRepository.findAll();
    }

    public Doctor getById(Long Id)
    {
        return  doctorRepository.findById(Id).orElse(null);
    }

    @Transactional
    public void deleteById(Long id) {
        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Doctor with id " + id + " not found"));
        doctorRepository.delete(doctor);
    }
}
