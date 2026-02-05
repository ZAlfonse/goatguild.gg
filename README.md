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
```

## Project Structure

```
goatguild.gg/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── AddonList.astro
│   │   ├── ClassRoster.astro
│   │   ├── NewsCard.astro
│   │   ├── ProgressionCard.astro
│   │   └── ScheduleTable.astro
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
│   ├── favicon.ico      # Browser tab icon
│   ├── images/          # Static images (guild icons)
│   └── profiles/        # Addon profile downloads
├── scripts/
│   └── deploy.sh        # Manual S3 deploy script
├── .github/
│   └── workflows/
│       └── deploy.yml   # CI/CD auto-deploy on push to main
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind CSS theme (WoW class colors)
└── tsconfig.json        # TypeScript configuration
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

## Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Hosting**: AWS S3
- **CI/CD**: GitHub Actions
