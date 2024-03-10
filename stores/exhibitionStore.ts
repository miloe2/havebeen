import { defineStore } from "pinia";
import { useAsyncData } from "#app";
import type { DataItem } from '~/types/dataTypes';


export const useExhibitionStore = defineStore('exhibitions', {
    state : () => ({
        exhibitions : [] as DataItem[] | null,
        closestExhibitions  : [] as DataItem[] | null,
    }),
    actions : {
        // async fetchExhibitions() {
        //     try {
        //         const data = await $fetch(`/api/exhibitions`);
        //         this.exhibitions = data
        //     }catch (error){
        //         console.log(error)
        //     }
        // },
        async fetchClosestExhibitions(){
            try{
                const data = await $fetch<DataItem[]>(`/api/exhibitions/upcoming`);
                console.log(data)
                this.closestExhibitions = data
            } catch (error){
                console.log(error)
            }
        }
    }
})
