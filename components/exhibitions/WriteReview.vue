<template>
    <DimmedBlack :opacity="0.4"/>
    <div class="w-screen h-screen  fixed top-0 left-0 z-[900]">
        <div class="w-[640px] h-160 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl px-10 py-6">
            <div class="flex bg-red-5  justify-end"><button @click="closeBtn" class="font-thin text-4xl" > &times;</button></div>

            <div class="flex flex-col">
                <label for="file">
                    <div class="btn-upload mr-4 mb-4 shadow-sm ring-1 ring-zinc-200">
                    <img src="~/assets/img/icon/camera.svg" alt="" class="w-6 h-6" />
                    </div>
                </label>
                <input type="file" name="file" id="file" @change="upload" multiple accept="image/*"/>
            </div>

            <div class="w-full flex items-center"> 
                <img src="~/assets/img/icon/defaultProfile.svg" alt="" class="w-9 h-9 mr-4 ring-1 ring-zinc-200 rounded-full">
                <p class="font-medium">ID ? anyone</p>
            </div>
            <div class="w-full bg-red-0 mt-4">
                <textarea rows="4" class="w-full rounded-sm ring-1 ring-zinc-400 text-sm p-2 "
                placeholder="리뷰를 작성해주세요"></textarea>
            </div>
            <div class="w-full bg-red-0 mt-4 flex items-center">
                <p>별점 </p>
                <button class="w-8 h-8 bg-green-400 rounded-full"></button>
                <button class="w-8 h-8 bg-red-400 rounded-full"></button>
            </div>
            <div class="w-full bg-red-0 mt-4 flex items-center">
                <p>가봤어요/ 갈예정이에요 </p>
                <button class="w-8 h-8 bg-green-400 rounded-full"></button>
                <button class="w-8 h-8 bg-red-400 rounded-full"></button>
            </div>
            <div class="w-full bg-red-0 mt-4 flex items-center">
                <p>exhibitior , buyer, visitor</p>
                <button class="w-8 h-8 bg-green-400 rounded-full"></button>
                <button class="w-8 h-8 bg-red-400 rounded-full"></button>
            </div>


        </div>
    </div>
</template>
<script setup>
import DimmedBlack from '~/components/Ui/DimmedBlack.vue';
const emits = defineEmits(['close'])
const closeBtn = () => {
    emits('close')
}

</script>
<style scoped>
.btn-upload {
    width: 5rem;
    height: 5rem;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
}
.isSelected {
    background-color: #e0f9f1;
    color: #00d191;
}
.previewImg {
width: 8rem;
height: 8rem;
}
#file {
display: none;
}
input:focus,
textarea:focus {
outline: none;
}
</style>