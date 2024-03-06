// export interface DataItem {
// [key :string] : string
// }
export interface DataItem {
    country?: string;
    date?: string;
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
    startDate?: Date;
    finishDate?: Date;
}
export interface FieldMapping {
    [key : string] : string;
}