package com.had.hospital_management.repository;
import com.had.hospital_management.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment,Long>{
    @Query(
            nativeQuery = true,
            value  = "select * from appointment where doctor_id = :doc_id and doctor_done=false"
    )
    List<Appointment> findAppointmentByDoctorId(@Param("doc_id") Long doc_id);
    @Query(
            nativeQuery = true,
            value  = "select * from appointment where patient_id = :pat_id"
    )
    List<Appointment> findAppointmentByPatientId(@Param("pat_id") Long pat_id);
    @Query(
            nativeQuery = true,
            value  = "select * from appointment where lab_id = :lab_id and lab_done=false"
    )
    List<Appointment> findAppointmentByLabId(@Param("lab_id") Long lab_id);

    @Modifying
    @Query(
            nativeQuery = true,
            value = "update appointment set lab_id = :lab_id where id = :id"
    )
    void assignLab(@Param("lab_id") Long lab_id,@Param("id") Long id);
    @Modifying
    @Query(
            nativeQuery = true,
            value = "update appointment set doctor_done = true where id = :id"
    )
    void updateDoctorStatus(@Param("id") Long id);
    @Modifying
    @Query(
            nativeQuery = true,
            value = "update appointment set lab_done = true where id = :id"
    )
    void updateLabStatus(@Param("id") Long id);
    @Modifying
    @Query(
            nativeQuery = true,
            value = "update appointment set prescription = :pres where id = :id"
    )
    void addPrescription(@Param("id") Long id,@Param("pres") String pres);
    @Modifying
    @Query(
            nativeQuery = true,
            value = "update appointment set lab_prescription = :lab_pres where id = :id"
    )
    void addLabPrescription(@Param("id") Long id,@Param("pres") String lab_pres);
}