package com.had.hospital_management.service;

import com.had.hospital_management.model.Requests;
import com.had.hospital_management.repository.RequestsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class RequestsService {
    @Autowired
    private RequestsRepository requestsRepository;

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
    public List<Requests> getRequestByReportId(Long id){
        return requestsRepository.findRequestsByReportId(id);
    }

    // Rad
    public List<Long> getReportIdByRadiologistId(Long id){
        return requestsRepository.getReportIdByRadiologistId(id);
    }

    // pat
    @Transactional
    public void approveRequestById(Long id){
        requestsRepository.approveRequestById(id);
    }

    // rad
    @Transactional
    public void addComment(Long id,String new_com){requestsRepository.addComment(id,new_com);}
    
    // none
    @Transactional
    public void deleteById(Long id) {
        Requests Requests = requestsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Requests with id " + id + " not found"));
        requestsRepository.delete(Requests);
    }
}
