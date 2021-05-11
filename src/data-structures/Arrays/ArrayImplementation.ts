export default class MyArray<Type> {
    private length: number
    private data: { [key: string]: Type }

    constructor() {
        this.length = 0
        this.data = {}
    }

    // O(1)
    get(index: number) {
        return this.data[index]
    }

    // O(1)
    push(item: Type) {
        this.data[this.length] = item
        this.length++

        return this.length
    }

    // O(1)
    pop() {
        this.length--

        const item = this.data[this.length]
        delete this.data[this.length]

        return item
    }

    // O(n)
    deleteAtIndex(index: number) {
        const item = this.data[index]

        this.shiftItems(index)

        return item
    }

    shiftItems(index: number) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }

        delete this.data[this.length - 1]
        this.length--
    }
}

const newArray = new MyArray<string>()
newArray.push("hello")
newArray.push("world")
newArray.push("!")

newArray.deleteAtIndex(1)

console.log(newArray)
