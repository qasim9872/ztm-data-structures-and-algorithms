const INPUT = "hello!"
const EXPECTED_OUTPUT = "!olleh"

function reverse(str: string): string {
    const array = str.split("")

    for (let index = 0, reverseIndex = array.length - 1; index < array.length; index++, reverseIndex--) {
        console.log({ index, reverseIndex, array })
        if (reverseIndex === index || index + 1 === reverseIndex) {
            break
        }

        // swap elements
        const element = array[index]
        array[index] = array[reverseIndex]
        array[reverseIndex] = element
    }

    return array.join("")
}

const output = reverse(INPUT)
console.log(`Your output is: ${output}`)
if (output !== EXPECTED_OUTPUT) {
    throw new Error(`Invalid output, expected output to be: ${EXPECTED_OUTPUT}`)
}
