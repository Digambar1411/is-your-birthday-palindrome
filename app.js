function reverseString(str){
    var reverseStr=str.split("").reverse().join("");
    return reverseStr;
    
}

function isPalindrome(str){
    var revStr=reverseString(str);
    if(revStr===str){
        return true
    }
    return false    
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


function getAllDateFormat(date){
    var dateStr=convertDateToStr(date);
    var ddmmyyyy=dateStr.day+dateStr.month+dateStr.year;
    var mmddyyyy= dateStr.month+dateStr.day+dateStr.year;
    var yyyymmdd=dateStr.year+dateStr.month+dateStr.day;
    var ddmmyy=dateStr.day+dateStr.month+dateStr.year.slice(-2);
    var mmddyy=dateStr.month+dateStr.day+dateStr.year.slice(-2);
    var yymmdd=+dateStr.year.slice(-2)+dateStr.month+dateStr.day;

    var allDateFormats=[ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];
    return allDateFormats
}

var date1  = {
    day:10,
    month:11,
    year:2001,
};

console.log(getAllDateFormat(date1))

function checkPalidromeForAllFormats(date1){
    var allDates=getAllDateFormat(date1);
    var flag=false;
    for (var i=0; i<allDates.length; i++){
        if(isPalindrome(allDates[i])){
            var flag = true;
            break;
        }
        
    }
    return flag;
}


console.log(checkPalidromeForAllFormats(date1));

