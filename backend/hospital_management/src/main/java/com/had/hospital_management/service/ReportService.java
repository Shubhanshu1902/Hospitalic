package com.had.hospital_management.service;

import com.had.hospital_management.model.Report;
import com.had.hospital_management.model.Requests;
import com.had.hospital_management.model.UserEntity;
import com.had.hospital_management.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
public class ReportService {
    @Autowired
    private ReportRepository reportRepository;

    // Lab
    public Report save(Report Requests)
    {
        return reportRepository.save(Requests);
    }

    // None
    public List<Report> findAll()
    {
        return reportRepository.findAll();
    }

    // None
    public Report getById(Long Id)
    {
        return  reportRepository.findById(Id).orElse(null);
    }

    // Pat
    public List<Report> getReportByPateintId(Long id){
        return reportRepository.getReportByPateintId(id);
    }

    // Doc
    public List<Report> getReportByDoctorId(Long id){
        return reportRepository.getReportByDoctorId(id);
    }

    // Lab
    public List<Report> getReportByLabId(Long id){
        return reportRepository.getReportByLabId(id);
    }

    // Doctor
    public List<Long> getPatientByDoctorId(Long id){return reportRepository.getPatientByDoctorId(id);}
    
    // Patient
    public List<Long> getDoctorByPatientId(Long id){return reportRepository.getDoctorByPatientId(id);}
    public List<Long> getPatientByLabId(Long id){return reportRepository.getPatientByLabId(id);}
    
    // Doc and Pat
    public List<Report> getReportByDoctorAndPatientId(Long doc_id,Long pat_id){
        return reportRepository.getReportByDoctorAndPatientId(doc_id,pat_id);
    }
    public List<Report> getReportByLabAndPatientId(Long lab_id,Long pat_id){
        return reportRepository.getReportByLabAndPatientId(lab_id,pat_id);
    }
    // None
    @Transactional
    public void deleteById(Long id) {
        Report reports = reportRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Report with id " + id + " not found"));
        reportRepository.delete(reports);
    }

    @Transactional
    public void addComment(Long id,String new_com){
        reportRepository.addComment(id,new_com);}

}
