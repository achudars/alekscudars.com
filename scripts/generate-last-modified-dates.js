import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES Module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This script runs during build time to generate a JSON file with last updated dates
// for each page based on Git commit history

console.log('Generating last updated dates from Git history...');

const pagesDir = path.join(__dirname, '../pages');
const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.js'));
const lastUpdatedData = {};

files.forEach(file => {
  try {
    // Get the last commit date for each file
    const filePath = path.join('pages', file);
    const lastCommitDate = execSync(
      `git log -1 --format=%cd --date=iso ${filePath}`,
      { encoding: 'utf-8' }
    ).trim();

    if (lastCommitDate) {
      lastUpdatedData[file] = lastCommitDate;
    }
  } catch (error) {
    console.error(`Error getting date for ${file}:`, error.message);
    // Use build date as fallback if Git command fails
    lastUpdatedData[file] = new Date().toISOString();
  }
});

// Ensure the public directory exists
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write the data to a JSON file that will be included in the build
const outputPath = path.join(publicDir, 'last-updated-dates.json');

try {
  // Convert to JSON and validate it can be parsed back
  const jsonData = JSON.stringify(lastUpdatedData, null, 2);
  JSON.parse(jsonData); // Test if it's valid JSON

  // Write the file
  fs.writeFileSync(outputPath, jsonData, { encoding: 'utf8' });
  console.log(`Last updated dates saved to ${outputPath}`);
} catch (error) {
  console.error('Error creating last-updated-dates.json:', error.message);
  // Create a minimal valid JSON as fallback
  fs.writeFileSync(outputPath, '{}', { encoding: 'utf8' });
  console.error('Created empty JSON file as fallback');
}
