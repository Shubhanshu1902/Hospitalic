package com.had.hospital_management.repository;

import com.had.hospital_management.model.Report;
import com.had.hospital_management.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReportRepository extends JpaRepository<Report, Long> {
    @Query(nativeQuery = true, value = "select * from report where patient_id = :patient_id")
    List<Report> getReportByPateintId(@Param("patient_id") Long patient_id);

    @Query(nativeQuery = true, value = "select * from report where lead_doctor_id = :doctor_id")
    List<Report> getReportByDoctorId(@Param("doctor_id") Long doctor_id);

    @Query(nativeQuery = true, value = "select * from report where lab_id = :lab_id")
    List<Report> getReportByLabId(@Param("lab_id") Long lab_id);

    @Query(nativeQuery = true, value = "select * from report where lead_doctor_id = :doc_id and patient_id = :pat_id")
    List<Report> getReportByDoctorAndPatientId(@Param("doc_id") Long doc_id, @Param("pat_id") Long pat_id);

    @Query(nativeQuery = true, value = "select distinct patient_id from report where lead_doctor_id = :doc_id")
    List<Long> getPatientByDoctorId(@Param("doc_id") Long doc_id);

    @Query(nativeQuery = true, value = "select distinct patient_id from report where lab_id = :lab_id")
    List<Long> getPatientByLabId(@Param("lab_id") Long lab_id);

    @Query(nativeQuery = true, value = "select * from report where lab_id = :lab_id and patient_id = :pat_id")
    List<Report> getReportByLabAndPatientId(@Param("lab_id") Long lab_id, @Param("pat_id") Long pat_id);

    @Query(nativeQuery = true, value = "select distinct lead_doctor_id from report where patient_id = :pat_id")
    List<Long> getDoctorByPatientId(@Param("pat_id") Long pat_id);

    @Modifying
    @Query(nativeQuery = true, value = "update report set comments= CONCAT(comments,:new_com) where id = :rep_id")
    void addComment(@Param("rep_id") Long rep_id, @Param("new_com") String new_com);
}
