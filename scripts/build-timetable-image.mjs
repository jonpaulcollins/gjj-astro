// Builds the downloadable timetable image (public/images/class-timetable.png)
// from src/data/timetable.js — the same data the website timetable uses, so
// the two can never drift apart.
//
// Usage:  npm run timetable:image
//
// Assets in scripts/timetable-assets/:
//   header.png              — the "GUILDFORD JIU JITSU / WEEKLY CLASS TIMETABLE" banner
//   LiberationSans-*.ttf    — body font (SIL Open Font License 1.1)

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { bands, days, schedule, legend, kinds } from "../src/data/timetable.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assets = path.join(root, "scripts", "timetable-assets");
const outFile = path.join(root, "public", "images", "class-timetable.png");

const W = 2000;
const HEADER_H = 240;
const LABEL_W = 161; // 161 + 7 × (250 + 1px divider) = 1918 = inner grid width
const DAY_W = 250;
const DAY_ROW_H = 70;
const BAND_H = 260;

const BG = "#0a0a0a";
const GRID_BG = "#0e0e0e";
const LABEL_BG = "#18181a";
const LINE = "#232326";

const headerPng = fs.readFileSync(path.join(assets, "header.png")).toString("base64");

const h = (type, style, children) => ({ type, props: { style, children } });

const hexToRgba = (hex, a) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};

const bandLabel = (label) =>
  h(
    "div",
    {
      width: LABEL_W, flexShrink: 0, height: BAND_H, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", background: LABEL_BG,
      color: "#9a9a9e", fontSize: 18, fontWeight: 700, textTransform: "uppercase",
      lineHeight: 1.6, textAlign: "center",
    },
    label.split("/").map((part) => h("div", { display: "flex" }, part))
  );

const tile = (item) => {
  const hex = kinds[item.kind].hex;
  return h(
    "div",
    {
      flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between",
      background: hexToRgba(hex, item.kind === "blueLight" ? 0.45 : 0.22),
      borderLeft: `6px solid ${hex}`, padding: "10px 12px 8px 12px",
    },
    [
      h("div", { display: "flex", color: "#ffffff", fontSize: 17, fontWeight: 700, textTransform: "uppercase", lineHeight: 1.2 }, item.title.replace(/-/g, "\u2011")), // non-breaking hyphen keeps NO-GI together
      h("div", { display: "flex", color: "#bdbdc2", fontSize: 15, marginTop: 6 }, item.time),
    ]
  );
};

const cell = (value) => {
  // Renderer sizes are content-box: padding (2 × 9) and the 1px divider sit outside width/height.
  const base = { width: DAY_W - 18, flexShrink: 0, height: BAND_H - 18, overflow: "hidden", display: "flex", flexDirection: "column", padding: 9, gap: 6, borderLeft: `1px solid ${LINE}` };
  if (value === "private") {
    return h("div", { ...base, justifyContent: "center" }, [
      h(
        "div",
        { display: "flex", flexDirection: "column", alignItems: "center", background: "#1a1a1c", color: "#55555a", fontSize: 16, padding: "12px 0", lineHeight: 1.4 },
        [h("div", { display: "flex" }, "PRIVATE TUITION"), h("div", { display: "flex" }, "ONLY")]
      ),
    ]);
  }
  if (value === "empty") return h("div", base, []);
  return h("div", base, value.map(tile));
};

const tree = h("div", { width: W, display: "flex", flexDirection: "column", background: BG, fontFamily: "Liberation Sans" }, [
  { type: "img", props: { src: `data:image/png;base64,${headerPng}`, width: W, height: HEADER_H } },
  h("div", { display: "flex", flexDirection: "column", margin: "10px 40px 0 40px", background: GRID_BG, border: `1px solid ${LINE}` }, [
    h("div", { display: "flex", height: DAY_ROW_H, background: LABEL_BG, borderBottom: `1px solid ${LINE}` }, [
      h("div", { width: LABEL_W, flexShrink: 0, display: "flex" }, []),
      ...days.map((d) =>
        h("div", { width: DAY_W, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontSize: 24, fontWeight: 700, textTransform: "uppercase", borderLeft: `1px solid ${LINE}` }, d)
      ),
    ]),
    ...bands.map((band, i) =>
      h("div", { display: "flex", height: BAND_H + (i ? 1 : 0), borderTop: i ? `1px solid ${LINE}` : "none" }, [
        bandLabel(band.label),
        ...days.map((d) => cell(schedule[d][band.key])),
      ])
    ),
  ]),
  h("div", { display: "flex", flexWrap: "wrap", margin: "20px 40px 0 40px", padding: "18px 10px", borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}`, gap: 34 }, legend.map((l) =>
    h("div", { display: "flex", alignItems: "center", color: "#d4d4d8", fontSize: 18 }, [
      h("div", { width: 22, height: 22, background: l.hex, marginRight: 10 }, []),
      l.label,
    ])
  )),
  h("div", { display: "flex", justifyContent: "center", color: "#8a8a90", fontSize: 18, padding: "16px 0 34px 0" },
    "Ages 5+  ·  7 Days a Week  ·  Beginners Encouraged  ·  Free Trial Available  ·  info@guildfordbjj.com"
  ),
]);

const fonts = [
  { name: "Liberation Sans", data: fs.readFileSync(path.join(assets, "LiberationSans-Regular.ttf")), weight: 400, style: "normal" },
  { name: "Liberation Sans", data: fs.readFileSync(path.join(assets, "LiberationSans-Bold.ttf")), weight: 700, style: "normal" },
];

const svg = await satori(tree, { width: W, fonts });
const png = new Resvg(svg, { fitTo: { mode: "width", value: W } }).render().asPng();
fs.writeFileSync(outFile, png);
console.log(`Timetable image written to ${path.relative(root, outFile)} (${(png.length / 1024).toFixed(0)} KB)`);
