const INPUT = [1, 2, 3, 1]
const EXPECTED_OUTPUT = true

/**
 * @param {number[]} nums
 * @return {boolean}
 * O(N)
 */
function containsDuplicate(nums: number[]): boolean {
    const map: { [key: number]: number } = {}

    for (const value of nums) {
        if (map[value]) {
            return true
        } else {
            map[value] = 1
        }
    }

    return false
}

const output = containsDuplicate(INPUT)
console.log(`Your output is: ${output}`)
if (output !== EXPECTED_OUTPUT) {
    throw new Error(`Invalid output, expected output to be: ${EXPECTED_OUTPUT}`)
}

export {} // this ensures the file is treated as a module
