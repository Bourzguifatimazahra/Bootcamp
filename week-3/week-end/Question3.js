function colorConverter(input) {
    // Check if input is HEX
    if (input.startsWith("#")) {
        // HEX to RGB conversion
        const hex = input.substring(1);
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return `rgb(${r}, ${g}, ${b})`;
    }
    
    // Check if input is RGB
    if (input.startsWith("rgb")) {
        // RGB to HEX conversion
        const rgbValues = input.match(/\d+/g);
        const rHex = parseInt(rgbValues[0]).toString(16).padStart(2, '0');
        const gHex = parseInt(rgbValues[1]).toString(16).padStart(2, '0');
        const bHex = parseInt(rgbValues[2]).toString(16).padStart(2, '0');
        return `#${rHex}${gHex}${bHex}`;
    }

    return null; // Return null if the format is not recognized
}
