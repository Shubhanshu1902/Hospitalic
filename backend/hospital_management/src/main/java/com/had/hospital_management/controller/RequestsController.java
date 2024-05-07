package com.had.hospital_management.controller;

import com.had.hospital_management.model.Report;
import com.had.hospital_management.model.Requests;
import com.had.hospital_management.service.RequestsService;
import com.had.hospital_management.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/requests")
public class RequestsController {
    @Autowired
    private RequestsService requestsService;
    @Autowired
    private UserService userService;

    @PostMapping("/save")
    @PreAuthorize("@userService.hasReportCommentAuthority(authentication.principal.username,#requests.report.id)")
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
    @PreAuthorize("@userService.hasAuthorityUsingUserId(authentication.principal.username,#id)")
    public List<Long> getReportIdByRadiologistId(@PathVariable("id") Long id){
        return requestsService.getReportIdByRadiologistId(id);
    }
    @GetMapping("/get_patient_id_by_radiologist_id/{id}")
    @PreAuthorize("@userService.hasAuthorityUsingUserId(authentication.principal.username,#id)")
    public List<Long> getPatientIdByRadiologistId(@PathVariable("id") Long id){
        return requestsService.getPatientIdByRadiologistId(id);
    }

    // Doctor - Report Id
    // Patient
    // Radiologist who have access (reportId, status)
    @GetMapping("/get_accepted_request_by_report_id/{id}")
    @PreAuthorize("@userService.hasReportAuthority(authentication.principal.username,#id)")
    public List<Requests> getAcceptedequestByReportId(@PathVariable("id") Long id){
        return requestsService.getAcceptedRequestByReportId(id);
    }

    @GetMapping("/get_not_accepted_request_by_patient_id/{id}")
    @PreAuthorize("@userService.hasAuthorityUsingUserId(authentication.principal.username,#id)")
    public List<Requests> getNotAcceptedequestByPatientId(@PathVariable("id") Long id){
        return requestsService.getNotAcceptedRequestByPatientId(id);
    }

    @GetMapping("/get_report_by_radiologist_and_patient/{rad_id}/{pat_id}")
    @PreAuthorize("@userService.hasAuthorityUsingUserId(authentication.principal.username,#rad_id) or @userService.hasAuthorityUsingUserId(authentication.principal.username,#pat_id)")
    public List<Report> getReportByRadiologistAndPatient(@PathVariable("rad_id") Long rad_id,@PathVariable("pat_id") Long pat_id) {
        return requestsService.getReportByRadiologistAndPatient(rad_id, pat_id);
    }

    @PostMapping("/approve_request_by_id/{id}")
    @PreAuthorize("@userService.hasApproveReqAuthority(authentication.principal.username,#id)")
    public void approveRequestById(@PathVariable("id")Long id){
        requestsService.approveRequestById(id);
    }
    
    @PostMapping("/add_comment/{rep_id}/{rad_id}")
    @PreAuthorize("@userService.hasAuthorityUsingUserId(authentication.principal.username,#rad_id)")
    public void addComment(@PathVariable("rep_id")Long rep_id,@PathVariable("rad_id")Long rad_id,@RequestBody String new_com){
        requestsService.addComment(rep_id,rad_id,new_com);}

    // Delete when status 0
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
