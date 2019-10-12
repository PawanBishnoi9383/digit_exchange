function ordinal(number,options){
    number = number.toString();
    let flag = number.substr(number.length-1);
    if(flag == "1" && number.substr(number.length-2) != '11')
    {
        number += 'st';
        return ((options && options.prefix ? options.prefix : "") + " " + number + " " + (options && options.suffix ? options.suffix : "")).trim();
    }
    if(flag == "2" && number.substr(number.length-2) != '12')
    {
        number += 'nd';
        return ((options && options.prefix ? options.prefix : "") + " " + number + " " + (options && options.suffix ? options.suffix : "")).trim();
    }
    if(flag == "3" && number.substr(number.length-2) != '13')
    {
        number += 'rd';
        return ((options && options.prefix ? options.prefix : "") + " " + number + " " + (options && options.suffix ? options.suffix : "")).trim();
    }
    number+='th';
    return ((options && options.prefix ? options.prefix : "") + " " + number + " " + (options && options.suffix ? options.suffix : "")).trim();
}
module.exports = ordinal;