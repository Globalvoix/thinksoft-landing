import sharp from "sharp"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, "..", "public")

const svg = (size) => `
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" rx="${size * 0.1875}" fill="#1C1C1C"/>
  <text x="${size / 2}" y="${size * 0.68}" text-anchor="middle" fill="white" font-family="monospace" font-weight="bold" font-size="${size * 0.56}">&gt;_</text>
</svg>
`

const sizes = [16, 32, 48, 64, 96, 128, 256]
for (const size of sizes) {
  await sharp(Buffer.from(svg(size))).resize(size, size).png().toFile(join(OUT, `favicon-${size}.png`))
  console.log(`Generated favicon-${size}.png`)
}
// Also create the main favicon.ico-compatible 32x32 as favicon.png
await sharp(Buffer.from(svg(32))).resize(32, 32).png().toFile(join(OUT, "favicon.png"))
console.log("Generated favicon.png")
