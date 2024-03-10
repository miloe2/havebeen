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
    startDate?: string; // Date 타입에서 string 타입으로 변경
    finishDate?: string; // Date 타입에서 string 타입으로 변경
    closestDifference?: number; // 이미 적절히 선언됨
}

export interface FieldMapping {
    [key : string] : string;
}