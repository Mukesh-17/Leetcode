/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x; // Special case for 0 and 1

    let left = 1, right = Math.floor(x / 2), result = 0;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (mid * mid === x) {
            return mid; // Exact square root found
        } else if (mid * mid < x) {
            result = mid; // Store the current mid as the candidate
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result; // Return the truncated square root
};
