// Problem => Given a string, determine if it is almost a palindrome. A string is almost a palindrome if it becomes a palindrome by removing 1 letter. 
// Consider only alphanumeric characters and ignore case sensitivity.

//Solution =>

const isPalindrome = (str, start, end)=> {
    while(start < end) {
        if(str[start] !== str[end]) return false;
        start+=1;
        end-=1;
    }
    return true;
}

const isAlmostPalindrome = (str) =>{
    let left=0, right=str.length-1;
    
    while(left < right) {
        if(str[left] !== str[right]) {
            return isPalindrome(str, left, right-1) || 
            isPalindrome(str, left+1, right);
        }
        left+=1;
        right-=1;
    }
    return true;
}

console.log(isAlmostPalindrome('raceacar'))
console.log(isAlmostPalindrome('a'))
console.log(isAlmostPalindrome('ab'))
console.log(isAlmostPalindrome('abccbda'))
console.log(isAlmostPalindrome('abcdefdba'))
