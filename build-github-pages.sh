#!/bin/bash

# This script builds the project for GitHub Pages deployment

# Exit on error
set -e

echo "Building for GitHub Pages deployment..."

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Build the project
echo "Building project..."
npm run build

# Create a 404.html page that's identical to index.html for client-side routing
echo "Creating 404.html page for client-side routing..."
cp dist/public/index.html dist/public/404.html

# Create .nojekyll file to bypass Jekyll processing
echo "Creating .nojekyll file..."
touch dist/public/.nojekyll

echo "Build complete! Files ready for GitHub Pages are in dist/public directory."
echo "To deploy to GitHub Pages:"
echo "1. Push this code to your GitHub repository"
echo "2. Go to your repository settings > Pages"
echo "3. Choose GitHub Actions as your source"