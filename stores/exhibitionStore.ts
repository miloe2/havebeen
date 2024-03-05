import { defineStore } from "pinia";
import { useAsyncData } from "#app";
import type { DataItem } from '~/types/dataTypes';


export const useExhibitionStore = defineStore('exhibitions', {
    state : () => ({
        exhibitions : [] as DataItem[] | null,
        closestExhibitions  : [] as DataItem[] | null,
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
        },
        async fetchClosestExhibitions(){
            try{
                const data = await $fetch(`/api/exhibitions/upcoming`);
                this.closestExhibitions = data
            } catch (error){
                console.log(error)
            }
        }
    }
})
