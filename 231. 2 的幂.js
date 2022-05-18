/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    /**
    转化为二进制
    2 => 10
    4 => 100
    8 => 1000
    16 => 10000
    ...
    那么 n-1 各数位取反
    2-1 => 01
    4-1 => 011
    8-1 => 0111
    16-1 => 01111
    那么 n & (n-1) 就等于 0
     */
    return n > 0 && (n&(n-1)) === 0
};