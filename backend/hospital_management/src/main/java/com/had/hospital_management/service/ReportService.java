package com.had.hospital_management.service;

import com.had.hospital_management.model.Report;
import com.had.hospital_management.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReportService {
    @Autowired
    private ReportRepository reportRepository;

    public Report saveReport(Report report){return reportRepository.save(report);}
}
