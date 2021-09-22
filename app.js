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
console.log(checkPalindrome("hello"));
console.log(checkPalindrome("dad"));

