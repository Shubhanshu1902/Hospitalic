package com.had.hospital_management.controller;

import com.had.hospital_management.model.Lab;
import com.had.hospital_management.service.LabService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lab")
public class LabController {
    @Autowired
    private LabService labService;

    @PostMapping("/save")
    public Lab saveLab(@RequestBody Lab lab) {
        return labService.saveLab(lab);
    }

    @GetMapping("find_all")
    public List<Lab> findAllLab(){
        return labService.findAllLab();
    }
    @GetMapping("get_by_id/{id}")
    public Lab getById(@PathVariable("id") Long id){
        return labService.getById(id);
    }

}
