function cleanArray(arr) {
    return arr.filter(value => value !== null && value !== 0 && value !== "" && value !== false && value !== undefined && !Number.isNaN(value));
}

const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
console.log(cleanArray(sampleArray)); // Output: [15, -22, 47]
