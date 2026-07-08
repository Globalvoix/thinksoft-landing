import sharp from "sharp"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, "..", "public", "og-image.png")

const WIDTH = 1200
const HEIGHT = 630
const BG = "#0a0a0a"

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1a1a2e" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#0a0a0a" stop-opacity="0.95"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#5c9cf5"/>
      <stop offset="100%" stop-color="#9d7cd8"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${BG}"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)"/>

  <!-- Subtle grid pattern -->
  <g stroke="#ffffff" stroke-opacity="0.03" stroke-width="1">
    ${Array.from({length: 20}, (_, i) => `<line x1="0" y1="${i * 35}" x2="${WIDTH}" y2="${i * 35}"/>`).join("\n    ")}
    ${Array.from({length: 35}, (_, i) => `<line x1="${i * 35}" y1="0" x2="${i * 35}" y2="${HEIGHT}"/>`).join("\n    ")}
  </g>

  <!-- Terminal window frame -->
  <rect x="80" y="120" width="500" height="340" rx="10" fill="#141414" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1.5"/>
  <!-- Window dots -->
  <circle cx="110" cy="152" r="6" fill="#ff5f57"/>
  <circle cx="134" cy="152" r="6" fill="#febc2e"/>
  <circle cx="158" cy="152" r="6" fill="#28c840"/>
  <!-- Terminal header -->
  <text x="330" y="158" font-family="monospace" font-size="13" fill="#808080" text-anchor="middle">thinksoft — terminal</text>
  <!-- Terminal content lines -->
  <text x="110" y="200" font-family="monospace" font-size="15" fill="#5c9cf5">❯</text>
  <text x="130" y="200" font-family="monospace" font-size="15" fill="#eeeeee">npm install -g thinksoft</text>
  <text x="110" y="240" font-family="monospace" font-size="15" fill="#7fd88f">+ thinksoft@latest</text>
  <text x="110" y="280" font-family="monospace" font-size="15" fill="#eeeeee">From imagination to production.</text>

  <!-- Right side: Logo + Tagline -->
  <text x="720" y="260" font-family="monospace" font-size="80" fill="url(#accent)" font-weight="bold">&gt;_</text>
  <text x="720" y="310" font-family="sans-serif" font-size="36" fill="#ffffff" font-weight="600">Thinksoft</text>
  <text x="720" y="350" font-family="sans-serif" font-size="18" fill="#808080">From imagination to production.</text>
  <text x="720" y="380" font-family="sans-serif" font-size="15" fill="#5c9cf5">thinksoft.dev</text>

  <!-- Bottom bar -->
  <rect x="0" y="580" width="${WIDTH}" height="50" fill="#ffffff" fill-opacity="0.02"/>
  <text x="600" y="612" font-family="sans-serif" font-size="14" fill="#555555" text-anchor="middle">AI-powered coding · CLI · Free · Open ecosystem</text>
</svg>
`

await sharp(Buffer.from(svg)).resize(WIDTH, HEIGHT).png().toFile(OUT)
console.log("Generated:", OUT)
