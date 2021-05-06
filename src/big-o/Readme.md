# Big O Notation

## Big Oh - Worst Case

### Rules

1. Worst Case: Analyze the worst case performance of the algorithm
2. Remove constants
3. Different terms for inputs
4. Drop non-dominants i.e. O(n + n^2) => (n^2)

> Add steps in order (+); multiply nested steps (\*);

### Cheat sheet

-   O(1) Constant: no loops
-   O(log N) Logarithmic: usually searching algorithms have log n if they are sorted (Binary Search)
-   O(n) Linear: for loops, while loops through n items
-   O(n log(n)) Log Linear: usually sorting operations
-   O(n^2) Quadratic: every element in a collection needs to be compared to ever other element. Two nested loops
-   O(2^n) Exponential: recursive algorithms that solves a problem of size N
-   O(n!) Factorial: you are adding a loop for every element

> Iterating through half a collection is still O(n)

> Two separate collections: O(a \* b)

## Big Theta - Average/Tight Case

## Big Omega - Best Case

## FAQ

### What can cause time in a function?

-   Operations (+, -, \*, /)
-   Comparisons (<, >, ==)
-   Looping (for, while)
-   Outside Function call (function())

### What causes Space complexity?

-   Variables
-   Data Structures
-   Function Call
-   Allocations
