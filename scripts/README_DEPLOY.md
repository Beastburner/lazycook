Hostinger deploy helper
======================

This folder contains helper commands and a script to reset a Hostinger checkout to match the `origin/build` branch.

1) Which file to edit before running

- `reset-to-build.sh`: update `REPO_DIR` and `BACKUP_DIR` variables to match the path on the Hostinger server.

2) Quick non-interactive one-liner (run from your local machine, replace placeholders):

```powershell
ssh username@host "cd /home/username/path/to/repo && git fetch origin build && git config pull.rebase false && git reset --hard origin/build && git clean -fdx && echo 'Reset to origin/build complete'"
```

3) Safer interactive sequence (SSH into Hostinger):

```bash
ssh username@host
cd /home/username/path/to/repo
git rev-parse --abbrev-ref HEAD
git status --porcelain
# Backup
cd ..
mkdir -p repo-backups
tar -czf repo-backups/lazycook-backup-$(date +%Y%m%d%H%M%S).tar.gz path/to/repo
cd /home/username/path/to/repo
git fetch origin build
git config pull.rebase false
git reset --hard origin/build
git clean -fdx
ls -la
```

4) Upload & run the provided script from Windows PowerShell (uses `scp` and `ssh`):

```powershell
scp .\scripts\reset-to-build.sh username@host:/home/username/
ssh username@host 'bash /home/username/reset-to-build.sh'
```

5) Notes

- The reset is destructive to any uncommitted or local divergent commits in the Hostinger checkout. The script makes a compressed backup before resetting.
- If you cannot use SSH, use Hostinger control panel to redeploy or delete the repo folder and clone fresh specifying branch `build`.
