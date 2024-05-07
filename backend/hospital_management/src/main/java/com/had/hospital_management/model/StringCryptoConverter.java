package com.had.hospital_management.model;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import org.jasypt.encryption.pbe.StandardPBEStringEncryptor;
import org.springframework.core.env.Environment;

@Converter
public class StringCryptoConverter implements AttributeConverter<String, String> {
    private static final String ENCRYPTION_PASSWORD_PROPERTY = "jasypt.encryptor.password";
    private final StandardPBEStringEncryptor encryptor;
    public StringCryptoConverter(Environment environment) {
        // Initialize the encryptor with the encryption password from the environment
        this.encryptor = new StandardPBEStringEncryptor();
        this.encryptor.setPassword(environment.getProperty(ENCRYPTION_PASSWORD_PROPERTY));
    }
    @Override
    public String convertToDatabaseColumn(String attribute) {
        return encryptor.encrypt(attribute);
    }
    @Override
    public String convertToEntityAttribute(String dbData) {
        return encryptor.decrypt(dbData);
    }
}
