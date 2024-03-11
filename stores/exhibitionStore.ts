import { defineStore } from "pinia";
import { useAsyncData } from "#app";
import type { DataItem , DataByMonth} from '~/types/dataTypes';


export const useExhibitionStore = defineStore('exhibitions', {
    state : () => ({
        exhibitions : [] as DataItem[] | null,
        exhibitionsByMonth : [] as DataByMonth[] | null,
        closestExhibitions  : [] as DataItem[] | null,
        exhibitionDetail : [] as DataItem[] | null,
    }),
    actions : {
        async fetchExhibitions(year :number, month:number) {
            const yearMonthStr = `${year}-${month.toString().padStart(2, '0')}`;
            const monthStr = `${month.toString().padStart(2, '0')}`;
            console.log(monthStr)
            const existingData = this.exhibitionsByMonth?.find(m => m.month === yearMonthStr)
            if(existingData){
                return;
            }
            try {
                const data = await $fetch<DataItem[]>(`/api/exhibitions`,{
                    method: 'GET',
                    params : {year, month : monthStr}
                });
                console.log(data)
                if(!this.exhibitionsByMonth) {
                    this.exhibitionsByMonth = [];
                }
                this.exhibitionsByMonth.push({month:yearMonthStr, data});
            }catch (error){
                console.log(error)
            }
        },
        async fetchClosestExhibitions(){
            try{
                const data = await $fetch<DataItem[]>(`/api/exhibitions/upcoming`);
                // console.log(data)
                this.closestExhibitions = data
            } catch (error){
                console.log(error)
            }
        },
        async fetchExhibitionDetail(id:unknown){
            try{
                const data = await $fetch<DataItem[]>(`/api/exhibitions/${id}`);
                this.exhibitionDetail = data;
            } catch(error){
                console.log(error)
            }
        }
    }
})
