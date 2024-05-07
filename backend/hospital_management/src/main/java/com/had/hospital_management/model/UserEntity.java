package com.had.hospital_management.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @Convert(converter = StringCryptoConverter.class)
    // @Column(unique = true)
    private String username; //email
    private String password;
    @Convert(converter = StringCryptoConverter.class)
    private String first_name;
    @Convert(converter = StringCryptoConverter.class)
    private String last_name;
    @Convert(converter = StringCryptoConverter.class)
    private String gender;
    private Date dob;
    @Convert(converter = StringCryptoConverter.class)
    private String address;

    @ManyToOne()
    @JoinColumn(
            name = "role_id",
            referencedColumnName = "id"
    )
    private Role role;

    public UserEntity(String username,String password, String first_name, String last_name,String gender,Date dob,String address,Role role) {
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.gender = gender;
        this.dob = dob;
        this.address = address;
        this.dob = dob;
        this.role = role;
        
    }
}
