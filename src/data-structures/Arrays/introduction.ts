const strings = ["a", "b", "c", "d"]

strings[2] // Access O(1)

strings.push("e") // Push O(1)
strings.pop() // Pop O(1)

strings.unshift("x") // Unshift O(n) - re-indexing is required

strings.splice(2, 0, "alien") // Splice O(n) - re-indexing is required

console.log(strings)
