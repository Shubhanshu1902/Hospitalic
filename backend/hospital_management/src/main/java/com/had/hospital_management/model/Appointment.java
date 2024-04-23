package com.had.hospital_management.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.text.spi.DateFormatProvider;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Appointment {
    @jakarta.persistence.Id
    @GeneratedValue
    private Long id;
    private Date date;
    private Boolean doctor_done= false;
    private Boolean lab_done= false;
    private String prescription = "";
    private String lab_prescription = "";
    @ManyToOne()
    @JoinColumn(
            name = "patient_id",
            referencedColumnName = "id"
    )
    private UserEntity user1;

    @ManyToOne()
    @JoinColumn(
            name = "doctor_id",
            referencedColumnName = "id"
    )
    private UserEntity user2;
    @ManyToOne()
    @JoinColumn(
            name = "lab_id",
            referencedColumnName = "id"
    )
    private UserEntity lab;
}
