const INPUT_1 = [1, 2, 3, 4, 5]
const INPUT_2 = 6
const EXPECTED_OUTPUT = [1, 3]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums: number[], target: number) {
    if (!nums || !Array.isArray(nums) || nums.length === 0) throw new Error("invalid nums input")
    if (target === undefined || typeof target !== "number") throw new Error("invalid target input")

    // O(n)
    const map: { [key: number]: number } = {}
    for (let i = 0; i < nums.length; i++) {
        const currentValue = nums[i]
        const otherIndex = map[currentValue]

        if (otherIndex !== undefined) {
            return [otherIndex, i]
        } else {
            map[target - currentValue] = i
        }
    }

    return [0, 0]
}

const output = twoSum(INPUT_1, INPUT_2)
console.log(`Your output is: ${output}`)
if (!output.every((value, index) => EXPECTED_OUTPUT[index] === value)) {
    throw new Error(`Invalid output, expected output to be: ${EXPECTED_OUTPUT}`)
}

export {} // this ensures the file is treated as a module
