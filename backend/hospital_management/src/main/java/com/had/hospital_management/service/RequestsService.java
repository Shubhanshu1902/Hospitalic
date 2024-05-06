package com.had.hospital_management.service;

import com.had.hospital_management.model.Report;
import com.had.hospital_management.model.Requests;
import com.had.hospital_management.repository.ReportRepository;
import com.had.hospital_management.repository.RequestsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class RequestsService {
    @Autowired
    private RequestsRepository requestsRepository;

    @Autowired
    private ReportRepository reportRepository;

    // Doc
    public Requests save(Requests Requests)
    {
        return requestsRepository.save(Requests);
    }

    // None
    public List<Requests> findAll()
    {
        return requestsRepository.findAll();
    }

    // None
    public Requests getById(Long Id)
    {
        return  requestsRepository.findById(Id).orElse(null);
    }

    // Doctor and Patient
    public List<Requests> getAcceptedRequestByReportId(Long id){
        return requestsRepository.findAcceptedRequestsByReportId(id);
    }
    public List<Requests> getNotAcceptedRequestByPatientId(Long id){
        return requestsRepository.findNotAcceptedRequestsByPatientId(id);
    }

    // Rad
    public List<Long> getReportIdByRadiologistId(Long id){
        return requestsRepository.getReportIdByRadiologistId(id);
    }
    public List<Long> getPatientIdByRadiologistId(Long id){
        return requestsRepository.getPatientIdByRadiologistId(id);
    }

    public List<Report> getReportByRadiologistAndPatient(Long rad_id, Long pat_id) {
        List<Report> ls = new ArrayList<Report>();
        List<Long> l = requestsRepository.getReportByRadiologistAndPatient(rad_id, pat_id);
        for(int i = 0; i < l.size(); i++) {
            Report r = reportRepository.findById(l.get(i)).orElse(null);
            ls.add(r);
        }
        return ls;
    }

    // pat
    @Transactional
    public void approveRequestById(Long id){
        requestsRepository.approveRequestById(id);
    }

    // rad
    @Transactional
    public void addComment(Long rep_id, Long rad_id, String new_com){
        requestsRepository.addComment(rep_id,rad_id,new_com);}
    
    // none
    @Transactional
    public void deleteById(Long id) {
        Requests Requests = requestsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Requests with id " + id + " not found"));
        requestsRepository.delete(Requests);
    }
}
