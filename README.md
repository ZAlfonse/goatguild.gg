# 🐐 Goat Guild Website

World of Warcraft guild website for **Goat Guild**, built with Astro and hosted on S3.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
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

## Automatic Updates

Two scheduled GitHub Actions keep the site current:

| When (Eastern) | Workflow | What it does |
|---|---|---|
| 6 AM daily | `deploy.yml` | Runs `scripts/update-site-data.mjs` (Raider.io progression, Blizzard blue posts, WoW: Forever roster), commits `src/data/generated/` if it changed, then deploys. New boss kills and level-60 dings become news posts automatically. |
| 7 AM daily | `site-curator.yml` | Claude reads the fresh data and may propose theme/content/layout changes as a PR labeled `site-curator`. Merge to deploy, close to discard. Each new curator PR closes the previous open one (a day with no changes leaves it open). Edit `.github/site-curator.md` to change its brief. |

Both can be run on demand from the Actions tab ("Run workflow").

Setup (repo Settings):
- Variables `ANTHROPIC_FEDERATION_RULE_ID` (`fdrl_...`) and `ANTHROPIC_ORGANIZATION_ID`: required for the curator. Comes from Claude Console → Keys → Workload identity (GitHub Actions issuer, rule limited to this repo's `main` branch). No API key is stored.
- Settings → Actions → General → "Allow GitHub Actions to create and approve pull requests": required for the curator
- Secrets `BLIZZARD_CLIENT_ID` / `BLIZZARD_CLIENT_SECRET` (from develop.battle.net): optional, enables level-60 posts. Forever has no realms, so the guild is found by slug alone. Optional variables: `FOREVER_GUILD_SLUG` (default `goat-guild`), `FOREVER_NAMESPACE` (default `profile-forever-us`; Blizzard hasn't officially documented the Forever API yet)

Hand-written content still lives in `src/data/*.ts`. Manual news posts in `news.ts` are merged with the automatic ones.
