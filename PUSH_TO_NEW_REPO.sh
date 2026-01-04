#!/bin/bash

# Instructions:
# 1. Replace YOUR_USERNAME with your GitHub username
# 2. Replace YOUR_NEW_REPO_NAME with the name of your new repository
# 3. Run this script: bash PUSH_TO_NEW_REPO.sh

# Example: NEW_REPO_URL="https://github.com/manojsaibangaru/roomie-frontend.git"
NEW_REPO_URL="https://github.com/YOUR_USERNAME/YOUR_NEW_REPO_NAME.git"

echo "Step 1: Removing old remote..."
git remote remove origin

echo "Step 2: Adding new remote..."
git remote add origin "$NEW_REPO_URL"

echo "Step 3: Showing current remotes..."
git remote -v

echo ""
echo "Step 4: Ready to push!"
echo "Now run: git push -u origin Accmmodation-Front-End"
echo "Or if you want to push to main branch:"
echo "  git checkout -b main"
echo "  git push -u origin main"

