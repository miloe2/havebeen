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
