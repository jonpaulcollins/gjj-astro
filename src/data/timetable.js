// Single source of truth for the Guildford Jiu Jitsu weekly class timetable.
//
// Used by:
//   - src/pages/timetable.astro          (the website timetable grid)
//   - scripts/build-timetable-image.mjs  (the downloadable PNG at public/images/class-timetable.png)
//
// To change the timetable: edit this file, then run `npm run timetable:image`
// to regenerate the downloadable image, and commit both.

/**
 * Class types. `hex` drives the downloadable image; `tw` / `swatch` are the
 * Tailwind classes used on the website (kept as literal strings so Tailwind
 * picks them up). `legend` is the label in the colour key.
 */
export const kinds = {
  foundations: { legend: "Foundations", hex: "#60a5fa", tw: "bg-blue-400/20 border-l-blue-400", swatch: "bg-blue-400" },
  mma: { legend: "Foundations MMA", hex: "#39FF14", tw: "bg-[#39FF14]/20 border-l-[#39FF14]", swatch: "bg-[#39FF14]" },
  wrestling: { legend: "Wrestling", hex: "#eab308", tw: "bg-yellow-500/20 border-l-yellow-500", swatch: "bg-yellow-500" },
  allLevels: { legend: "All Levels / Sparring", hex: "#ef4444", tw: "bg-red-500/20 border-l-red-500", swatch: "bg-red-500" },
  masters: { legend: "Masters 36+", hex: "#8b5cf6", tw: "bg-violet-500/20 border-l-violet-500", swatch: "bg-violet-500" },
  kids: { legend: "Kids / Juniors", hex: "#f97316", tw: "bg-orange-500/20 border-l-orange-500", swatch: "bg-orange-500" },
  teens: { legend: "Teens", hex: "#10b981", tw: "bg-emerald-500/20 border-l-emerald-500", swatch: "bg-emerald-500" },
  women: { legend: "Women Only", hex: "#d946ef", tw: "bg-fuchsia-500/20 border-l-fuchsia-500", swatch: "bg-fuchsia-500" },
  blueLight: { legend: "Blue-Light", hex: "#1e3a8a", tw: "bg-blue-900/40 border-l-blue-900", swatch: "bg-blue-900" },
};

export const bands = [
  { key: "early", label: "Early" },
  { key: "noon", label: "Mid-Morning/Noon" },
  { key: "afternoon", label: "Afternoon" },
  { key: "evening", label: "Evening/Night" },
];

export const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

/**
 * @typedef {{ title: string, time: string, kind: keyof typeof kinds, cat: "adults" | "kids" }} ClassItem
 * @typedef {ClassItem[] | "private" | "empty"} Cell
 * @type {Record<string, Record<string, Cell>>}
 */
export const schedule = {
  Monday: {
    early: [{ title: "Wrestling (No-Gi)", time: "06:30 – 08:00", kind: "wrestling", cat: "adults" }],
    noon: [{ title: "Foundations BJJ (Gi)", time: "12:00 – 13:00", kind: "foundations", cat: "adults" }],
    afternoon: [
      { title: "Junior BJJ (Gi) (5-10yrs)", time: "16:30 – 17:15", kind: "kids", cat: "kids" },
      { title: "Teen BJJ (Gi) (10-15yrs)", time: "17:20 – 18:15", kind: "teens", cat: "kids" },
    ],
    evening: [
      { title: "Foundations BJJ (Gi)", time: "18:30 – 19:30", kind: "foundations", cat: "adults" },
      { title: "All Levels Submission Grappling (No-Gi)", time: "19:45 – 21:00", kind: "allLevels", cat: "adults" },
    ],
  },
  Tuesday: {
    early: "private",
    noon: [{ title: "“Vintage Rolls” Masters Sparring (Gi) 36+", time: "12:00 – 13:00", kind: "masters", cat: "adults" }],
    afternoon: "private",
    evening: [
      { title: "Foundations BJJ (Gi)", time: "18:30 – 19:30", kind: "foundations", cat: "adults" },
      { title: "All Levels Submission Grappling (No-Gi)", time: "19:45 – 21:00", kind: "allLevels", cat: "adults" },
    ],
  },
  Wednesday: {
    early: [{ title: "Wrestling (No-Gi)", time: "06:30 – 08:00", kind: "wrestling", cat: "adults" }],
    noon: [{ title: "Foundations BJJ (Gi)", time: "12:00 – 13:00", kind: "foundations", cat: "adults" }],
    afternoon: [
      { title: "Junior BJJ (Gi) (5-10yrs)", time: "16:30 – 17:15", kind: "kids", cat: "kids" },
      { title: "Teen BJJ (Gi) (10-15yrs)", time: "17:20 – 18:15", kind: "teens", cat: "kids" },
    ],
    evening: [
      { title: "Foundations (No-Gi)", time: "18:30 – 20:00", kind: "foundations", cat: "adults" },
      { title: "Foundations MMA (Guards & Gloves)", time: "20:00 – 21:00", kind: "mma", cat: "adults" },
    ],
  },
  Thursday: {
    early: "private",
    noon: "private",
    afternoon: [
      { title: "Junior No-Gi (5-10yrs)", time: "16:30 – 17:15", kind: "kids", cat: "kids" },
      { title: "Teen No-Gi (10-15yrs)", time: "17:20 – 18:15", kind: "teens", cat: "kids" },
    ],
    evening: [
      { title: "Foundations BJJ (Gi)", time: "18:30 – 19:30", kind: "foundations", cat: "adults" },
      { title: "All Levels Submission Grappling (No-Gi)", time: "19:45 – 21:00", kind: "allLevels", cat: "adults" },
    ],
  },
  Friday: {
    early: "private",
    noon: [{ title: "Sparring (No-Gi)", time: "12:00 – 13:00", kind: "allLevels", cat: "adults" }],
    afternoon: "private",
    evening: [
      { title: "Foundations (No-Gi)", time: "18:30 – 20:00", kind: "foundations", cat: "adults" },
      { title: "Foundations MMA (COMING SOON!)", time: "20:00 – 21:00", kind: "mma", cat: "adults" },
    ],
  },
  Saturday: {
    early: [
      { title: "Junior Sparring (No-Gi) (5-10yrs)", time: "09:00 – 09:30", kind: "kids", cat: "kids" },
      { title: "Teen Sparring (No-Gi) (10-15yrs)", time: "09:45 – 10:15", kind: "teens", cat: "kids" },
    ],
    noon: [
      { title: "All Levels Leglock Class (No-Gi)", time: "10:30 – 11:00", kind: "allLevels", cat: "adults" },
      { title: "Sparring (No-Gi)", time: "11:00 – 12:00", kind: "allLevels", cat: "adults" },
      { title: "Blue-Light Class (No-Gi)", time: "12:15 – 13:15", kind: "blueLight", cat: "adults" },
    ],
    afternoon: "empty",
    evening: "empty",
  },
  Sunday: {
    early: "empty",
    noon: [
      { title: "Women Only Class", time: "10:30 – 11:45", kind: "women", cat: "adults" },
      { title: "Sparring (No-Gi)", time: "12:00 – 13:00", kind: "allLevels", cat: "adults" },
    ],
    afternoon: "empty",
    evening: "empty",
  },
};

/** Legend order shown under the grid and on the image. */
export const legend = ["foundations", "mma", "wrestling", "allLevels", "masters", "kids", "teens", "women", "blueLight"].map(
  (k) => ({ label: kinds[k].legend, swatch: kinds[k].swatch, hex: kinds[k].hex })
);
