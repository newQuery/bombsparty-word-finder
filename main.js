const fs = require('fs');

function findWordContainingSubstring(substring, distinctValues) {
    const matchingWord = distinctValues.find((word) => word.includes(substring));

    return matchingWord;
}

if (process.argv.length !== 3) {
    console.log('Usage: node main.js <substring>');
    process.exit(1);
}

const searchTerm = process.argv[2];

try {
    // Load the distinct values from the JSON file
    const distinctValues = JSON.parse(fs.readFileSync('distinct_values.json', 'utf8'));

    const matchingWord = findWordContainingSubstring(searchTerm, distinctValues);

    if (matchingWord) {
        console.log(`Word containing '${searchTerm}': ${matchingWord}`);
    } else {
        console.log(`No word containing '${searchTerm}' found.`);
    }
} catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
}