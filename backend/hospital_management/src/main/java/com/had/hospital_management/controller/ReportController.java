package com.had.hospital_management.controller;

import com.had.hospital_management.model.Report;
import com.had.hospital_management.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/report")
public class ReportController {
    @Autowired
    private ReportService reportService;
    @PostMapping("/save")
    public Report save(@RequestBody Report reports){
        return reportService.save(reports);
    }

    @GetMapping("/find_all")
    public List<Report> findAll()
    {
        return reportService.findAll();
    }

    @GetMapping("/get_report_by_patient_id/{id}")
    public List<Report> getReportByPateintId(@PathVariable("id") Long id){
        return reportService.getReportByPateintId(id);
    }
    @GetMapping("/get_report_by_doctor_id/{id}")
    public List<Report> getReportByDoctorId(@PathVariable("id") Long id){
        return reportService.getReportByDoctorId(id);
    }
    @GetMapping("/get_by_id/{id}")
    public ResponseEntity<Report> getById(@PathVariable("id") Long id)
    {
        Report reports = reportService.getById(id);
        if (reports != null) {
            return ResponseEntity.ok(reports);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
