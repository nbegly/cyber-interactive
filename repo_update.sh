#!/bin/bash

REPO_URL="https://github.com/nbegly/doctrina-optimos.git"
# # Change if moving the location of the directory
TARGET_DIR="/var/www/pwa/"

echo "Updating from $REPO_URL ..."

if [ ! -d "$TARGET_DIR" ]; then
    echo "Creating target..."
    mkdir -p "$TARGET_DIR"
fi

cd "$TARGET_DIR" || { echo "Failed to enter $TARGET_DIR"; exit 1; }

if [ ! -d ".git" ]; then
    echo "Updating from $REPO_URL is not a git repo. Initializing and cloning fresh."
    git init
    git remote add origin "$REPO_URL" || git remote set-url origin "$REPO_URL"
    git fetch origin main
    git checkout origin/main
else
    echo "Repo found, updating..."
    git fetch origin main
    git checkout main
    git reset --hard origin/main
fi

echo "Repo updated."
