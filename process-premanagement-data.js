const fs = require('fs');

// Read the master CSV file
const csvContent = fs.readFileSync('public/data/premanagement-data.csv', 'utf8');
const lines = csvContent.trim().split('\n');
const headers = lines[0].split(',').map(h => h.trim().replace('\r', ''));

console.log('Processing premanagement data...');
console.log('Headers:', headers);

// Filter out empty rows and rows that are just separators
const dataLines = lines.slice(1).filter(line => {
  const cells = line.split(',');
  return cells.some(cell => cell.trim() && cell.trim() !== '');
});

console.log('Valid data lines:', dataLines.length);

// Function to count occurrences and create CSV
function createCSVFromColumn(columnIndex, filename) {
  const counts = {};
  
  dataLines.forEach(line => {
    const cells = line.split(',');
    const value = cells[columnIndex] ? cells[columnIndex].trim() : '';
    
    if (value && value !== '' && value !== 'undefined') {
      counts[value] = (counts[value] || 0) + 1;
    }
  });
  
  // Convert to CSV format
  const csvLines = ['Response,Count'];
  Object.entries(counts)
    .sort(([,a], [,b]) => b - a) // Sort by count descending
    .forEach(([response, count]) => {
      csvLines.push(`"${response}",${count}`);
    });
  
  const csvOutput = csvLines.join('\n');
  fs.writeFileSync(`public/data/${filename}`, csvOutput);
  console.log(`Created ${filename} with ${Object.keys(counts).length} unique values`);
}

// Function to create average grade distribution
function createGradeDistribution() {
  const grades = [];
  
  dataLines.forEach(line => {
    const cells = line.split(',');
    const grade = cells[4] ? parseInt(cells[4].trim()) : null;
    
    if (grade && !isNaN(grade) && grade >= 80 && grade <= 100) {
      grades.push(grade);
    }
  });
  
  // Create grade ranges
  const ranges = {
    '80-84': 0,
    '85-89': 0,
    '90-94': 0,
    '95-100': 0
  };
  
  grades.forEach(grade => {
    if (grade >= 80 && grade <= 84) ranges['80-84']++;
    else if (grade >= 85 && grade <= 89) ranges['85-89']++;
    else if (grade >= 90 && grade <= 94) ranges['90-94']++;
    else if (grade >= 95 && grade <= 100) ranges['95-100']++;
  });
  
  const csvLines = ['Grade Range,Count'];
  Object.entries(ranges).forEach(([range, count]) => {
    csvLines.push(`"${range}",${count}`);
  });
  
  const csvOutput = csvLines.join('\n');
  fs.writeFileSync('public/data/hs-average.csv', csvOutput);
  console.log('Created hs-average.csv');
}

// Function to create coding level distribution (1-10 scale)
function createCodingLevelDistribution() {
  const levels = {};
  
  dataLines.forEach(line => {
    const cells = line.split(',');
    const level = cells[2] ? parseInt(cells[2].trim()) : null;
    
    if (level && !isNaN(level) && level >= 1 && level <= 10) {
      levels[level] = (levels[level] || 0) + 1;
    }
  });
  
  const csvLines = ['Coding Level,Count'];
  for (let i = 1; i <= 10; i++) {
    csvLines.push(`"${i}",${levels[i] || 0}`);
  }
  
  const csvOutput = csvLines.join('\n');
  fs.writeFileSync('public/data/coding-level.csv', csvOutput);
  console.log('Created coding-level.csv');
}

// Function to create HS preparation rating distribution (1-10 scale)
function createHSPreparationDistribution() {
  const ratings = {};
  
  dataLines.forEach(line => {
    const cells = line.split(',');
    const rating = cells[10] ? parseInt(cells[10].trim()) : null;
    
    if (rating && !isNaN(rating) && rating >= 1 && rating <= 10) {
      ratings[rating] = (ratings[rating] || 0) + 1;
    }
  });
  
  const csvLines = ['Preparation Rating,Count'];
  for (let i = 1; i <= 10; i++) {
    csvLines.push(`"${i}",${ratings[i] || 0}`);
  }
  
  const csvOutput = csvLines.join('\n');
  fs.writeFileSync('public/data/hs-preparation.csv', csvOutput);
  console.log('Created hs-preparation.csv');
}

// Create individual CSV files
createCSVFromColumn(0, 'dream-job.csv');           // Dream Job
createCSVFromColumn(1, 'hs-vs-uni.csv');          // HS Vs Uni
createCSVFromColumn(3, 'internship-experience.csv'); // Internship Experience
createCSVFromColumn(5, 'favorite-subject.csv');    // Fav Subject
createCSVFromColumn(6, 'academic-programs.csv');   // Academic Programs
createCSVFromColumn(7, 'extracurriculars.csv');   // Extracurriculars
createCSVFromColumn(8, 'part-time-job.csv');      // Part-Time Job
createCSVFromColumn(9, 'grad-awards.csv');        // Grad Awards

// Create special distributions
createGradeDistribution();
createCodingLevelDistribution();
createHSPreparationDistribution();

console.log('All premanagement CSV files created successfully!');
