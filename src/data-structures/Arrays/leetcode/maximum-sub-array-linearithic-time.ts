const INPUT_1 = [-2, -5, 6, -2, -3, 1, 5, -6]
const EXPECTED_OUTPUT = 7

function findCrossingSubArray(nums: number[], low: number, mid: number, high: number) {
    // find left
    let leftSum = Number.NEGATIVE_INFINITY
    let leftTempSum = 0

    // NOTE: TODO: The below only works if you do a reverse loop
    for (let i = low; i <= mid; i++) {
        leftTempSum += nums[i]
        leftSum = Math.max(leftTempSum, leftSum)
    }

    // find right
    let rightSum = Number.NEGATIVE_INFINITY
    let rightTempSum = 0
    for (let i = mid + 1; i <= high; i++) {
        rightTempSum += nums[i]
        rightSum = Math.max(rightTempSum, rightSum)
    }

    return Math.max(leftSum, rightSum, leftSum + rightSum)
}

function findMaxSubArrayInRange(nums: number[], low: number, high: number): number {
    if (low === high) return nums[low]

    const mid = Math.floor((low + high) / 2)

    return Math.max(
        findMaxSubArrayInRange(nums, low, mid),
        findMaxSubArrayInRange(nums, mid + 1, high),
        findCrossingSubArray(nums, low, mid, high)
    )
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArrayWithNLogNComplexity(nums: number[]) {
    if (!nums || !Array.isArray(nums) || nums.length === 0) throw new Error("invalid nums input")

    // base case
    if (nums.length === 1) return nums[0]

    return findMaxSubArrayInRange(nums, 0, nums.length - 1)
}

const output = maxSubArrayWithNLogNComplexity(INPUT_1)
console.log(`Your output is: ${output}`)
if (output !== EXPECTED_OUTPUT) {
    throw new Error(`Invalid output, expected output to be: ${EXPECTED_OUTPUT}`)
}

export {} // this ensures the file is treated as a module
