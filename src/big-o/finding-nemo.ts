const nemo = ["nemo", ...new Array(100).fill("nemo")]

function findNemo(array: string[]) {
    // Runtime: O(n) --> Linear Time
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "nemo") {
            console.log("Found NEMO")
        }
    }
}

findNemo(nemo)
