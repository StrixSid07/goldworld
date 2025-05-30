@echo off
echo Starting optimized development server...
echo.

set NODE_OPTIONS=--max-old-space-size=4096
echo NODE_OPTIONS set to allow more memory usage

echo Running Next.js in development mode with optimizations...
echo.

npm run dev

pause 