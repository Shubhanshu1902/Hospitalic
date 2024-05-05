package com.had.hospital_management.security;

import com.had.hospital_management.model.UserEntity;
import com.had.hospital_management.repository.TokenRepository;
import com.had.hospital_management.repository.UserRepository;
import com.had.hospital_management.service.TokenService;
import com.had.hospital_management.service.UserService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;


@Component
public class JWTGenerator {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TokenService tokenService;
    private static final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS512);

    public String generateToken(Authentication authentication) {
        String username = authentication.getName();
        Date currentDate = new Date();
        Date expireDate = new Date(currentDate.getTime() + SecurityConstants.JWT_EXPIRATION);

        Collection<? extends GrantedAuthority> roles = authentication.getAuthorities();
        List<String> roleNames = roles.stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        System.out.println(roleNames);
        UserEntity newuser = userRepository.getUserByUsername(username);
        Long userid = newuser.getId();
        String token = Jwts.builder()
                .setSubject(username)
                .claim("roles",roleNames)
                .claim("userId", userid)
                .setIssuedAt( new Date())
                .setExpiration(expireDate)
                .signWith(key,SignatureAlgorithm.HS512)
                .compact();
        System.out.println("New token :");
        System.out.println(token);
        return token;
    }
    public String getUsernameFromJWT(String token){
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token);

            Boolean isvalid = tokenService.isValid(token);
            System.out.println("validity"+isvalid);

            if(!isvalid) {
                throw new AuthenticationCredentialsNotFoundException("JWT is not valid");
            }
            return true;
        } catch (Exception ex) {
            throw new AuthenticationCredentialsNotFoundException("JWT was exprired or incorrect",ex.fillInStackTrace());
        }
    }

}
