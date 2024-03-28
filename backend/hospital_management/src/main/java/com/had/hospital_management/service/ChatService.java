package com.had.hospital_management.service;

import com.had.hospital_management.model.Chat;
import com.had.hospital_management.repository.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatService {
    @Autowired
    private ChatRepository chatRepository;

    public Chat save(Chat chat) { return chatRepository.save(chat);}

    public List<Chat> findAll() { return chatRepository.findAll();}

    public List<Chat> findByReportIdSortByTime(Long reportId) {return chatRepository.findByReportIdOrderByTime(reportId);}
}
