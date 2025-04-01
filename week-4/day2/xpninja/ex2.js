function stringChop(str, size) {
    if (size <= 0) return [];
    const result = [];
    for (let i = 0; i < str.length; i += size) {
      result.push(str.substr(i, size));
    }
    return result;
  }
  
  console.log(stringChop('developers', 2)); // Output: ["de", "ve", "lo", "pe", "rs"]
  console.log(stringChop('hello', 3)); // Output: ["hel", "lo"]
  