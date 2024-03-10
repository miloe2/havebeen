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
}
export interface DataByMonth {
    month : string;
    data : DataItem[];
}

export interface FieldMapping {
    [key : string] : string;
}