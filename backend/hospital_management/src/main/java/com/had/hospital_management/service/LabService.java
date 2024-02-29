package com.had.hospital_management.service;

import com.had.hospital_management.model.Lab;
import com.had.hospital_management.repository.LabRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LabService {
    @Autowired
    private LabRepository labRepository;
    public Lab save(Lab lab){
        return labRepository.save(lab);
    }
    public List<Lab>findAll(){
        return labRepository.findAll();
    }
    public Lab getById(Long id){
        return labRepository.findById(id).orElse(null);
    }
    @Transactional
    public void deleteById(Long id) {
        Lab lab = labRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Doctor with id " + id + " not found"));
        labRepository.delete(lab);
    }

}
