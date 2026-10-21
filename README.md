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
