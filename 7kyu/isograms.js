/*
    An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

    Example: (Input --> Output)

    "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

    isIsogram "Dermatoglyphics" = true
    isIsogram "moose" = false
    isIsogram "aba" = false
*/

/**
 * Determines if a word is a isogram
 * @param {String} word
 * @returns {Boolean}
 */
function isIsogram( word ) {
    return new Set( word.toLowerCase() ).size === word.length;
}