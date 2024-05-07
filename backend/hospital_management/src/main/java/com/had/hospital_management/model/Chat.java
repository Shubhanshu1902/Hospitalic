package com.had.hospital_management.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Chat {
    @Id
    @GeneratedValue
    private Long id;
    private Long reportId;
    private Long sender_id;
    @Convert(converter = StringCryptoConverter.class)
    private String msg;
    private LocalDateTime time;
}