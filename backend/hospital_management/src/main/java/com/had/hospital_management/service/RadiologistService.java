package com.had.hospital_management.service;

import com.had.hospital_management.model.Doctor;
import com.had.hospital_management.model.Radiologist;
import com.had.hospital_management.repository.RadiologistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class RadiologistService {
    @Autowired
    private static RadiologistRepository radiologistRepository;

    public Radiologist save(Radiologist radiologist)
    {
        return radiologistRepository.save(radiologist);
    }

    public static List<Radiologist> findAll()
    {
        return radiologistRepository.findAll();
    }

    public Radiologist getById(Long Id)
    {
        return  radiologistRepository.findById(Id).orElse(null);
    }

    @Transactional
    public void deleteById(Long id) {
        Radiologist radiologist = radiologistRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Radiologist with id " + id + " not found"));
        radiologistRepository.delete(radiologist);
    }
}
