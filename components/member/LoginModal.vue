<template >
    <div class="flex justify-center flex-col text-sm">
        <div class="text-3xl font-bold montserrat w-full text-center ">Login</div>
        <div class="w-full mt-10 h-auto flex justify-center flex-col items-center ">
            <div class="w-72">
                <div class=" w-full   ">
                <button 
                class="w-1/2 h-10 border border-b-0 border-zinc-800 border-solid" 
                :class="isClicked === 'social' ? 'font-bold' : ' border-t-0 border-l-0 border-r-0 border-b-[1px] border-zinc-800 border-solid '"
                @click="handleSocialBtn('social')">간편로그인</button>
                <button class="w-1/2 h-10 border border-b-0 border-zinc-800 border-solid" 
                :class="isClicked === 'id' ? 'font-bold' : 'border-t-0 border-l-0 border-r-0 border-b-[1px] border-zinc-800 border-solid '"
                @click="handleSocialBtn('id')">ID로그인</button>
            </div>
            <div class=" w-full  ">
                <div class="w-full flex flex-row justify-between mt-12 ">
                    <div class=" font-bold">아이디</div>
                    <span class="underline">아이디 찾기</span>
                </div>
                <input type="text"  placeholder="아이디를 입력해주세요" class="w-full h-8 mt-2 ring-1 ring-zinc-400 pl-2
                placeholder:pl-1 placeholder:text-xs"
                v-model="inputId">
                <div class="w-full flex flex-row justify-between mt-6 ">
                    <div class=" font-bold">비밀번호</div>
                    <span class="underline">비밀번호 찾기</span>
                </div>
                <input type="text" placeholder="비밀번호를 입력해주세요" class="w-full h-8 mt-2 ring-1 ring-zinc-400 pl-2 
                placeholder:pl-1 placeholder:text-xs"
                v-model="inputPwd">
                <div class="w-full flex flex-row justify-between mt-4 ">
                    <div class=" font-bold"></div>
                    <span class="underline">회원가입</span>
                </div>
            </div>
            <button class="bg-zinc-800 w-full h-10 text-white font-medium mt-12" @click="handleLogin">로그인</button>
        </div>
    </div>
            
            
    </div>

</template>
<script setup>
import { ref } from 'vue';
import { useMemberStore } from '~/stores/memberStore';
 
const memberStore = useMemberStore();
const router = useRouter();
const inputId = ref('');
const inputPwd = ref('');
const isClicked = ref('social');
const handleSocialBtn = (btn) => {
    isClicked.value = btn
} 
const handleLogin = async () => {
    const rsp = await memberStore.fetchLoginData(inputId.value, inputPwd.value);
    if(rsp.status){
        memberStore.$state.userName = rsp.name;
        router.push('/')
        console.log(`${memberStore.$state.userName}님 환영합니다.`)
    } else {
        console.log(rsp.message)
    }
}

</script>