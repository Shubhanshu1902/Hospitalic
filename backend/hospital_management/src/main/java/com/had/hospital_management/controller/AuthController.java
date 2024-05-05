package com.had.hospital_management.controller;

import com.had.hospital_management.dto.AuthResponseDTO;
import com.had.hospital_management.dto.LoginDto;
import com.had.hospital_management.dto.RegisterDto;
import com.had.hospital_management.model.Role;
import com.had.hospital_management.model.Token;
import com.had.hospital_management.model.UserEntity;
import com.had.hospital_management.repository.RoleRepository;
import com.had.hospital_management.repository.TokenRepository;
import com.had.hospital_management.repository.UserRepository;
import com.had.hospital_management.security.JWTGenerator;
import com.had.hospital_management.service.TokenService;
import com.had.hospital_management.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private AuthenticationManager authenticationManager;
    private UserRepository userRepository;
    private TokenRepository tokenRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    private JWTGenerator jwtGenerator;

    @Autowired
    public AuthController(AuthenticationManager authenticationManager, UserRepository userRepository,
                          RoleRepository roleRepository, PasswordEncoder passwordEncoder, JWTGenerator jwtGenerator, TokenRepository tokenRepository) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtGenerator = jwtGenerator;
        this.tokenRepository = tokenRepository;
    }

    @Autowired
    private TokenService tokenService ;

    private void saveToken(String token){
        Token newToken = new Token();
        newToken.setValue(token);
        newToken.setStatus(true);

        System.out.println(tokenRepository.save(newToken));
    }

    @PostMapping("login")
    public ResponseEntity<AuthResponseDTO> login(@RequestBody LoginDto loginDto){
        System.out.println("reached login");
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginDto.getUsername(),
                        loginDto.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtGenerator.generateToken(authentication);

        saveToken(token);

        return new ResponseEntity<>(new AuthResponseDTO(token), HttpStatus.OK);
    }

    @GetMapping("logout")
    public String logout(@RequestBody String tokenval){
        System.out.println("logout reached"+ tokenval);
        tokenService.logout(tokenval);
        return "logout successfully";
    }

    @PostMapping("register")
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto){
        System.out.println(registerDto);
        if(userRepository.existsByUsername(registerDto.getUsername())) {
            return new ResponseEntity<>("Username is taken!", HttpStatus.BAD_REQUEST);
        }

        UserEntity user = new UserEntity();
        user.setUsername(registerDto.getUsername());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));

        user.setRole(registerDto.getRole());

        userRepository.save(user);
        return new ResponseEntity<>("User Registered Success!", HttpStatus.OK);
    }
}
