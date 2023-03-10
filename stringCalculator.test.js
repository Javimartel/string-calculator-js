const stringCalculator = require('./stringCalculator');

// "" => "0"

test('devuelve 0 si la string esta vacia', () => {
    expect(stringCalculator('')).toBe("0");
    }
);
