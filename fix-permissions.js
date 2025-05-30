const fs = require('fs');
const path = require('path');

console.log('Fixing Next.js development permissions...');

// Ensure the .next directory exists with proper permissions
const nextDir = path.join(__dirname, '.next');
try {
  if (!fs.existsSync(nextDir)) {
    fs.mkdirSync(nextDir, { recursive: true });
    console.log('Created .next directory');
  }

  // Ensure the static/development directory exists
  const staticDir = path.join(nextDir, 'static');
  if (!fs.existsSync(staticDir)) {
    fs.mkdirSync(staticDir, { recursive: true });
    console.log('Created .next/static directory');
  }

  const devDir = path.join(staticDir, 'development');
  if (!fs.existsSync(devDir)) {
    fs.mkdirSync(devDir, { recursive: true });
    console.log('Created .next/static/development directory');
  }

  // Create a test file to verify write permissions
  const testFile = path.join(devDir, '_test_write.txt');
  fs.writeFileSync(testFile, 'Testing write permissions');
  console.log('Successfully wrote test file, permissions should be correct');
  
  // Clean up test file
  fs.unlinkSync(testFile);
  console.log('Cleaned up test file');

  console.log('\nDirectory structure verified and permissions look good.');
  console.log('Now try running the development server with:');
  console.log('npm run dev:fast');
} catch (err) {
  console.error('Error fixing permissions:', err);
  console.log('\nYou may need to run your command prompt/terminal as Administrator');
  console.log('Or try changing the location of your project to a directory with full permissions');
} 