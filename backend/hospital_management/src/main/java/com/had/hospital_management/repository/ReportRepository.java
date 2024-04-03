package com.had.hospital_management.repository;
import com.had.hospital_management.model.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReportRepository extends JpaRepository<Report,Long>{
    @Query(
            nativeQuery = true,
            value = "select * from report where patient_id = :patient_id"
    )
    List<Report> getReportByPateintId(@Param("patient_id") Long patient_id);
    @Query(
            nativeQuery = true,
            value = "select * from report where lead_doctor_id = :doctor_id"
    )
    List<Report> getReportByDoctorId(@Param("doctor_id") Long doctor_id);
}
