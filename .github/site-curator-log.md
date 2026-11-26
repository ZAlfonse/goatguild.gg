# Site Curator Log

Newest entries at the bottom. One short entry per PR: date, what changed, why.

## 2026-11-22
- Changed the homepage signup button date from Oct 13 to Nov 24 (the next regular Tuesday raid). Replaced the October Upcoming Events with that raid night and the Dec 1 *Echoes of the Worldcore* patch day (from a blue post).
- ScheduleTable now hides past events and shows a fallback line when none are left. Fixed event dates showing a day early because of UTC parsing. The signup button leaves the date off once `nextRaidDate` has passed.
- Why: the dates had been stale since mid-October. Left alone on purpose: anniversary theming, Thursday Nov 26 (Thanksgiving, attendance unknown). Mythic progress is still 0/8 on Raider.io, so there's no milestone to post.

## 2026-11-23
- Added a "Near the summit" card (`SummitWatch.astro`) at the top of the homepage Climb to 60 section. It's an inline SVG mountain with every goat within 10 levels of the cap placed on the ridge by level in their class color, plus a list showing how many levels each has left. The headline is built from the data ("Nobody at 60 yet. 3 goats are 3 levels short." today). Once someone hits 60 it switches to a count of goats at the summit.
- Added a "Where the herd is" level-bracket chart to the top of `/wow-forever` (1–9 through 50–59, with 60 in its own gold column).
- Why: Chieph Beef, Clo Vis, and Mully Midrange are all at 57, so the first 60 is close. Retail is unchanged: the 3/9 Mythic shown on Raider.io is last season's Midnight S1, and there are no new kills. Possible next steps: a pinned Goat Bot post when the first goat reaches 60. Holiday and anniversary theming are still untouched.

## 2026-11-24
- Pinned a Goat Bot milestone post, "First goats at the summit": Chieph Beef and Clo Vis are at 60 (hand-confirmed in `confirmedAtMax`; the Blizzard snapshot still says 59), and Mully Midrange is next at 57.
- `ParallaxSky.astro` has two new props. `snow` adds two layers of slow, stepped pixel snowfall at different parallax depths (on for both heroes, for the season). `flag` plants a small two-frame gold banner on the goat's peak (homepage only, for the first 60s). Both stop under `prefers-reduced-motion`. Snow flakes are generated after the clouds so the existing scene doesn't shift.
- Why: the first goats reached the cap, and the homepage news column was all October retail posts. Retail is unchanged: Raider.io last crawled Nov 17 and has no new kills. Possible next steps: turn the snow off or swap the theme after the season. Remove names from `confirmedAtMax` once the API catches up. A December 1 patch-day touch. Thanksgiving was left alone.

## 2026-11-24 (second run)
- Added "The daily climb" (`DailyClimb.astro`) to `/wow-forever`, under "Where the herd is". It has one column per day for levels the herd gained, built from the daily `history` snapshots. A small gold pixel flag marks days when someone reached 60. Today's column is striped and labeled "so far". Next to it is a log of the last 4 days with the top 3 climbers and who reached the cap. `foreverRoster.ts` now exports `daily` (per-day gains, goats, top climbers, cap arrivals).
- Fixed the pinned "First goats at the summit" post. It said Mully Midrange was at 57, but the snapshot has shown 58 since Nov 23.
- Why: the day's hero and news work had already shipped, so this one adds data the site wasn't showing yet: the pace of the climb (+33 Nov 22, +28 Nov 23). Retail is unchanged. Possible next steps: when Mully reaches 60, unpin or update the summit post. Patch-day touch for Dec 1.

