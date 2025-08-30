#!/bin/bash

REPO_URL="https://github.com/nbegly/cyber-interactive.git"
# # Change if moving the location of the directory
TARGET_DIR="$HOME/Desktop/cyber-interactive"
# # Change if moving to a different origin branch
BRANCH="live-host-v2"

echo "Updating from $REPO_URL ..."

if [ ! -d "$TARGET_DIR" ]; then
    echo "Creating target..."
    mkdir -p "$TARGET_DIR"
fi

cd "$TARGET_DIR" || { echo "Failed to enter $TARGET_DIR"; exit 1; }

if [ ! -d ".git" ]; then
    echo "Updating from $REPO_URL is not a git repo. Initializing and cloning fresh."
    git init
    git remote add origin "$REPO_URL"
    git fetch origin "$BRANCH"
    git checkout -b "$BRANCH" origin/"$BRANCH"
else
    echo "Repo found, updating..."
    git fetch origin "$BRANCH"
    git checkout "$BRANCH"
    git reset --hard origin/"$BRANCH"
fi

echo "Repo updated."