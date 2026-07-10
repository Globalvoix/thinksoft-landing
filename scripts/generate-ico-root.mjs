import { readFileSync, writeFileSync } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, "..", "public")

const png48 = readFileSync(join(publicDir, "favicon-48-v2.png"))

function createIco(png) {
  const headerSize = 6
  const dirEntrySize = 16
  let offset = headerSize + dirEntrySize
  const buffers = []

  const header = Buffer.alloc(headerSize)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(1, 4)
  buffers.push(header)

  const entry = Buffer.alloc(dirEntrySize)
  entry.writeUInt8(48, 0)
  entry.writeUInt8(48, 1)
  entry.writeUInt8(0, 2)
  entry.writeUInt8(0, 3)
  entry.writeUInt16LE(1, 4)
  entry.writeUInt16LE(32, 6)
  entry.writeUInt32LE(png.length, 8)
  entry.writeUInt32LE(offset, 12)
  buffers.push(entry)

  buffers.push(png)
  return Buffer.concat(buffers)
}

writeFileSync(join(publicDir, "favicon.ico"), createIco(png48))
console.log("Generated favicon.ico (48x48 single-entry)")
