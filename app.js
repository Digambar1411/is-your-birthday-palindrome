function reverseString(str){
    var reverseStr=str.split("").reverse().join("");
    return reverseStr;
    
}

function checkPalindrome(str){
    var revStr=reverseString(str);
    if(revStr===str){
        return "palindrome";
    }
    else{
        return "Not palindrome";
    }    

}


function convertDateToStr(date){

    var dateStr={day:'', month:'', year:''};

    if(date.day < 10){
        dateStr.day='0'+ date.day;
    }
    else{
        dateStr.day= date.day.toString();
    }
    if(date.month<10){
        dateStr.month='0'+date.month;
    }
    else{
        dateStr.month= date.month.toString();
    }
    dateStr.year=date.year.toString();
    return dateStr;
}


var date1  = {
    day:14,
    month:9,
    year:2020,
};


console.log(convertDateToStr(date1));


