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

    public Requests save(Requests Requests)
    {
        return requestsRepository.save(Requests);
    }

    public List<Requests> findAll()
    {
        return requestsRepository.findAll();
    }

    public Requests getById(Long Id)
    {
        return  requestsRepository.findById(Id).orElse(null);
    }

    public List<Requests> getRequestByReportId(Long id){
        return requestsRepository.findRequestsByReportId(id);
    }
    public List<Long> getReportIdByRadiologistId(Long id){
        return requestsRepository.getReportIdByRadiologistId(id);
    }


    @Transactional
    public void approveRequestById(Long id){
        requestsRepository.approveRequestById(id);
    }
    @Transactional
    public void addComment(Long id,String new_com){requestsRepository.addComment(id,new_com);}
    @Transactional
    public void deleteById(Long id) {
        Requests Requests = requestsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Requests with id " + id + " not found"));
        requestsRepository.delete(Requests);
    }
}
