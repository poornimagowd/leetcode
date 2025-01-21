// 1768. Merge Strings Alternately


// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

 

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r



/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

//alertnate solution
var mergeAlternately = function(word1,word2){
    let answer = ''
    let temp = word1.length > word2.length ? word1 : word2;
    for(let i=0; i<temp.length; i++){
        let first = word1[i] || ''
        let second = word2[i] || ''
        answer = answer + first + second
    }
    return answer

}

console.log(mergeAlternately('abcerd','pqr'))