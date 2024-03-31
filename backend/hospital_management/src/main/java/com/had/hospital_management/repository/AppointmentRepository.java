package com.had.hospital_management.repository;
import com.had.hospital_management.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment,Long>{
    @Query(
            nativeQuery = true,
            value  = "select * from Appointment where doctor_id = :doc_id"
    )
    List<Appointment> findAppointmentByDoctorId(@Param("doc_id") Long doc_id);
    @Query(
            nativeQuery = true,
            value  = "select * from Appointment where patient_id = :pat_id"
    )
    List<Appointment> findAppointmentByPatientId(@Param("pat_id") Long pat_id);
}