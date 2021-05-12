const INPUT_1 = [-2, -5, 6, -2, -3, 1, 5, -6]
const EXPECTED_OUTPUT = 7

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArrayWithNComplexity(nums: number[]) {
    if (!nums || !Array.isArray(nums) || nums.length === 0) throw new Error("invalid nums input")

    // base case
    if (nums.length === 1) return nums[0]

    let max = Number.NEGATIVE_INFINITY
    let longestSum = 0

    for (let i = 0; i < nums.length; i++) {
        const currentValue = nums[i]
        longestSum += currentValue

        if (currentValue > longestSum) {
            longestSum = currentValue
        }

        if (longestSum > max) {
            max = longestSum
        }
    }

    return max
}

const output = maxSubArrayWithNComplexity(INPUT_1)
console.log(`Your output is: ${output}`)
if (output !== EXPECTED_OUTPUT) {
    throw new Error(`Invalid output, expected output to be: ${EXPECTED_OUTPUT}`)
}

export {} // this ensures the file is treated as a module
