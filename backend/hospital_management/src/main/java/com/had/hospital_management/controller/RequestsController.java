package com.had.hospital_management.controller;

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
