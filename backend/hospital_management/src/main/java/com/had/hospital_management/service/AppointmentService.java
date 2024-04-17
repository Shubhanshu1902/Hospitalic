package com.had.hospital_management.service;

import com.had.hospital_management.model.Appointment;
import com.had.hospital_management.repository.AppointmentRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentRepository appointmentRepository;
    public Appointment save(Appointment appointment){
        return appointmentRepository.save(appointment);
    }
    public List<Appointment>findAll(){
        return appointmentRepository.findAll();
    }
    public Appointment getById(Long id){
        return appointmentRepository.findById(id).orElse(null);
    }
    public List<Appointment>getAppointmentByDoctorId(Long id){
        return appointmentRepository.findAppointmentByDoctorId(id);
    }
    public List<Appointment>getAppointmentByPatientId(Long id){
        return appointmentRepository.findAppointmentByPatientId(id);
    }
    public List<Appointment>getAppointmentByLabId(Long id){
        return appointmentRepository.findAppointmentByLabId(id);
    }
    @Transactional
    public void deleteById(Long id) {
        Appointment appointment = appointmentRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("appointment with id " + id + " not found"));
        appointmentRepository.delete(appointment);
    }


}