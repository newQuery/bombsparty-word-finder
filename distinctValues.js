const fs = require('fs');
const path = require('path');

const folderPath = 'dic';
const mergedValues = [];

fs.readdirSync(folderPath).forEach((filename) => {
    if (filename.endsWith('.json')) {
        const filePath = path.join(folderPath, filename);
        const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const values = Object.values(jsonData);
        values.forEach(i => mergedValues.push(i))
    }
});

const flattenedValues = mergedValues.flatMap((value) => value.split(' '));
const distinctValues = [...new Set(flattenedValues)];


const sortedDistinctValues = distinctValues.sort();

const outputFilePath = 'distinct_values.json';

fs.writeFileSync(outputFilePath, JSON.stringify(sortedDistinctValues, null, 2));
