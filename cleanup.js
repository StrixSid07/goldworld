const fs = require('fs');
const path = require('path');

console.log('Starting cleanup process...');

// Clear .next folder
console.log('Cleaning .next directory...');
try {
  const nextDir = path.join(__dirname, '.next');
  if (fs.existsSync(nextDir)) {
    fs.rmSync(nextDir, { recursive: true, force: true });
    console.log('.next directory removed successfully');
  } else {
    console.log('.next directory does not exist');
  }
} catch (err) {
  console.error('Error removing .next directory:', err);
}

// Cleaning node_modules/.cache
console.log('Cleaning node_modules/.cache directory...');
try {
  const cacheDir = path.join(__dirname, 'node_modules', '.cache');
  if (fs.existsSync(cacheDir)) {
    fs.rmSync(cacheDir, { recursive: true, force: true });
    console.log('node_modules/.cache directory removed successfully');
  } else {
    console.log('node_modules/.cache directory does not exist');
  }
} catch (err) {
  console.error('Error removing node_modules/.cache directory:', err);
}

console.log('\nCleanup complete. You can now run "npm run dev" with improved performance.');
console.log('\nTo improve development speed further:');
console.log('1. Run the development server with increased memory: set NODE_OPTIONS=--max-old-space-size=4096 && npm run dev');
console.log('2. Use the dev.bat file we created for a quick start with optimized settings'); 