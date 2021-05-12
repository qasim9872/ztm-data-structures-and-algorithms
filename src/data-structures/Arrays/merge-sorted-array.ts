const INPUT_1 = [0, 3, 4, 31]
const INPUT_2 = [4, 6, 30]
const EXPECTED_OUTPUT = [0, 3, 4, 4, 6, 30, 31]

// O(n + m)
function mergeSortedArray(array1: number[], array2: number[]): number[] {
    // validate input
    if (!array1 || !array2) throw new Error("missing required arguments")

    // validate input type
    if (!Array.isArray(array1) || !Array.isArray(array2)) throw new Error("invalid argument type")

    // one array is empty
    if (array1.length === 0) return array2
    if (array2.length === 0) return array1

    const merged: number[] = []

    let index1 = 0
    let index2 = 0
    const length = array1.length + array2.length

    for (let index = 0; index < length; index++) {
        const elementFromArray1 = array1[index1]
        const elementFromArray2 = array2[index2]

        if (!elementFromArray2 || elementFromArray1 < elementFromArray2) {
            merged.push(elementFromArray1)
            index1++
        } else {
            merged.push(elementFromArray2)
            index2++
        }
    }

    return merged
}

const output = mergeSortedArray(INPUT_1, INPUT_2)
console.log(`Your output is: ${output}`)
if (!output.every((value, index) => EXPECTED_OUTPUT[index] === value)) {
    throw new Error(`Invalid output, expected output to be: ${EXPECTED_OUTPUT}`)
}

export {} // this ensures the file is treated as a module
