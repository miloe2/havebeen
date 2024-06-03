// export interface DataItem {
// [key :string] : string
// }
export interface DataItem {
    id: number;
    country?: string;
    city?: string;
    venue?: string;
    frequency?: string;
    marketType?: string;
    shortName?: string;
    englishName?: string;
    eventName?: string;
    eventType?: string;
    organizer?: string;
    organizerWebsite?: string;
    category?: string;
    startDate?: string; 
    finishDate?: string; 
    closestDifference?: number; 
    images?: string[];
}
export interface DataByMonth {
    month : string;
    data : DataItem[];
}
export interface DataByCategory {
    category : string;
    data : DataItem[];
}
export interface UserActions {
    id:number;
    user_id : number;
    exhibitions_id : number;
    action_type : string;
    created_at : Date;
}
// Define a type for your user data
export interface UserData {
    id: number;
    user_id: string;
    user_pwd: string;
    user_name: string;
    created_at: Date;
    del_flag: number;
    user_img?: string;
  }
  chatrooms: {
    // chatroom_id: { cursor, messages }
  }
interface Chatroom {
    cursor : number,
    messages : string[],
} 
export interface ChatroomsState {
    [chatroom_id : number] : Chatroom
}

  