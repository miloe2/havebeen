<template >
    <div class="flex flex-col text-sm  bg-blue -500">
        <div class="text-3xl font-bold montserrat w-full  text-center ">My Page</div>
        <div class="w-full h-auto flex justify-center flex-col items-center ">
            <div class="w-96 bg-red-5 flex flex-col mt-10">
                <div class="flex items-center">
                    <div v-if="isProfileImg" class="mr-4">
                        <img src="~/assets/img/icon/defaultProfile.svg" alt="">
                    </div>
                    <div v-else>
                        <img :src="user.user_img" alt="">
                    </div>
                    <div class="text-xl font-bold">
                        {{  user.user_name }}oohr
                    </div>
                </div>

                <div class="bg-zinc-100 h-1 w-full my-6"></div>

                <div> 가본 전시회</div>
                <div class="ring-1 w-full h-20">
                    
                </div>

            </div>
        </div>
            
            
    </div>

</template>
<script setup>
const { data } = useAuth();
const user = data.value.user['rows'][0];

const isProfileImg = ()   => {
    if(user.user_img === null){
        return false;
    } else {
        return true;
    }
}
</script>
<style>
    
</style>