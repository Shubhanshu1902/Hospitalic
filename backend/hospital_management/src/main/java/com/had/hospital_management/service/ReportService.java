package com.had.hospital_management.service;

import com.had.hospital_management.model.Report;
import com.had.hospital_management.model.Requests;
import com.had.hospital_management.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
public class ReportService {
    @Autowired
    private ReportRepository reportRepository;

    public Report save(Report Requests)
    {
        return reportRepository.save(Requests);
    }

    public List<Report> findAll()
    {
        return reportRepository.findAll();
    }

    public Report getById(Long Id)
    {
        return  reportRepository.findById(Id).orElse(null);
    }

    public List<Report> getReportByPateintId(Long id){
        return reportRepository.getReportByPateintId(id);
    }
    public List<Report> getReportByDoctorId(Long id){
        return reportRepository.getReportByDoctorId(id);
    }
    public List<Report> getReportByLabId(Long id){
        return reportRepository.getReportByLabId(id);
    }

    public List<Report> getReportByDoctorAndPatientId(Long doc_id,Long pat_id){
        return reportRepository.getReportByDoctorAndPatientId(doc_id,pat_id);
    }
    @Transactional
    public void deleteById(Long id) {
        Report reports = reportRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Report with id " + id + " not found"));
        reportRepository.delete(reports);
    }

}
