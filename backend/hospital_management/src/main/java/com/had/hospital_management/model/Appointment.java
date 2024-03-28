package com.had.hospital_management.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Appointment {
    @jakarta.persistence.Id
    private Long id;
    private Date date;

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
}
