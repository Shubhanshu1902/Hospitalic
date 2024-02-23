package com.had.hospital_management.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Report {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private Long Lead_Doctor_Id;
    private Long Lab_Id;
    private Long Patient_Id;
    private Long Radiologist_Id;
    private String Photo_Path;
    private String Comments;
    private Long Chat_Id;
}
