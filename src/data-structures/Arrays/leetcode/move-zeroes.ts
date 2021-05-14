const INPUT = [0, 1, 0, 3, 12]
const EXPECTED_OUTPUT = [1, 3, 12, 0, 0]

const ZERO = 0

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(array: number[]): void {
    let lastNonZeroFoundAt = 0

    for (const value of array) {
        if (value !== ZERO) {
            array[lastNonZeroFoundAt++] = value
        }
    }

    for (let i = lastNonZeroFoundAt; i < array.length; i++) {
        array[i] = ZERO
    }
}

moveZeroes(INPUT)
const output = INPUT
console.log(`Your output is: ${output}`)
if (!output.every((value, index) => EXPECTED_OUTPUT[index] === value)) {
    throw new Error(`Invalid output, expected output to be: ${EXPECTED_OUTPUT}`)
}

export {} // this ensures the file is treated as a module
