const zfill = (number, width) => {
    let numberOutput = Math.abs(number);
    let length = number.toString().length;
    let zero = "0";

    if (width <= length) {
        if (number < 0) {
            return "-" + numberOutput.toString();
        } else {
            return numberOutput.toString();
        }
    } else {
        if (number < 0) {
            return "-" + zero.repeat(width - length) + numberOutput.toString();
        } else {
            return zero.repeat(width - length) + numberOutput.toString();
        }
    }
};

module.exports = {
    zfill,
};
