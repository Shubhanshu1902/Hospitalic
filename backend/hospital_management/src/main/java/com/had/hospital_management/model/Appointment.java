package com.had.hospital_management.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
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
    private Long Id;
    private Long Doctor_Id;
    private Long Patient_Id;
    private Date Date;
}
