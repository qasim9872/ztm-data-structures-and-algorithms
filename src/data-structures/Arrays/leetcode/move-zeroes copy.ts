const INPUT_1 = [1, 2]
const INPUT_2 = 3
const EXPECTED_OUTPUT = [2, 1]

/**
 Do not return anything, modify nums in-place instead.
 O(N)
 */
function rotate(nums: number[], k: number): void {
    if (nums.length === 1) {
        return
    }
    // O(K*N)
    // for (let i = 0; i < k; i++) {
    //     const removed = nums.pop();
    //     nums.unshift(removed); // O(n)
    // }

    if (k > nums.length) {
        k = nums.length - 1
    }

    const entriesToRotate: number[] = []

    // O(K)
    for (let i = nums.length - k; i < nums.length; i++) {
        entriesToRotate.push(nums[i])
    }

    // shift elements forward by k: O(N - K)
    for (let i = nums.length - 1; i >= k; i--) {
        nums[i] = nums[i - k]
    }

    // O(K)
    for (let i = 0; i < entriesToRotate.length; i++) {
        nums[i] = entriesToRotate[i]
    }
}

rotate(INPUT_1, INPUT_2)
const output = INPUT_1
console.log(`Your output is: ${output}`)
if (!output.every((value, index) => EXPECTED_OUTPUT[index] === value)) {
    throw new Error(`Invalid output, expected output to be: ${EXPECTED_OUTPUT}`)
}

export {} // this ensures the file is treated as a module
