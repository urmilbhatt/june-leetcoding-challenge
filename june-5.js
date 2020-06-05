// Random Pick with Weight
/*
Given an array w of positive integers, where w[i] describes the weight of index i, write a function pickIndex which randomly picks an index in proportion to its weight.

Note:

1 <= w.length <= 10000
1 <= w[i] <= 10^5
pickIndex will be called at most 10000 times.
Example 1:

Input: 
["Solution","pickIndex"]
[[[1]],[]]
Output: [null,0]
Example 2:

Input: 
["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
[[[1,3]],[],[],[],[],[]]
Output: [null,0,1,1,1,0]
Explanation of Input Syntax:

The input is two lists: the subroutines called and their arguments. Solution's constructor has one argument, the array w. pickIndex has no arguments. Arguments are always wrapped with a list, even if there aren't any.


*/

var Solution = function(w) {
    this.sums = [0];
    
    let sum = 0;
    for (let weight of w) {
        sum += weight;
        this.sums.push(sum);
    }
};

Solution.prototype.pickIndex = function() {
    const num = Math.floor(Math.random() * this.sums[this.sums.length - 1]);
    
    let i = 0;
    let j = this.sums.length - 1;
    
    while(j - i > 1) {
        const middle = Math.floor((i + j) / 2);
        if (num === this.sums[middle]) {
            j = middle + 1;
            i = middle;
            break;
        }
        
        if (num < this.sums[middle]) {
            j = middle;
        } else {
            i = middle;
        }
    }
    
    return j - 1;
};