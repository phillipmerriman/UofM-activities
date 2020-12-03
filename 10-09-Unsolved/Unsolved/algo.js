function Algo() {}

Algo.prototype.reverse = function(str) {
    return str.split('').reverse().join('');
};

Algo.prototype.isPalindrome = function(str) {
    return str.split('').reverse().join('') === str;
};

Algo.prototype.capitalize = function(str) {
    // const allWords = str.split(' ');
    // function capitalizeFirstLetter (word) {
    //     let firstLetter = word.charAt(0).toUpperCase();

    //     return firstLetter + word.substring(1);
    // }

    // return allWords.map(word => capitalizeFirstLetter(word)).join(' ');
    return str.split(' ').map(word => word.substring(0, 1).toUpperCase() + word.substring(1)).join(' ')
};

module.exports = Algo;
