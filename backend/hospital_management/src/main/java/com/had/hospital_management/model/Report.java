package com.had.hospital_management.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.userdetails.User;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Report {
    @Id
    @GeneratedValue
    private Long id;
    @Convert(converter = StringCryptoConverter.class)
    private String name;
    @Convert(converter = StringCryptoConverter.class)
    private String photo_path;
    @Convert(converter = StringCryptoConverter.class)
    private String comments;

    @ManyToOne()
    @JoinColumn(        
            name = "lead_doctor_id",
            referencedColumnName = "id"
    )
    private UserEntity user1;

    @ManyToOne()
    @JoinColumn(
            name = "patient_id",
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
