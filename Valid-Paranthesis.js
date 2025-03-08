/**
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let elements = [];
    let index = 0;
    let mapChars = {
        '{' : '}',
        '[' : ']',
         '(' : ')'
    };
    while(index < s.length) {

        if(s[index] === '(' || s[index] === '{' || s[index] === '[') {
            elements.push(s[index]);
        } else {
            let charEle = elements.pop();
            if(mapChars[charEle] !== s[index]) return false;
        }
        index+=1;
    }
    if(elements.length===0) return true;
    else return false;
};




