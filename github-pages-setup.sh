#!/bin/bash

# This script helps set up a GitHub repository for GitHub Pages deployment

echo "GitHub Pages Repository Setup Helper"
echo "==================================="
echo "This script will help you set up a GitHub repository for this project."
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "Error: Git is not installed. Please install Git first."
    exit 1
fi

# Check if current directory is a git repository
if [ -d ".git" ]; then
    echo "This directory is already a Git repository."
    
    # Check for remote origin
    if git remote get-url origin &> /dev/null; then
        REMOTE_URL=$(git remote get-url origin)
        echo "Remote 'origin' is set to: $REMOTE_URL"
    else
        echo "No remote 'origin' found. You need to add a remote repository."
        
        read -p "Enter your GitHub repository URL (e.g., https://github.com/username/repo.git): " REPO_URL
        
        if [ -z "$REPO_URL" ]; then
            echo "No URL provided. Exiting."
            exit 1
        fi
        
        git remote add origin "$REPO_URL"
        echo "Remote 'origin' added: $REPO_URL"
    fi
else
    echo "Initializing Git repository..."
    git init
    
    read -p "Enter your GitHub repository URL (e.g., https://github.com/username/repo.git): " REPO_URL
    
    if [ -z "$REPO_URL" ]; then
        echo "No URL provided. Initialized local repository only."
    else
        git remote add origin "$REPO_URL"
        echo "Remote 'origin' added: $REPO_URL"
    fi
fi

# Create .gitignore if it doesn't exist
if [ ! -f ".gitignore" ]; then
    echo "Creating .gitignore file..."
    cat > .gitignore << 'EOL'
# Dependencies
/node_modules
/.pnp
.pnp.js

# Testing
/coverage

# Production
/dist
/build

# Misc
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
EOL
    echo ".gitignore file created"
fi

echo ""
echo "Repository setup completed!"
echo ""
echo "Next steps:"
echo "1. Make your changes to the code"
echo "2. Stage your changes:    git add ."
echo "3. Commit your changes:   git commit -m \"Initial commit\""
echo "4. Push to GitHub:        git push -u origin main"
echo ""
echo "After pushing to GitHub:"
echo "1. Go to your repository on GitHub"
echo "2. Navigate to Settings > Pages"
echo "3. Select 'GitHub Actions' as the source"
echo ""
echo "The GitHub workflow will automatically build and deploy your site."