function stringCalculator(string) {
    if (string === '') {
        return "0";
    }
    let array = string.split(',');
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += parseInt(array[i]);
    }
    return sum.toString();
}

module.exports = stringCalculator;
