// 1 + 1 + 1 + 1 + n + n + n + n + n + n + n
// 4 + 7n
// O(4 + 7n) => O(n)
function anotherFunChallenge(input) {
    const a = 5 // O(1)
    const b = 10 // O(1)
    const c = 50 // O(1)

    // O(n)
    for (let i = 0; i < input; i++) {
        const x = i + 1 // O(n)
        const y = i + 2 // O(n)
        const z = i + 3 // O(n)
    }

    // O(n)
    for (let j = 0; j < input; j++) {
        const p = j * 2 // O(n)
        const q = j * 2 // O(n)
    }
    const whoAmI = "I don't know" // O(1)
}
