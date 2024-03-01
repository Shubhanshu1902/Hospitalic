package com.had.hospital_management.controller;

import com.had.hospital_management.model.Radiologist;
import com.had.hospital_management.service.RadiologistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/radiologist")
public class RadiologistController {
    @Autowired
    private RadiologistService radiologistService;
    @PostMapping("/save")
    public Radiologist save(@RequestBody Radiologist radiologist){
        return radiologistService.save(radiologist);
    }

    @GetMapping("/find_all")
    public List<Radiologist> findAll()
    {
        return RadiologistService.findAll();
    }

    @GetMapping("/get_by_id/{id}")
    public ResponseEntity<Radiologist> getById(@PathVariable("id") Long id)
    {
        Radiologist radiologist = radiologistService.getById(id);
        if (radiologist != null) {
            return ResponseEntity.ok(radiologist);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/delete_by_id/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id) {
        try {
            radiologistService.deleteById(id);
            return new ResponseEntity<>("Radiologist deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete radiologist", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
