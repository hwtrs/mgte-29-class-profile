const fs = require('fs');

// Function to clean CSV files by removing numeric-only responses
function cleanCSV(filename) {
  const filePath = `public/data/${filename}`;
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.trim().split('\n');
  
  // Keep header
  const cleanedLines = [lines[0]];
  
  // Filter out lines where the response is just a number (likely respondent counts)
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const [response] = line.split(',');
    const cleanResponse = response.replace(/"/g, '').trim();
    
    // Skip if the response is just a number (likely total respondent count)
    if (!/^\d+$/.test(cleanResponse)) {
      cleanedLines.push(line);
    } else {
      console.log(`Removed numeric response "${cleanResponse}" from ${filename}`);
    }
  }
  
  fs.writeFileSync(filePath, cleanedLines.join('\n'));
  console.log(`Cleaned ${filename}`);
}

// List of CSV files to clean
const filesToClean = [
  'extracurriculars.csv',
  'part-time-job.csv',
  'internship-experience.csv',
  'hs-vs-uni.csv',
  'favorite-subject.csv',
  'grad-awards.csv',
  'dream-job.csv',
  'academic-programs.csv'
];

console.log('Cleaning CSV files...');

filesToClean.forEach(filename => {
  cleanCSV(filename);
});

console.log('All CSV files cleaned!');
