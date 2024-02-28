package com.had.hospital_management.service;

import com.had.hospital_management.model.Radiologist;
import com.had.hospital_management.repository.RadiologistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RadiologistService {
    @Autowired
    private RadiologistRepository radiologistRepository;

    public Radiologist saveRadiologist(Radiologist radiologist)
    {
        return radiologistRepository.save(radiologist);
    }

    public List<Radiologist> findAllRadiologists()
    {
        return radiologistRepository.findAll();
    }

    public Radiologist findRadiologistById(Long Id)
    {
        return  radiologistRepository.findById(Id).orElse(null);
    }
}
