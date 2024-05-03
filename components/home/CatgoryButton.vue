<template>
    <div class="w-full h-auto ">
        <ul class="flex w-full h-full flex-wrap mt-8">
            <li v-for="(item, index) in itemsList" :key="index" 
            @click="handleBtn(item)"
            :class="selectedItem === item ? 'bg-stone-950 text-white' : 'bg-zinc-100 text-def'"
            class=" mr-3 mb-3 px-3 py-1.5 whitespace-pre text-sm rounded-full cursor-pointer">{{ item }}</li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import country from '~/assets/data/country.json';
import category from '~/assets/data/category.json';
const props = defineProps({
    items : {
        type : String,
        required : true
    }
});
const selectedItem = ref('');

onMounted(() => {
  switch (props.items) {
    case 'country':
      selectedItem.value = '미국';  // 기본 선택 항목 설정
      break;
    case 'category':
      selectedItem.value = '생활용품';  // 기본 선택 항목 설정
      break;
  }
});

const itemsList = computed(() => {
  switch (props.items) {
    case 'country':
      return country;
    case 'category':
      return category;
    default:
      return [];
  }
});

const emits = defineEmits(['setItem']) 
const handleBtn = (item : string) => {
    selectedItem.value = item;
    emits('setItem', selectedItem.value);
};
</script>