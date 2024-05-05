package com.had.hospital_management.controller;

import com.had.hospital_management.model.Report;
import com.had.hospital_management.model.Requests;
import com.had.hospital_management.service.RequestsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/requests")
public class RequestsController {
    @Autowired
    private RequestsService requestsService;
    @PostMapping("/save")
    public Requests save(@RequestBody Requests requests){
        return requestsService.save(requests);
    }

    @GetMapping("/find_all")
    public List<Requests> findAll()
    {
        return requestsService.findAll();
    }

    @GetMapping("/get_by_id/{id}")
    public ResponseEntity<Requests> getById(@PathVariable("id") Long id)
    {
        Requests Requests = requestsService.getById(id);
        if (Requests != null) {
            return ResponseEntity.ok(Requests);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/get_report_id_by_radiologist_id/{id}")
    public List<Long> getReportIdByRadiologistId(@PathVariable("id") Long id){
        return requestsService.getReportIdByRadiologistId(id);
    }
    @GetMapping("/get_patient_id_by_radiologist_id/{id}")
    public List<Long> getPatientIdByRadiologistId(@PathVariable("id") Long id){
        return requestsService.getPatientIdByRadiologistId(id);
    }
    @GetMapping("/get_all_by_report_id/{id}")
    public List<Requests> getByReportId(@PathVariable("id") Long id){
        return requestsService.getRequestByReportId(id);
    }

    @GetMapping("/get_report_by_radiologist_and_patient/{rad_id}/{pat_id}")
    public List<Report> getReportByRadiologistAndPatient(@PathVariable("rad_id") Long rad_id,@PathVariable("pat_id") Long pat_id) {
        return requestsService.getReportByRadiologistAndPatient(rad_id, pat_id);
    }

    @PostMapping("/approve_request_by_id/{id}")
    public void approveRequestById(@PathVariable("id")Long id){
        requestsService.approveRequestById(id);
    }
    @PostMapping("/add_comment/{id}")
    public void addComment(@PathVariable("id")Long id,@RequestBody String new_com){
        requestsService.addComment(id,new_com);}

    @DeleteMapping("/delete_by_id/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id) {
        try {
            requestsService.deleteById(id);
            return new ResponseEntity<>("Requests deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete Requests", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
