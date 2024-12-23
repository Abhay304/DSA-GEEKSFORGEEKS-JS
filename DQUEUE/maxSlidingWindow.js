function maxSlidingWindow(nums, k) {
    const result = [];
    const deque = []; // This will store the indices of elements in the window

    for (let i = 0; i < nums.length; i++) {
        // Remove elements from the back of deque while the current element is greater
        // than the element at those indices, because they can't be part of the maximum
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // Add the current element's index to the deque
        deque.push(i);

        // Remove the element from the front if it's outside the current window
        if (deque[0] === i - k) {
            deque.shift();
        }

        // Once we've processed the first 'k' elements, we can start adding results
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}

// const nums = [12, 1, 78, 90, 57, 89, 56];
const nums = [1, -1];
const k = 1;
console.log(maxSlidingWindow(nums, k));  // Output: [3, 3, 5, 5, 6, 7]
