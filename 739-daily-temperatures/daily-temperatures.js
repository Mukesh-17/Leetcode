/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const answer = new Array(n).fill(0);
    const stack = []; // Monotonic stack to store indices

    for (let i = 0; i < n; i++) {
        // Pop from stack while current temp is greater than the temp at indices in stack
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex; // Calculate the days difference
        }
        stack.push(i); // Push current index to stack
    }

    return answer;
};