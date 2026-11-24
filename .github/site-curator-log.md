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
