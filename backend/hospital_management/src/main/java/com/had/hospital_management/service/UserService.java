package com.had.hospital_management.service;

import com.had.hospital_management.model.Appointment;
import com.had.hospital_management.model.Report;
import com.had.hospital_management.model.Requests;
import com.had.hospital_management.model.UserEntity;
import com.had.hospital_management.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ReportService reportService;
    @Autowired
    private AppointmentService appointmentService;
    @Autowired
    private RequestsService requestsService;
    @Autowired
    private UtilService userService;


    public UserEntity save(UserEntity user) {
        return userRepository.save(user);
    }
    public List<UserEntity> findAll(){
        return userRepository.findAll();
    }

    public UserEntity findById(Long Id){
        return userRepository.findById(Id).orElse(null);
    }
    public List<UserEntity> getAllDoctor(){return userRepository.getAllDoctor();}
    public List<UserEntity> getAllRadiologist(){return userRepository.getAllRadiologist();}
    public List<UserEntity> getAllLab(){return userRepository.getAllLab();}
    public UserEntity getUserByUsername(String username){ return userRepository.getUserByUsername(username);}
    @Transactional
    public void deleteById(Long id) {
        
        UserEntity userEntity = userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Patient with id " + id + " not found"));
        userRepository.delete(userEntity);
    }
    public Long getUserIdByUsername(String username) { return userRepository.getUserIdByUsername(username);}

    public boolean hasAuthorityUsingUserId(String username, Long id)
    {
        String s1 = findById(id).getUsername();
        return  s1.equals(username);
    }
    public boolean hasReportCommentAuthority(String username,Long id)
    {
       String s1 =  reportService.getById(id).getUser1().getUsername();
       return s1.equals(username);
    }
    public boolean hasAuthorityUsingAppIdLab(String username, Long Id)
    {
        String s = findById(appointmentService.getById(Id).getLab().getId()).getUsername();
//        System.out.println(s + ' ' + username);
        return  s.equals(username);
    }
    public boolean hasAuthorityUsingAppIdDoc(String username, Long Id)
    {
        String s = findById(appointmentService.getById(Id).getUser2().getId()).getUsername();
        return  s.equals(username);
    }
    public boolean hasReportAuthority(String username,Long report_id){
        List<Requests> rq= requestsService.getAcceptedRequestByReportId(report_id);
        for(int i=0;i<rq.size();i++){
            String s1 = rq.get(i).getUser1().getUsername();
            if(s1.equals(username)){
                return true;
            }
        }
        Report r = reportService.getById(report_id);
        System.out.println(r);
        System.out.println(username);
        if(r.getUser1().getUsername().equals(username) || r.getUser2().getUsername().equals(username) || r.getLab().getUsername().equals(username)) return true;
        return false;
    }
    public boolean hasApproveReqAuthority(String username,Long req_id){
        System.out.println(username);
        Long pid = requestsService.getById(req_id).getPatient_id();
        System.out.println(pid);
        return findById(pid).getUsername().equals(username);
    }
}
