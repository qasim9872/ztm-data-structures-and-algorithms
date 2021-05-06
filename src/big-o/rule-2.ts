// Rule 2: Remove constants

// 1 + 1 + 1 + n/2 + n/2 + n/2 + 100 + 100
// 203 + 3n/2
// O(203 + 3n/2) => O(3n/2) => O(1.5n) => O(n)
function printFirstItemThenFirstHalfThenSayHi100Times(items: string[]) {
    console.log(items[0]) // O(1)

    const middleIndex = Math.floor(items.length / 2) // O(1)
    let index = 0 // O(1)

    // O (n / 2)
    while (index < middleIndex) {
        console.log(items[index]) // O (n / 2)
        index++ // O (n / 2)
    }

    // O(100)
    for (let i = 0; i < 100; i++) {
        console.log("hi") // O(100)
    }
}
