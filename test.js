/**
 * ============================================
 * Created by: Raj
 * Date: 06 Nov 2018
 * ============================================
 */

let argv = process.argv.splice(2);
let count = argv.shift();
let sum = 0;
if(count != argv.length){
  return  console.log("Oops! Something wrong! Suppose for 8 elements, please run like this:\nnode test.js 8 0 -3 5 -4 -2 3 1 0");
}
let result = findEquilibriums(argv);

// function definitions
/**
 * @description function will return Array of equilibrium positions
 * @param {Array} arr 
 */
function findEquilibriums(arr){
    if (!arr || arr.length < 1) return 0;
    let positions = [];
    let sum = getSum(arr);
    let left = 0;
    let right = sum;
    for(let i=0, len=arr.length; i<len; i++){
        left += arr[i-1] ? +arr[i-1] : 0;
        right -= arr[i] ? +arr[i] : 0;
        if (left == right){
            positions.push(i);
        }
    }
    return positions;
};

/**
 * @description function will return the sum of Array
 * @param {Array} arr 
 */
function getSum(arr){
    if (!arr || arr.length < 1) return 0;
    let sum = 0;
    for(let i=0, len=arr.length; i<len; i++){
        sum = sum + +arr[i];
    }
    return sum;
};