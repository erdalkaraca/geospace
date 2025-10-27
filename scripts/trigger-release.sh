#!/bin/bash
set -e

# Fetch latest tags from remote
echo "Fetching latest tags..."
git fetch --tags

# Get the latest tag
LATEST_TAG=$(git tag --sort=-v:refname | head -1)

if [ -z "$LATEST_TAG" ]; then
    echo "No tags found. Starting with version 0.1.0"
    NEXT_VERSION="0.1.0"
else
    echo "Latest tag: $LATEST_TAG"
    
    # Parse version parts (assuming semantic versioning x.y.z)
    if [[ $LATEST_TAG =~ ^v?([0-9]+)\.([0-9]+)\.([0-9]+)$ ]]; then
        MAJOR="${BASH_REMATCH[1]}"
        MINOR="${BASH_REMATCH[2]}"
        PATCH="${BASH_REMATCH[3]}"
        
        # Increment patch version
        PATCH=$((PATCH + 1))
        NEXT_VERSION="$MAJOR.$MINOR.$PATCH"
    else
        echo "Error: Could not parse version from tag: $LATEST_TAG"
        exit 1
    fi
fi

echo "Next version: $NEXT_VERSION"

# Create empty commit with version pattern
echo "Creating empty commit..."
git commit --allow-empty -m "Release: v$NEXT_VERSION"

# Push to trigger CI/CD
echo "Pushing to remote..."
git push

echo "✓ Release v$NEXT_VERSION triggered successfully!"

