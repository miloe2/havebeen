<template >
    <div class="flex justify-center flex-col text-sm">
        <div class="text-3xl font-bold montserrat w-full text-center ">Login</div>
        <div class="w-full mt-10 h-auto flex justify-center flex-col items-center ">
            <div class="w-72">
                <div class=" w-full   ">
                <button 
                class="w-1/2 h-10 border border-b-0 border-zinc-800 border-solid" 
                :class="isClicked === 'social' ? '' : 'border-t-0 border-l-0 border-r-0 border-b-[1px] border-zinc-800 border-solid '"
                @click="handleLoginBtn('social')">간편로그인</button>
                <button class="w-1/2 h-10 border border-b-0 border-zinc-800 border-solid" 
                :class="isClicked === 'id' ? '' : 'border-t-0 border-l-0 border-r-0 border-b-[1px] border-zinc-800 border-solid '"
                @click="handleLoginBtn('id')">ID로그인</button>
            </div>
            <div class=" w-full  ">
                <div class="w-full flex flex-row justify-between mt-12 ">
                    <div class=" font-bold">아이디</div>
                    <span class="underline">아이디 찾기</span>
                </div>
                <input type="text" placeholder="아이디를 입력해주세요" class="w-full h-8 mt-2 ring-1 ring-zinc-400 placeholder:pl-2">
                <div class="w-full flex flex-row justify-between mt-6 ">
                    <div class=" font-bold">비밀번호</div>
                    <span class="underline">비밀번호 찾기</span>
                </div>
                <input type="text" placeholder="아이디를 입력해주세요" class="w-full h-8 mt-2 ring-1 ring-zinc-400 placeholder:pl-2">
                <div class="w-full flex flex-row justify-between mt-4 ">
                    <div class=" font-bold"></div>
                    <span class="underline">회원가입</span>
                </div>
            </div>
            <button class="bg-zinc-800 w-full h-10 text-white font-medium mt-12">로그인</button>
            </div>
            
            
        </div>
    </div>

</template>
<script setup>
const isClicked = ref('social');
const handleLoginBtn = (btn) => {
    isClicked.value = btn
} 

</script>
<style scoped>
.isActice {
    border-bottom: 1px;
}
    
</style>