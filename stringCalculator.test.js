const stringCalculator = require('./stringCalculator');

// "" => "0"
// "1" => "1"

test('devuelve 0 si la string esta vacia', () => {
    expect(stringCalculator('')).toBe("0");
    }
);

test('devuelve 1 si la string es 1', () => {
    expect(stringCalculator('1')).toBe("1");
});