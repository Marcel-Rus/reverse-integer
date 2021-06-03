/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let integerRange   = Math.pow(2, 31);
    let reverseString  = Math.abs(x).toString().split("").reverse().join("");
    let reverseInteger = Number(reverseString);

    return (
        reverseInteger <= integerRange 
        ? x < 0 
            ? reverseInteger * -1 
            : reverseInteger
        : 0
    );
};