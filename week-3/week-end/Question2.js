function findTwoSum(arr, target) {
    const seen = new Set();
    
    for (let num of arr) {
        const complement = target - num;
        if (seen.has(complement)) {
            return [complement, num];
        }
        seen.add(num);
    }
    
    return null; // Return null if no solution is found
}