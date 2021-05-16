// scenario 1
// const INPUT = [2, 5, 1, 2, 3, 5, 1, 2, 4]
// const EXPECTED_OUTPUT = 2

// scenario 2
// const INPUT = [2, 1, 1, 2, 3, 5, 1, 2, 4]
// const EXPECTED_OUTPUT = 1

// scenario 3
const INPUT = [2, 3, 4, 5]
const EXPECTED_OUTPUT = undefined

export function findFirstRecurringCharacter(array: number[]) {
    if (array.length === 1 || array.length === 1) {
        return
    }

    const map = new Map<number, number>()

    for (const entry of array) {
        if (map.has(entry)) {
            return entry
        } else {
            map.set(entry, 1)
        }
    }

    return
}

const output = findFirstRecurringCharacter(INPUT)
console.log(`Your output is: ${output}`)
if (output !== EXPECTED_OUTPUT) {
    throw new Error(`Invalid output, expected output to be: ${EXPECTED_OUTPUT}`)
}

export {} // this ensures the file is treated as a module
