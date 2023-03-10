const stringCalculator = require('./stringCalculator');

// String vacía
test('devuelve 0 si la string esta vacia', () => {
    expect(stringCalculator('')).toBe("0");
});

// String con un número
test('devuelve 1 si la string es 1', () => {
    expect(stringCalculator('1')).toBe("1");
});

// String con dos números
test('devuelve 3 si la string es 1,2', () => {
    expect(stringCalculator('1,2')).toBe("3");
});

// String con más de dos números
test('devuelve 6 si la string es 1,2,3', () => {
    expect(stringCalculator('1,2,3')).toBe("6");
});

// String con salto de línea y comas
test('devuelve 6 si la string es 1\n2,3', () => {
    expect(stringCalculator('1\n2,3')).toBe("6");
});

test('devuelve 6 si la string es 1,2\n3', () => {
    expect(stringCalculator('1,2\n3')).toBe("6");
});
