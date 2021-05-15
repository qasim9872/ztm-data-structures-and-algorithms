export default class MyHashTable<Value> {
    data: Array<Array<Array<string | Value>>>

    constructor(size: number) {
        this.data = new Array(size)
    }

    private _hash(key: string) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }

    public set(key: string, value: Value) {
        const hash = this._hash(key)
        if (!this.data[hash]) {
            this.data[hash] = []
        }
        this.data[hash].push([key, value])
    }

    public get(key: string) {
        const hash = this._hash(key)
        const entries = this.data[hash]

        if (!entries) return

        if (entries.length === 1) {
            return entries[0][1]
        } else {
            const entry = entries.find((entryToCheck) => entryToCheck[0] === key) // O(n)
            return entry && entry[1]
        }
    }

    public keys() {
        const foundKeys: string[] = []
        for (const bucket of this.data) {
            if (!bucket) {
                continue
            }

            for (const entries of bucket) {
                foundKeys.push(entries[0] as string)
            }
        }

        return foundKeys
    }
}

function validate<Value>(myHashTable: MyHashTable<Value>, key: string, value: Value) {
    myHashTable.set(key, value)
    const result = myHashTable.get(key)

    console.log(`Output`, { key, result })
    if (result !== value) throw new Error(`Invalid output: ${result}`)
}

const myHashTable = new MyHashTable<number>(2)
myHashTable.set("hello", 1)
myHashTable.set("world", 2)

console.log("keys: ", myHashTable.keys())

validate(myHashTable, "grapes", 10000)
validate(myHashTable, "apples", 9)

myHashTable.get("magic")
