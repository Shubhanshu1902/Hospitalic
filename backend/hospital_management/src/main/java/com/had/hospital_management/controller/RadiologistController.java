package com.had.hospital_management.controller;

import com.had.hospital_management.model.Radiologist;
import com.had.hospital_management.service.RadiologistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/radiologist")
public class RadiologistController {
    @Autowired
    private RadiologistService radiologistService;
    @PostMapping("/save")
    public Radiologist saveRadiologist(@RequestBody Radiologist radiologist){
        return radiologistService.saveRadiologist(radiologist);
    }

    @GetMapping("/find_all")
    public List<Radiologist> findAllRadiologists()
    {
        return RadiologistService.findAllRadiologists();
    }

    @GetMapping("/get_by_{id}")
    public ResponseEntity<Radiologist> getById(@PathVariable("id") Long id)
    {
        Radiologist radiologist = radiologistService.findRadiologistById(id);
        if (radiologist != null) {
            return ResponseEntity.ok(radiologist);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
