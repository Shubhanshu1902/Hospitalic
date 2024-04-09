package com.had.hospital_management.controller;

import com.had.hospital_management.model.Role;
import com.had.hospital_management.service.UtilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/utils")
public class UtilController {
    @Autowired
    private UtilService utilService;

    @PostMapping("/save_role")
    public Role save_role(@RequestBody Role role) { return utilService.saverole(role);}
}
