export const getDateValue = function(dateString, now){
    let date = new Date(dateString);
    let difDay = Math.floor((date - now) / (1000 * 60 * 60 * 24));
    let v = 9;
    if(isNaN(difDay))
        v = 9;
    else if(difDay < 0)
        v = 9;
    else if(difDay <= 1)
        v = 5;
    else if(difDay <= 3)
        v = 6;
    else if(difDay <= 7)
        v = 7;
    else if(difDay <= 31)
        v = 8;
    else
        v = 9;
    return v;
}