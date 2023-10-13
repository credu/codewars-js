/*
    Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

    For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

    The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

    Based on: http://oj.leetcode.com/problems/two-sum/

    twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
*/

/**
 * @param {Array<Number>} numbers 
 * @param {Number} target 
 * @returns {Array<Number>}
 */
function twoSum(numbers, target) {
    let result = [];

    numbers.every(( element1, i ) => {

        for (let j = i + 1; j < numbers.length; j++) {
            const element2 = numbers[j];

            if (element1 + element2 === target) {
                result = [i, j]
                break;
            }
        }

        if ( result.length > 0 ) return false;
        else return true;
    });

    return result;
}