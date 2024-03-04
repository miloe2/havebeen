import { defineStore } from "pinia";
import { useAsyncData } from "#app";
import type { DataItme } from '~/types/dataTypes';


export const useExhibitionStore = defineStore('exhibitions', {
    state : () => ({
        exhibitions : [] as DataItme[] | null
    }),
    actions : {
        async fetchExhibitions(page:number) {
            console.log('fetch start')
            try {
                const data = await $fetch(`/api/exhibitions?page=${page}&limit=8`);
                this.exhibitions = data
            }catch (error){
                console.log(error)
            }
        }
    }
})
