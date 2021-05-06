import { performance } from "perf_hooks"

const nemo = ["nemo", ...new Array(100000).fill("nemo")]

function findNemo(array: string[]) {
    const t0 = performance.now()

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "nemo") {
            console.log("Found NEMO")
        }
    }

    const t1 = performance.now()

    console.log(`Call to find Nemo took ${t1 - t0} milliseconds`)
}

findNemo(nemo)
