// Longest Duplicate Substring
/*
Given a string S, consider all duplicated substrings: (contiguous) substrings of S that occur 2 or more times.  (The occurrences may overlap.)

Return any duplicated substring that has the longest possible length.  (If S does not have a duplicated substring, the answer is "".)

 

Example 1:

Input: "banana"
Output: "ana"
Example 2:

Input: "abcd"
Output: ""
 

Note:

2 <= S.length <= 10^5
S consists of lowercase English letters.
   Hide Hint #1  
Binary search for the length of the answer. (If there's an answer of length 10, then there are answers of length 9, 8, 7, ...)
   Hide Hint #2  
To check whether an answer of length K exists, we can use Rabin-Karp 's algorithm.

*/

var longestDupSubstring = function(S) {
    const arr = S.split('').map((c) => c.charCodeAt(0) - 'a'.charCodeAt(0));
    let left = 0;
    let right = S.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (findDuplicated(arr, mid) >= 0) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    const length = left - 1;
    const index = findDuplicated(arr, length);
    return index >= 0 ? S.substring(index, index + length) : '';
  };
  
  const base = 26;
  const M = 2 ** 32;
  
  function findDuplicated(arr, L) {
    let hash = createHash(arr, 0, L);
    const set = new Set([hash]);
    const p = pow(base, L, M);
    for (let i = 1; i <= arr.length - L; i++) {
      hash = ((hash * base - ((arr[i - 1] * p) % M) + M) % M) + (arr[i + L - 1] % M);
      if (set.has(hash)) {
        return i;
      }
      set.add(hash);
    }
    return -1;
  }
  
  function createHash(arr, start, end) {
    let hash = 0;
    for (let i = start; i < end; i++) {
      hash = (base * hash + arr[i]) % M;
    }
    return hash;
  }
  
  function pow(b, exp, mod) {
    let output = 1;
    for (let i = 0; i < exp; i++) {
      output = (output * b) % mod;
    }
    return output;
  }