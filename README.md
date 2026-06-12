# Banh Da Nem

React static page for the article "Cách làm bánh đa nem giòn rụm thơm ngon đúng vị truyền thống".

Source article: https://eva.vn/bep-eva/cach-lam-banh-da-nem-gion-rum-thom-ngon-dung-vi-truyen-thong-c162a440549.html

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Production Build

```bash
npm run build
```

The static build is generated in `dist/`.

## Run With Docker Compose

```bash
docker compose up -d --build
```

Open http://localhost.

## Deploy With Terraform Project

Push this repository to GitHub, then set these values in `../aws-ec2-monolith-iac/terraform.tfvars`:

```hcl
app_repository_url = "https://github.com/trantrongdai/banhdanem.git"
app_repository_ref = "main"
app_directory      = "."
```

The EC2 bootstrap script will clone this repo and run:

```bash
docker compose up -d --build
```
