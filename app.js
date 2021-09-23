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

function checkPalindromeForAllFormats(date){
    var allDates=getAllDateFormat(date);
    var flag=false;
    for (var i=0; i<allDates.length; i++){
        if(isPalindrome(allDates[i])){
            var flag = true;
            
            break;
        }
        
    }
    return flag;

}

function isLeapYear(year){
    if(year%400===0){
        return true;
    }
    if(year%100===0){
        return false;
        }
    if(year%4===0){
        return true;
    }
    
    return false;
}

function getNextDate(date){
    var day =date.day+1;
    var month =date.month;
    var year = date.year;
    
    var daysOfMonths=[31,28,31,30,31,30,31,31,30,31,30,31];

    
    if(month===2){
        if(isLeapYear(year)){
            if(day>29){
                day=1;
                month+=1;
            }
        }    
        else{
            if(day>28){
                day=1;
                month+=1;
            }
        }
            

    }
    
    else{
        if(day>daysOfMonths[month-1]){
            day=1;
            month+=1;
        }
        
    }

    if(month>12){
        month=1;
        year+=1;
    }

    return {
        day:day,
        month:month,
        year:year
    };

}


function getNextPalindrome(date){
    var nextDate= getNextDate(date);
    count=0;
    while(1){
        count+=1;
        var isPalindrome = checkPalindromeForAllFormats(nextDate);
        if(isPalindrome){
            break;

        }
        
        nextDate=getNextDate(nextDate);
    }

    return [count, nextDate];
}


var bDate=document.querySelector("#b-date");
var showBtn =document.querySelector("#show-btn");
var errorMsg=document.querySelector("#err-msg");
var result=document.querySelector("#output");

showBtn.addEventListener("click", clickHandler);


function clickHandler(){
    errorMsg.style.display="none";
    if(bDate.value!==''){
        var bDateStr= bDate.value;
        
        var listOfbDateStr=bDateStr.split("-");
        var date={
            day:Number(listOfbDateStr[2]),
            month:Number(listOfbDateStr[1]),
            year:Number(listOfbDateStr[0]),

        };
   
        var isbdatePalindrome = checkPalindromeForAllFormats(date);
        
        if(isbdatePalindrome){
        result.innerText="Your birthday is palindrome";
        
        }
        else{
            var [count, nextDate] = getNextPalindrome(date);
            result.innerText= "The next palindrome date is "+ nextDate.day+"-"+nextDate.month+"-"+nextDate.year+ " and you missed it by "+count+" days "
        }
    }
    else{
        errorMsg.innerText="Please select the date birthdate";
        errorMsg.style.display="block";
    }
}




 

    

    



