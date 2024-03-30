export const eventPeried = (start :string, finish:string)  => {
    const startDate = new Date(start);
    const finishDate = new Date(finish);
    // console.log(startDate)
    const year1 = startDate.getFullYear() 
    const year2 = finishDate.getFullYear() 
    const month1 = startDate.getMonth()+1 
    const month2 = finishDate.getMonth()+1 
    const day1 = startDate.getDate()
    const day2 = finishDate.getDate()
    
    return `${year1}.${month1}.${day1} - ${year2}.${month2}.${day2}`
}

export const formattedDate = ( dateStr :Date) => {
    const date = new Date(dateStr)
    const year = date.getFullYear()
    const month = date.getMonth()+1 
    const day = date.getDate()

    return `${year}.${month}.${day}`
}

export const formattedVisitType = (type :number) => {
    switch(type) {
        case 0 : return 'Visitor'
        case 1 : return 'Buyer'
        case 2 : return 'Exhibitior' 
        case 3 : return 'Media'
        default : return '-'; 
    }
};

export const tagSlice = (tag :string) => {
    const result = tag.split(',')
    return result;
}