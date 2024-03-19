<template >
    <div class="flex flex-col text-sm  bg-blue -500">
        <div class="text-3xl font-bold montserrat w-full  text-center ">SignUp</div>
        <div class="w-full h-auto flex justify-center flex-col items-center ">
            <div class="w-72">
            <div class=" w-full  ">
                <div class="w-full flex flex-row justify-between mt-12 ">
                    <div class=" font-bold">이메일</div>
                </div>
                <input type="email"  placeholder="이메일 입력해주세요" class="w-full h-8 mt-2 ring-1 ring-zinc-400 pl-2
                placeholder:pl-1 placeholder:text-xs"
                v-model="form.email">
                <!-- <div v-show="" class="mt-2 h-auto">중복 이메일입니다.</div> -->
                <div class="w-full flex flex-row justify-between mt-6 ">
                    <div class=" font-bold">비밀번호</div>
                </div>
                <input type="password" placeholder="비밀번호를 입력해주세요" class="w-full h-8 mt-2 ring-1 ring-zinc-400 pl-2 
                placeholder:pl-1 placeholder:text-xs"
                v-model="form.password">
                <div class="w-full flex flex-row justify-between mt-6 ">
                    <div class=" font-bold">닉네임</div>
                </div>
                <input type="text" placeholder="사용하실 닉네임을 입력해주세요" class="w-full h-8 mt-2 ring-1 ring-zinc-400 pl-2 
                placeholder:pl-1 placeholder:text-xs"
                v-model="form.name">
                <div class="w-full flex flex-row justify-between mt-4 ">
                    <div class=" font-bold"></div>
                </div>
            </div>
            <button class="bg-zinc-800 w-full h-10 text-white font-medium mt-12" @click="handleLogin">회원가입</button>
        </div>
    </div>
            
            
    </div>

</template>
<script setup>
const form = ref({
    email : '',
    password :'',
    name : '',
});
const handleLogin = () => {
    try {
        useFetch('/api/auth/register', {
            method:'POST',
            body:form.value
        })
        
    } catch (error) {
        console.log(error)
    }
}
</script>
<style>
    
</style>