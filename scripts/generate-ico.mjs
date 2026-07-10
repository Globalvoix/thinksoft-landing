import { readFileSync, writeFileSync } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, "..", "public")

// Read the 48x48 PNG
const png48 = readFileSync(join(publicDir, "favicon-48.png"))
const png32 = readFileSync(join(publicDir, "favicon-32.png"))
const png16 = readFileSync(join(publicDir, "favicon-16.png"))

function createIco(images) {
  const headerSize = 6
  const dirEntrySize = 16
  const count = images.length
  let offset = headerSize + dirEntrySize * count
  const buffers = []

  // ICO header
  const header = Buffer.alloc(headerSize)
  header.writeUInt16LE(0, 0)      // reserved
  header.writeUInt16LE(1, 2)      // type: 1 = ICO
  header.writeUInt16LE(count, 4)  // count
  buffers.push(header)

  // Directory entries + image data
  for (const { png, size } of images) {
    const entry = Buffer.alloc(dirEntrySize)
    const w = size >= 256 ? 0 : size
    const h = size >= 256 ? 0 : size
    entry.writeUInt8(w, 0)        // width
    entry.writeUInt8(h, 1)        // height
    entry.writeUInt8(0, 2)        // color palette
    entry.writeUInt8(0, 3)        // reserved
    entry.writeUInt16LE(1, 4)     // color planes
    entry.writeUInt16LE(32, 6)    // bits per pixel
    entry.writeUInt32LE(png.length, 8)  // image size
    entry.writeUInt32LE(offset, 12)     // image offset
    buffers.push(entry)
    offset += png.length
  }

  // Append all PNG data
  for (const { png } of images) {
    buffers.push(png)
  }

  return Buffer.concat(buffers)
}

const ico = createIco([
  { png: png16, size: 16 },
  { png: png32, size: 32 },
  { png: png48, size: 48 },
])

writeFileSync(join(publicDir, "favicon.ico"), ico)
console.log("Generated favicon.ico")
