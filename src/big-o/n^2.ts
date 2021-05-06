// Log all pairs of array
const array = [1, 2, 3, 4, 5]

// O(n * n) => O(n^2)
function logPairs(array: number[]) {
    // O(n)
    for (let i = 0; i < array.length; i++) {
        const firstPartOfPair = array[i]

        // O(n)
        for (let j = 0; j < array.length; j++) {
            const secondPartOfPair = array[j]
            console.log(`${firstPartOfPair}${secondPartOfPair}`)
        }
    }
}

logPairs(array)
