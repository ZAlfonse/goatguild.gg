# 🐐 Goat Guild Website

World of Warcraft guild website for **Goat Guild**, built with Astro and hosted on S3.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to S3
npm run deploy
```

## Project Structure

```
goatguild.gg/
├── src/
│   ├── components/       # Reusable UI components
│   ├── data/            # Guild data (edit these!)
│   │   ├── guild.ts     # Guild info, schedule
│   │   ├── progression.ts
│   │   ├── classComposition.ts
│   │   ├── addons.ts
│   │   └── news.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── public/
│   ├── profiles/        # Addon profile downloads
│   └── images/          # Static images
└── scripts/
    └── deploy.sh
```

## Updating Content

### Guild Info & Schedule
Edit `src/data/guild.ts`:
- Guild name, server, description
- Discord link
- Raid schedule
- Recruitment status

### Raid Progression
Edit `src/data/progression.ts`:
- Current tier progress
- Historical progression
- Achievements

### Class Composition
Edit `src/data/classComposition.ts`:
- Add/remove players
- Update class picks
- Mark confirmations

### News & Events
Edit `src/data/news.ts`:
- Add announcements
- Update upcoming events
- Pin important posts

### Addons
Edit `src/data/addons.ts`:
- Required addons
- Recommended addons
- Profile download links

## Deployment

### Manual Deploy
```bash
./scripts/deploy.sh
```

### GitHub Actions (Automatic)
1. Add these secrets to your GitHub repo:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - (Optional) `CLOUDFRONT_DISTRIBUTION_ID`

2. Push to `main` branch - deploys automatically!

## S3 Setup Notes

Your bucket `s3://goatguild.gg` should be configured for static website hosting:

1. Enable static website hosting in bucket properties
2. Set index document to `index.html`
3. Configure bucket policy for public read access
4. (Recommended) Set up CloudFront for HTTPS

## Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Hosting**: AWS S3
- **CI/CD**: GitHub Actions
