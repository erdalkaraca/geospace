#!/bin/bash
set -e

# Load .env file if it exists
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

# Check for dry-run flag
DRY_RUN=false
if [ "$1" = "--dry-run" ] || [ "$1" = "-n" ]; then
    DRY_RUN=true
    echo "🔍 DRY RUN MODE - No changes will be pushed"
    echo ""
fi

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

# Get changes since last tag (with file stats for better AI context)
CHANGES=$(git log $LATEST_TAG..HEAD --oneline --no-decorate --stat)

# Show changes
echo ""
echo "Changes since $LATEST_TAG:"
echo "---"
echo "$CHANGES"
echo "---"
echo ""

# Generate summary using LLM if API key is available
SUMMARY=""
if [ -n "$OPENAI_API_KEY" ] && [ -n "$CHANGES" ]; then
    echo "Generating AI summary of changes..."
    
    # Escape the changes for JSON
    CHANGES_ESCAPED=$(echo "$CHANGES" | sed 's/\\/\\\\/g' | sed 's/"/\\"/g' | sed ':a;N;$!ba;s/\n/\\n/g')
    PROMPT="Summarize the following git commits at an abstract level for end users. Focus on features, fixes, and improvements without technical implementation details. Keep it concise:\\n\\n$CHANGES_ESCAPED"
    
    # Call OpenAI API and parse response
    API_RESPONSE=$(curl -s https://api.openai.com/v1/chat/completions \
        -H "Content-Type: application/json" \
        -H "Authorization: Bearer $OPENAI_API_KEY" \
        -d "{\"model\":\"gpt-4o-mini\",\"messages\":[{\"role\":\"user\",\"content\":\"$PROMPT\"}],\"temperature\":0.7,\"max_tokens\":500}")
    
    # Extract content using python if available, otherwise fallback to grep/sed
    if command -v python3 &> /dev/null; then
        SUMMARY=$(echo "$API_RESPONSE" | python3 -c "import sys, json; data=json.load(sys.stdin); print(data['choices'][0]['message']['content'] if 'choices' in data else '')" 2>/dev/null)
    else
        SUMMARY=$(echo "$API_RESPONSE" | grep -o '"content"[[:space:]]*:[[:space:]]*"[^"]*"' | head -1 | sed 's/"content"[[:space:]]*:[[:space:]]*"\(.*\)"/\1/')
    fi
    
    if [ -n "$SUMMARY" ]; then
        echo ""
        echo "AI Summary:"
        echo "---"
        echo "$SUMMARY"
        echo "---"
        echo ""
    fi
fi

# Create empty commit with version pattern and changes in the body
if [ "$DRY_RUN" = true ]; then
    echo ""
    echo "📝 Would create commit with message:"
    echo "---"
    echo "Subject: Release: v$NEXT_VERSION"
    echo ""
    echo "Body:"
    if [ -z "$CHANGES" ]; then
        echo "No changes since last release."
    elif [ -n "$SUMMARY" ]; then
        echo "$SUMMARY"
    else
        echo "Changes since $LATEST_TAG:"
        echo "$CHANGES"
    fi
    echo "---"
    echo ""
    echo "🚫 DRY RUN: No commit created, nothing pushed"
else
    echo "Creating empty commit..."
    if [ -z "$CHANGES" ]; then
        git commit --allow-empty -m "Release: v$NEXT_VERSION" -m "No changes since last release."
    elif [ -n "$SUMMARY" ]; then
        git commit --allow-empty -m "Release: v$NEXT_VERSION" -m "$SUMMARY"
    else
        git commit --allow-empty -m "Release: v$NEXT_VERSION" -m "Changes since $LATEST_TAG:" -m "$CHANGES"
    fi

    # Push to trigger CI/CD
    echo "Pushing to remote..."
    git push

    echo "✓ Release v$NEXT_VERSION triggered successfully!"
fi

