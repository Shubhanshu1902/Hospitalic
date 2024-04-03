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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long lab_id;
    private Long radiologist_id;
    private String photo_path;
    private String comments;

    @OneToOne
    @JoinColumn(name = "chat_id", referencedColumnName = "id")
    private Chat chat;

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
}
