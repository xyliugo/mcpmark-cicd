# MCPMark CI/CD

A Node.js project with deployment status workflow.

## Deployment Status

This repository uses an automated deployment workflow that:
- Runs quality checks (lint and test) on push to main
- Creates deployment tracking issues
- Prepares rollback artifacts
- Tracks deployment status

## Workflow

Push to main branch to trigger the deployment status workflow.

## Deployment Status Workflow

The `deployment-status.yml` workflow provides end-to-end automation for:
- Pre-deployment quality checks
- Rollback preparation and artifact creation
- Post-deployment verification and issue management

When you push to the `main` branch:
1. The workflow runs lint and test commands
2. Creates a deployment tracking issue
3. Prepares comprehensive rollback artifacts
4. Marks deployment as completed

### Rollback Artifacts

Rollback packages include:
- Executable rollback script with error handling
- Configuration backups (package.json, package-lock.json, .env.example)
- Dependency verification script
- Detailed rollback documentation
- Compressed package with SHA256 checksums

Artifacts are available for 30 days in the Actions tab.
