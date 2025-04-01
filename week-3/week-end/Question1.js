function cleanTheRoom(arr) {
    // Separate numbers and strings into different arrays
    const numbers = arr.filter(item => typeof item === 'number');
    const strings = arr.filter(item => typeof item === 'string');
    
    // Helper function to organize and group identical values
    function organizeArray(array) {
        const grouped = [];
        const unique = [...new Set(array)].sort((a, b) => a - b);

        unique.forEach(item => {
            const itemGroup = array.filter(x => x === item);
            grouped.push(itemGroup.length > 1 ? itemGroup : itemGroup[0]);
        });

        return grouped;
    }

    // Organize both numbers and strings
    const organizedNumbers = organizeArray(numbers);
    const organizedStrings = organizeArray(strings);

    return [...organizedNumbers, ...organizedStrings];
}