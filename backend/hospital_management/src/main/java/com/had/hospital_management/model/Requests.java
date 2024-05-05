package com.had.hospital_management.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Requests {
    @jakarta.persistence.Id
    @GeneratedValue
    private Long id;
    private Long status;
    private String comments;
    private Long patient_id;
    @ManyToOne()
    @JoinColumn(
            name = "report_id",
            referencedColumnName = "id"
    )
    private Report report;

    @ManyToOne()
    @JoinColumn(
            name = "radiologist_id",
            referencedColumnName = "id"
    )
    private UserEntity user;
}