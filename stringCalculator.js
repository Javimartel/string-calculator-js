function stringCalculator(string) {
    if (string === '') {
        return "0";
    }
    let array = string.split(/[,\n]/);
    return array.reduce((a, b) => parseInt(a) + parseInt(b)).toString();
}

module.exports = stringCalculator;
