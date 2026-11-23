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
