import { defineStore } from "pinia";
import { useAsyncData } from "#app";
import type { DataItem , DataByMonth, DataByCategory, UserActions} from '~/types/dataTypes';


export const useExhibitionStore = defineStore('exhibitions', {
    state : () => ({
        exhibitions : [] as DataItem[] | null,
        exhibitionsByMonth : [] as DataByMonth[] | null,
        closestExhibitions  : [] as DataItem[] | null,
        exhibitionDetail : {} as DataItem | null,
        exhibitionsByCategory : [] as DataByCategory[] | null,
        userActions : [] as UserActions[] | null,
        searchYear : new Date().getFullYear(),
        searchMonth : new Date().getMonth() + 1
    }),
    actions : {
        async fetchSimilarExhibitions(category:string){
            const existingData = this.exhibitionsByCategory?.find(c => c.category === category);
            if(existingData) return;
            try {
                const data = await $fetch<DataItem[]>(`/api/exhibitions/similar-category`, {
                    method:'GET',
                    params : { category }
                });
                if(!this.exhibitionsByCategory){
                    this.exhibitionsByCategory = [];
                }
                this.exhibitionsByCategory.push({category, data})
            }catch(error){
                console.log(error)
            }
        },
        async fetchExhibitions(year :number, month:number) {
            const yearMonthStr = `${year}-${month.toString().padStart(2, '0')}`;
            const monthStr = `${month.toString().padStart(2, '0')}`;
            // console.log(monthStr)
            const existingData = this.exhibitionsByMonth?.find(m => m.month === yearMonthStr)
            if(existingData){
                return;
            }
            try {
                const data = await $fetch<DataItem[]>(`/api/exhibitions`,{
                    method: 'GET',
                    params : {year, month : monthStr}
                });
                // console.log(data)
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
                const data = await $fetch<DataItem>(`/api/exhibitions/${id}`);
                const images = await $fetch<string[]>(`/api/exhibitions/${id}/images`);
                // this.exhibitionDetail.images = images;
                // console.log(images)
                this.exhibitionDetail = {...data, images };
                console.log(this.exhibitionDetail)
            } catch(error){
                console.log(error)
            }
        },

        async fetchUserActions(exhibition_id : unknown, user_id : number){
            try {
                const data = await $fetch<UserActions[]>(`/api/exhibitions/${exhibition_id}/actions`,
                {
                    method:'GET',
                    params : { user_id }
                });
                this.userActions = data;
            } catch (error) {
                console.log(error)      
            }
        },
        incrementMonth() {
            if (this.searchMonth < 12) {
                this.searchMonth++;
            } else {
                this.searchMonth = 1;
                this.searchYear++;
            }
        },
        decrementMonth() {
            if (this.searchMonth > 1) {
                this.searchMonth--;
            } else {
                this.searchMonth = 12;
                this.searchYear--;
            }
        }
    }
})
