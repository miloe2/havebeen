import axios from "axios";
import { defineStore } from "pinia";
import type { ChatroomsState } from "~/types/dataTypes";


export const useChatStore = defineStore('chat', {
    state: (): { chatrooms: ChatroomsState } => ({
        chatrooms: {
            //chatroom_id : { 
            // cursor : 0
            // messages : [ { }, { }]
            //}
        },
    }),
    actions : {
        async createChatroom (user_id : number, opponent_id : number){
            try {
                const rsp = await axios.post(`/api/chat/join`, {            
                    user_id,
                    opponent_id,
                });
                return rsp.data;
            } catch (error){
                console.log(error)
            }
        },
        async fetchMessages (chatroom_id : number){
            if (this.chatrooms[chatroom_id]?.cursor === -1) {
                return;
            }
            this.initChatroom(chatroom_id);
            try {
                const rsp = await axios.get(`/api/chat/messages`, {
                    params : {
                        chatroom_id : chatroom_id,
                        cursor : this.chatrooms[chatroom_id]?.cursor
                    }
                });
                if(rsp.data){
                    console.log(rsp.data)
                    this.chatrooms[chatroom_id].messages = [...this.chatrooms[chatroom_id].messages, ...rsp.data];
                    
                    if(rsp.data.length < 20){
                        this.chatrooms[chatroom_id].cursor = -1;
                    } else {
                        this.chatrooms[chatroom_id].cursor = rsp.data[rsp.data.length - 1].id;
                    }
                }
            } catch (error) {
                console.log(error)
            }
        },
        initChatroom(chatroom_id :number) {
            if (!this.chatrooms[chatroom_id]) {
                this.chatrooms[chatroom_id] = {
                    cursor : 0,
                    messages: []
                }
            } 
        },
        addMessage(chatroom_id : number, message : string) {
            this.initChatroom(chatroom_id)
            this.chatrooms[chatroom_id].messages.push(message)
        },
        updateCursor(chatroom_id :number,  cursor : number) {
            this.initChatroom(chatroom_id)
            this.chatrooms[chatroom_id].cursor = cursor
        }
    }
})
