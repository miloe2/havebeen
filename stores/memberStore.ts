import { defineStore } from "pinia";


export const useMemberStore = defineStore('member', {
    state : () => ({
        userName : '',
    }),
    actions : {
        async fetchLoginData(id:string, pw:string){
            try{
                const data = await $fetch(`/api/member/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user_id: id,
                        user_pwd: pw
                    })
                });

                return data;
            } catch (error){
                console.log(error)
            }
        }
    }
})
