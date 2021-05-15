export default class MyHashTable<Value> {
    data: Value[]

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
        this.data[hash] = value
    }

    public get(key: string) {
        const hash = this._hash(key)
        return this.data[hash]
    }
}

function validate<Value>(myHashTable: MyHashTable<Value>, key: string, value: Value) {
    myHashTable.set(key, value)
    const result = myHashTable.get(key)

    console.log(`Output`, { key, result })
    if (result !== value) throw new Error(`Invalid output: ${result}`)
}

const myHashTable = new MyHashTable<number>(50)
validate(myHashTable, "grapes", 10000)
validate(myHashTable, "apples", 9)
