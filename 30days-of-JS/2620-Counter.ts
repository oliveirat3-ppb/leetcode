function createCounter(n: number): () => number {
    let counter : number = n
    return () => counter++;
}


/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */