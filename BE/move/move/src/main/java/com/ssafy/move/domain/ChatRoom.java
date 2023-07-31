package com.ssafy.move.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "chat_room")
@Data
public class ChatRoom {

    @Id @GeneratedValue
    @Column(name = "room_id")
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "u_id",insertable = false,updatable = false, referencedColumnName = "m_id")
    private Members uId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "p_id",insertable = false,updatable = false, referencedColumnName = "m_id")
    private Members pId;

    @Column(name = "room_last_message")
    private String roomLastMessage;

    @Column(name = "room_last_date")
    private String roomLastDate;


}
