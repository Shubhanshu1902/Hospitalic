package com.had.hospital_management.controller;

import com.had.hospital_management.model.Report;
import com.had.hospital_management.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/report")
public class ReportController {
    @Autowired
    private ReportService reportService;

    @PostMapping("/save")
    public Report save(@RequestBody Report report){return reportService.saveReport(report);}
}
