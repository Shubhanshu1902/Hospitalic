package com.had.hospital_management.controller;

import com.had.hospital_management.model.Lab;
import com.had.hospital_management.service.LabService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lab")
public class LabController {
    @Autowired
    private LabService labService;

    @PostMapping("/save")
    public Lab save(@RequestBody Lab lab) {
        return labService.save(lab);
    }

    @GetMapping("find_all")
    public List<Lab> findAll(){
        return labService.findAll();
    }
    @GetMapping("get_by_id/{id}")
    public ResponseEntity<Lab> getById(@PathVariable("id") Long id){
        Lab lab= labService.getById(id);
        if(lab!=null){
            return ResponseEntity.ok(lab);
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("delete_by_id/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id) {
        try {
            labService.deleteById(id);
            return new ResponseEntity<>("Doctor deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete doctor", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
