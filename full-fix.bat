@echo off
echo Running comprehensive Next.js development fix...
echo.

echo Step 1: Cleaning up temporary files...
call node cleanup.js
echo.

echo Step 2: Fixing directory permissions...
call node fix-permissions.js
echo.

echo Step 3: Setting optimal memory settings...
set NODE_OPTIONS=--max-old-space-size=4096
echo NODE_OPTIONS set to allow more memory usage
echo.

echo Step 4: Starting Next.js in development mode...
echo The development server should now work correctly with better performance.
echo.

npm run dev

pause 