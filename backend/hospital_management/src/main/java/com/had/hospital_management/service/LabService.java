package com.had.hospital_management.service;

import com.had.hospital_management.model.Lab;
import com.had.hospital_management.repository.LabRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LabService {
    @Autowired
    private LabRepository labRepository;
    public Lab saveLab(Lab lab){
        return labRepository.save(lab);
    }
    public List<Lab>findAllLab(){
        return labRepository.findAll();
    }
    public Lab getById(Long id){
        return labRepository.findById(id).orElse(null);
    }
}
