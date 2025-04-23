#!/bin/bash

# This script creates a project ZIP file optimized for GitHub Pages deployment

# Exit on error
set -e

echo "Creating optimized GitHub Pages deployment package..."

# Create a zip file with deployment fixes
echo "Creating deployment package with path fixes..."

# Create a temporary directory for the modified files
rm -rf gh-pages-temp
mkdir -p gh-pages-temp
cp -r $(ls -A | grep -v "gh-pages-temp") gh-pages-temp/

# Update the index.html file for GitHub Pages
sed -i 's|href="/favicon.svg"|href="./favicon.svg"|g' gh-pages-temp/client/index.html
sed -i 's|src="/src/main.tsx"|src="./src/main.tsx"|g' gh-pages-temp/client/index.html

# Update the build script for GitHub Pages
cat > gh-pages-temp/build-github-pages.sh << 'EOF'
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

# Export the environment variable for base URL
export VITE_BASE_URL="./"

# Build the project
echo "Building project..."
npm run build

# Create a 404.html page that's identical to index.html for client-side routing
echo "Creating 404.html page for client-side routing..."
cp dist/public/index.html dist/public/404.html

# Create .nojekyll file to bypass Jekyll processing
echo "Creating .nojekyll file..."
touch dist/public/.nojekyll

# Fix asset paths in HTML files
echo "Fixing asset paths for GitHub Pages..."
sed -i 's|href="/assets/|href="./assets/|g' dist/public/index.html dist/public/404.html
sed -i 's|src="/assets/|src="./assets/|g' dist/public/index.html dist/public/404.html

echo "Build complete! Files ready for GitHub Pages are in dist/public directory."
echo "To deploy to GitHub Pages:"
echo "1. Push this code to your GitHub repository"
echo "2. Go to your repository settings > Pages"
echo "3. Choose GitHub Actions as your source"
EOF

# Make the script executable
chmod +x gh-pages-temp/build-github-pages.sh

# Update GitHub workflow file
cat > gh-pages-temp/.github/workflows/deploy.yml << 'EOF'
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
        with:
          static_site_generator: vitejs
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build static site
        run: |
          chmod +x ./build-github-pages.sh
          ./build-github-pages.sh
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist/public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
EOF

# Create a single import file for API with GitHub Pages support
cat > gh-pages-temp/client/src/api.ts << 'EOF'
// Define base URL - this will be overridden in GitHub Pages build
const BASE_URL = import.meta.env.VITE_BASE_URL || '';

// Contact form submission API
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  console.log("Form submission:", formData);
  
  // For GitHub Pages (static site), we'll simulate a successful submission
  // In a real app, this would be a fetch to your API endpoint
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "Message sent successfully!" });
    }, 1000);
  });
};

// API status check
export const getApiStatus = async () => {
  // For GitHub Pages deployment (static site)
  return { status: "online", message: "API is operational" };
};
EOF

# Create a ZIP file with all the changes
cd gh-pages-temp
zip -r ../fractal_website_github_pages_fix.zip .
cd ..

# Clean up
rm -rf gh-pages-temp

echo "Package created: fractal_website_github_pages_fix.zip"
echo ""
echo "Instructions for GitHub Pages deployment:"
echo "1. Extract this ZIP file and push the contents to your GitHub repository"
echo "2. Go to your repository settings > Pages"
echo "3. Choose GitHub Actions as your source"
echo "4. The workflow will automatically build and deploy your site"