// Guild Information
export const guild = {
  name: 'Goat Guild',
  server: 'Mal\'Ganis - US', // Update with your server
  faction: 'Horde', // or 'Alliance'
  founded: '1996',
  // What the guild is playing right now; shown in the homepage hero badge
  nowPlaying: 'WoW: Forever',
  curatorName: 'Billidan Stormrage',
  tagline: 'Baaaaaaaaaaahhhhhhhhhhhhhh.',
  description: 'Translation: Currently leveling in WoW: Forever.',
  recruitmentStatus: 'Open', // 'Open', 'Closed', 'Limited'
  recruitmentNote: 'Open to all classes. Hooves optional.',
  discordLink: 'https://discord.gg/goatguild', // Update with your Discord
  raidSignupForm: 'https://discord.com/channels/1058475877941395506/1277720437396213852/1483660860252491799',
  nextRaidDate: '', // YYYY-MM-DD of the next retail raid; leave empty while retail is paused
};

// Raid Schedule
export const schedule = [
  { day: 'Tuesday', time: '8:00 PM - 11:00 PM', timezone: 'EST', type: 'Progression' },
  { day: 'Thursday', time: '8:00 PM - 11:00 PM', timezone: 'EST', type: 'Progression' },
];
