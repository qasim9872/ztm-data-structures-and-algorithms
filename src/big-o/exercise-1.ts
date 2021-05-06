function anotherFunction() {
    // unknown time
}

// 1 + 1 + 1 + n + n + n + n
// 3 + 4n
// O(3 + 4n) => O(n)
function funChallenge(input: number[]) {
    let a = 10 // O(1)
    a = 50 + 3 // O(1)

    // O(n)
    for (let i = 0; i < input.length; i++) {
        anotherFunction() // O(n)
        const stranger = true // O(n)
        a++ // O(n)
    }

    return a // O(1)
}
