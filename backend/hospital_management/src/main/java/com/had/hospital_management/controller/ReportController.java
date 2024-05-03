package com.had.hospital_management.controller;

import com.had.hospital_management.model.Report;
import com.had.hospital_management.model.UserEntity;
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
        System.out.println("HERE IN REPORT SAVE");
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
    @GetMapping("/get_report_by_lab_id/{id}")
    public List<Report> getReportByLabId(@PathVariable("id") Long id){
        return reportService.getReportByLabId(id);
    }
    @GetMapping("/get_patient_by_doctor_id/{id}")
    public List<Long> getPatientByDoctorId(@PathVariable("id") Long id){
        return reportService.getPatientByDoctorId(id);
    }
    @GetMapping("/get_doctor_by_patient_id/{id}")
    public List<Long> getDoctorByPatientId(@PathVariable("id") Long id){
        return reportService.getDoctorByPatientId(id);
    }
    @GetMapping("/get_patient_by_lab_id/{id}")
    public List<Long> getPatientByLabId(@PathVariable("id") Long id){
        return reportService.getPatientByLabId(id);
    }
    @GetMapping("/get_report_by_doctor_and_patient_id/{doc_id}/{pat_id}")
    public List<Report> getReportByDoctorAndPatientId(@PathVariable("doc_id") Long doc_id,@PathVariable("pat_id") Long pat_id){
        return reportService.getReportByDoctorAndPatientId(doc_id,pat_id);
    }
    @GetMapping("/get_report_by_lab_and_patient_id/{lab_id}/{pat_id}")
    public List<Report> getReportByLabAndPatientId(@PathVariable("lab_id") Long lab_id,@PathVariable("pat_id") Long pat_id){
        return reportService.getReportByLabAndPatientId(lab_id,pat_id);
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