## 2026-11-24 (third run)
- Added a "Summit register" (`SummitRegister.astro`) to the top of the `/wow-forever` sidebar. It's a gold-edged logbook with a small pixel ledger-and-flag icon, listing every goat at 60 in the order they arrived (from level-up activity, falling back to the daily snapshots). Goats who arrived in the same sync share a line number. Under it, a "Next to sign" list of goats within 3 levels of the cap.
- Added a "From Blizzard" section to `/wow-forever` with the 4 latest Forever blue posts, above the survey archive. Until now the roster page had no news.
- Emptied `confirmedAtMax`: the Blizzard snapshot now reports Chieph Beef and Clo Vis at 60 itself.
- Updated the pinned summit post: Mully Midrange is at 59 as of Nov 24, not 58.
- Why: Mully went from 58 to 59 after the second run, and the API caught up on the first two 60s. Retail is unchanged: Raider.io crawled Nov 24 with no new kills. Possible next steps: when Mully reaches 60, update or unpin the summit post (the register fills in automatically). Patch-day touch for Dec 1.

## 2026-11-25
- Added a summit roll call to the homepage hero, under the description: a small pixel flag, "At level 60", and every goat at the cap in class colors (Chieph Beef / Clo Vis / Mully Midrange today). It's built from the roster, so new 60s show up on their own.
- The "Near the summit" headline now names who's next once someone is at the cap ("3 goats at the summit. Lia Valentine and Zet Blade are next, 5 levels short.").
- The Summit register's "Next to sign" list now shows the three closest goats below the cap at any distance. Before, it only counted goats within 3 levels, so it went empty once Mully reached 60.
- Renamed the pinned post to "Three goats at the summit" and updated it: Mully Midrange reached 60 on Nov 24, and Zet Blade and Lia Valentine are next at 55.
- Why: Mully reached 60 overnight, so the first three are all at the cap. Retail is unchanged: Raider.io last crawled Nov 24 and has no new kills. Thanksgiving (Nov 26) was left alone again. Possible next steps: unpin the summit post once the next wave arrives or it goes stale. Patch-day touch for Dec 1.

## 2026-11-25 (second run)
- Added "Survey vs. the herd" (`ClassMix.astro`) to `/wow-forever`, under "The daily climb". It has one row per class with a class sprite and a pixel bar for characters on the roster. A gold notch on the same bar marks how many pre-launch survey picks that class got. Wider screens also get columns for survey picks, average level, and the highest goat of each class. The headline is built from the data: "The survey picked Shaman. The herd rolled Priest." The survey data was only shown in the collapsed archive before.
- Recent activity now shows achievements (exploration, Spelunker) in `goat-moon` instead of purple, since purple is off-palette.
- Updated the pinned summit post. Lia Valentine reached 56 after the morning run, so she's next on her own, with Zet Blade at 55.
- Why: the morning run already covered the hero and summit, so this run adds a different angle: what the herd actually rolled. Retail is unchanged: Raider.io last crawled Nov 24 and has no new kills. Possible next steps: unpin the summit post when the next goat reaches 60. Patch-day touch for Dec 1. `ClassRoster.astro` (retail Midnight comp) is unused and could be retired or reworked.

## 2026-11-26
- Added a "Trail log" (`TrailLog.astro`) to the homepage Climb to 60 section, under the leveling panel. It has a small pixel signpost icon, one card per zone the herd explored (from "Explore …" achievements in the activity feed) with who went there and when, and an "Also earned" row for other achievements (Spelunker, Journeyman Tailor). The headline comes from the data: "6 zones mapped since Nov 22. Moonglade has had 2 visitors." `foreverRoster.ts` now exports `achievements` (all of them, not just the 50-event activity slice) and `activitySince`.
- Added a Thanksgiving note to the homepage hero with a small pixel pie: "Happy Thanksgiving from the herd. Pie first, then the climb." It's date-gated to US Thanksgiving (fourth Thursday of November, ET, at build time), so it disappears with the next day's build and comes back next year.
- Updated the pinned summit post: Zet Blade reached 56 overnight, so Zet and Lia Valentine are both at 56, with Torcula Sinus at 55.
- Why: it's a quiet day with no new 60s (+6 levels by the morning sync). Exploration and achievements were only showing up as single lines in the activity feed. Retail is unchanged: Raider.io last crawled Nov 24 and has no new kills. Possible next steps: unpin the summit post when the next goat reaches 60. Patch-day touch for Dec 1. `ClassRoster.astro` is still unused.
