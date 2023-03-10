const stringCalculator = require('./stringCalculator');

test('devuelve 0 si la string esta vacia', () => {
    expect(stringCalculator('')).toBe("0");
    }
);

test('devuelve 1 si la string es 1', () => {
    expect(stringCalculator('1')).toBe("1");
});

test('devuelve 3 si la string es 1,2', () => {
    expect(stringCalculator('1,2')).toBe("3");
});

test('devuelve 6 si la string es 1,2,3', () => {
    expect(stringCalculator('1,2,3')).toBe("6");
});

test('devuelve 6 si la string es 1\n2,3', () => {
    expect(stringCalculator('1\n2,3')).toBe("6");
});

test('devuelve 6 si la string es 1,2\n3', () => {
    expect(stringCalculator('1,2\n3')).toBe("6");
});
