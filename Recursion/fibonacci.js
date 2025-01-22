function fibonacciNonRecursion(n, n0=0, n1=1) {
    if (n === 0) {
        return n0;
    } else if (n === 1) {
        return n1;
    };

    let n2;

    for (let i = 1; i < n; i++) {
        n2 = n1 + n0;
        if (i + 1 !== n) {
            n0 = n1;
            n1 = n2;
        };
    };

    return n2;
};


function slowFibonacciRecursion(n) {
    if (n <= 1) {
        return n;
    };

    return slowFibonacciRecursion(n - 1) + slowFibonacciRecursion(n - 2);
};


function fastFibonacciRecursion(n, cache={}) {
    if (Object.keys(cache).includes(n)) {
        return cache[n];
    };
    
    if (n <= 1) {
        return n;
    };

    cache[n] = fastFibonacciRecursion(n - 1) + fastFibonacciRecursion(n - 2);
    return cache[n];
};
