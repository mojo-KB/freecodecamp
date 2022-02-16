function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum)
        return [startNum];
    else {
        let num = rangeOfNumbers(startNum, endNum - 1);
        num.push(endNum);
        return num;
    }
};



// Option 2
const rangeOfNumbers2 = (startNum, endNum) => {
        return startNum === endNum ? [startNum] :
            rangeOfNumbers2(startNum, endNum - 1).concat(endNum);
    }
    // Option 3

const range3 = (startNum, endNum) => {
    return startNum === endNum ? [startNum] : [...range3(startNum, endNum - 1), endNum];
}