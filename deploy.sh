#!/bin/bash

# Build the project
npm run build

# Create a new git repository in the dist folder
cd dist
git init
git add .
git commit -m "Deploy to GitHub Pages"

# If you want to deploy to a custom domain, uncomment and modify the next line
# echo "your-custom-domain.com" > CNAME

# Force push to the gh-pages branch of your repository
# Replace the URL with your GitHub repository URL
git push -f https://github.com/Shourai-T/Womenday.git master:gh-pages

cd -
echo "Deployed to GitHub Pages!"