package com.had.hospital_management.repository;

import com.had.hospital_management.model.Appointment;
import com.had.hospital_management.model.Report;
import com.had.hospital_management.model.Requests;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RequestsRepository extends JpaRepository<Requests, Long> {
    @Query(nativeQuery = true, value = "select * from requests where report_id = :report_id and status=1")
    List<Requests> findAcceptedRequestsByReportId(@Param("report_id") Long report_id);

    @Query(nativeQuery = true, value = "select * from requests where patient_id = :pat_id and status is null")
    List<Requests> findNotAcceptedRequestsByPatientId(@Param("pat_id") Long pat_id);

    @Modifying
    @Query(nativeQuery = true, value = "update requests set status = 1 where id = :request_id")
    void approveRequestById(@Param("request_id") Long request_id);

    @Query(nativeQuery = true, value = "select report_id from requests where radiologist_id = :radiologist_id and status =1")
    List<Long> getReportIdByRadiologistId(@Param("radiologist_id") Long radiologist_id);

    @Query(nativeQuery = true, value = "select patient_id from requests where radiologist_id = :radiologist_id and status =1")
    List<Long> getPatientIdByRadiologistId(@Param("radiologist_id") Long radiologist_id);

    @Modifying
    @Query(nativeQuery = true, value = "update requests set comments= CONCAT(comments,:new_com) where radiologist_id = :rad_id and report_id=:rep_id and status=1")
    void addComment(@Param("rep_id") Long rep_id,@Param("rad_id") Long rad_id, @Param("new_com") String new_com);

    @Query(nativeQuery = true, value = "select report_id from requests where radiologist_id = :radiologist_id and patient_id = :patient_id and status =1")
    List<Long> getReportByRadiologistAndPatient(@Param("radiologist_id") Long radiologist_id,
            @Param("patient_id") Long patient_id);

}
