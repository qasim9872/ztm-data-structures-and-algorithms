const INPUT = "fun&!! time"
const EXPECTED_OUTPUT = "time"

const BREAK_CHARS = [" "]
const IGNORE_CHARS = ["&", "!"]
function findLongestWord(sen: string) {
    // code goes here
    let currentWord = ""
    let longestWord = ""

    // add extra space at end of sen
    sen += " "

    for (const currentChar of sen) {
        if (BREAK_CHARS.includes(currentChar)) {
            const isLongest = currentWord.length > longestWord.length
            if (isLongest) {
                longestWord = currentWord
            }

            currentWord = ""
        } else if (IGNORE_CHARS.includes(currentChar)) {
            // DO NOTHING
        } else {
            currentWord += currentChar
        }
    }

    return longestWord
}

const output = findLongestWord(INPUT)
console.log(`Your output is: ${output}`)
if (output !== EXPECTED_OUTPUT) {
    throw new Error(`Invalid output, expected output to be: ${EXPECTED_OUTPUT}`)
}

export {} // this ensures the file is treated as a module
