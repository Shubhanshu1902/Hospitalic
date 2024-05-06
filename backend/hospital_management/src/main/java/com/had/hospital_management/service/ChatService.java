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
    @Autowired
    private UserService userService;
    public Chat save(Chat chat) { return chatRepository.save(chat);}

    public List<Chat> findAll() { return chatRepository.findAll();}

    public List<Chat> findByReportIdSortByTime(Long reportId) {return chatRepository.findByReportIdOrderByTime(reportId);}

    public boolean hasChatAuthority(String username,Long id, Long reportid)
    {
        if(userService.hasReportAuthority(username, reportid))
        {
            String s1 = userService.findById(id).getUsername();
            return  s1.equals(username);
        }
        return false;
    }
}
