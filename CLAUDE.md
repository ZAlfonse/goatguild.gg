# goatguild.gg

Astro + Tailwind static site for Goat Guild, deployed to S3/CloudFront by `.github/workflows/deploy.yml`.
Guild data lives in `src/data/*.ts` (hand-written) and `src/data/generated/*.json` (written by
`scripts/update-site-data.mjs`, never edit by hand). The daily AI curator follows `.github/site-curator.md`.

## Voice and copy

Every piece of copy on the site follows this: page text, headings, buttons, empty states, news posts, the
templates in `scripts/update-site-data.mjs`, and anything the curator writes.

**Voice: dry, understated humor.** Mostly plain and factual, like a guild that's been around long enough not
to oversell itself. The occasional deadpan line is welcome; one per section at most, never forced.

**Goat and herd puns are part of the identity. Keep them.** "The herd", "goats leveling", "the climb",
"hooves optional" are on-brand. Use them the same deadpan way, not with a wink and an exclamation mark.

**Don't:**
- **Hype or exclamation marks.** No "GG everyone!", "Ding!", "AOTC!", "Come join us!", no all-caps
  shouting. Big news gets stated plainly; the fact is the excitement. Exclamation marks: effectively never.
- **Emoji.** None in headings, buttons, nav, news titles, activity rows, or empty states. Use the goat
  images, color, and type for visual interest instead. (Class colors, gold for level cap, etc.)
- **Wordy or try-hard lines.** No marketing taglines, no "embark on a journey", no atmospheric fluff. If a
  sentence works without an adjective, drop the adjective. Prefer short sentences.

**Examples:**

| Instead of | Write |
|---|---|
| 🎉 Velra Ashmane hit 60 in WoW: Forever! | Velra Ashmane reached level 60 |
| Ding! 3 goats are now level 60. | That's 3 goats at the level cap. |
| 🏆 AOTC! The Venomous Abyss Heroic cleared | Ahead of the Curve: The Venomous Abyss |
| Back in old Azeroth, leveling together. | Currently leveling in WoW: Forever. |
| Every class welcome. Come level with us! | Open to all classes. Hooves optional. |
| No level-ups yet. Check back soon! | No level-ups since the last sync. The herd is resting. |

Facts stay exact: names, levels, kills, ranks, and dates come from the data, never invented for a joke.
