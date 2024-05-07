package com.had.hospital_management.controller;

import com.had.hospital_management.model.Chat;
import com.had.hospital_management.service.ChatService;
import com.had.hospital_management.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chat")
public class ChatController {
    @Autowired
    private ChatService chatService;
    @Autowired
    private UserService userService;

    @PostMapping("/save")
    @PreAuthorize("(@chatService.hasChatAuthority(authentication.principal.username, #chat.sender_id, #chat.reportId))")
    public Chat save(@RequestBody Chat chat) {
        return chatService.save(chat);
    }

    @GetMapping("/find_all")
    public List<Chat> findAll() { return chatService.findAll();}

    @GetMapping("/find_filter/{id}")
    @PreAuthorize("(@userService.hasReportAuthority(authentication.principal.username, #reportId))")
    public List<Chat> findByReportIdSortByTime(@PathVariable("id") Long reportId)
    {
        return chatService.findByReportIdSortByTime(reportId);
    }

    @GetMapping("/hello")
    public String helloWorld() {
        System.out.println("hello reached");
        return "Hello world";
    }
}
