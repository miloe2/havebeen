import axios from "axios";
import { defineStore } from "pinia";


export const useChatStore = defineStore('chat', {
    state : () => ({
        chatroomNo : null,
    }),
    actions : {
        async createChatroom (user_id : number, opponent_id : number){
            try {
                const rsp = await axios.post(`/api/chat/join`, {            
                    user_id,
                    opponent_id,
                });
                this.chatroomNo = rsp.data.chatroom_id
                console.log(this.chatroomNo)
                return rsp.data;
            } catch (error){
                console.log(error)
            }
        }
    }
})
