#!/usr/bin/env bash
set -euo pipefail

# reset-to-build.sh
# Safely backup and reset the checked-out repository to match origin/build.
# Edit REPO_DIR to the repo path on the server before running.

REPO_DIR="/home/username/path/to/repo"
BACKUP_DIR="/home/username/repo-backups"
TIMESTAMP=$(date +%Y%m%d%H%M%S)

mkdir -p "$BACKUP_DIR"

echo "Backing up current repo to $BACKUP_DIR/lazycook-backup-$TIMESTAMP.tar.gz"
tar -C "$(dirname "$REPO_DIR")" -czf "$BACKUP_DIR/lazycook-backup-$TIMESTAMP.tar.gz" "$(basename "$REPO_DIR")"

echo "Entering repo: $REPO_DIR"
cd "$REPO_DIR"

echo "Fetching origin/build..."
git fetch origin build

echo "Setting git pull strategy to merge (no rebase)"
git config pull.rebase false

echo "Resetting to origin/build (this will overwrite local commits)..."
git reset --hard origin/build

echo "Cleaning untracked files..."
git clean -fdx

echo "Reset complete. Repository now matches origin/build."
