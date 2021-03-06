/** LeetCode 17. Letter Combinations of a Phone Number
 * @param {string} digits
 * @return {string[]} combinationList
 */
var letterCombinations = function(digits) {
  let combinationList = [];
  if(digits.length === 0) return combinationList;
  const numberStringSet = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };
  const dfs = (curString, i) => {
    if(i > digits.length - 1){
      combinationList.push(curString);
      return;
    }
    const letters = numberStringSet[digits[i]];
    for(let letter of letters){
      dfs(curString + letter, i + 1);
    }
  };
  dfs('', 0);
  return combinationList;
};

// var letterCombinations = function(digits) {
//   let combinationQueue = [];
//   if(digits.length === 0) return combinationQueue;
//   const numberStringSet = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };
  
//   combinationQueue.push('');
//   for(let i = 0; i < digits.length; i++){
//     let levelSize = combinationQueue.length;
//     for(let j = 0; j < levelSize; j++){
//       let curString = combinationQueue.shift();
//       let letters = numberStringSet[digits[i]];
//       for(let letter of letters){
//         combinationQueue.push(curString + letter);
//       }
//     }
//   }
//   return combinationQueue;
// };