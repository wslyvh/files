import { join, resolve } from 'path'
import fs from 'fs'

export default function handler(req, res) {
  console.log('Files handler..')

  try {
    const dir = resolve(process.cwd(), "quests");
    const files = fs.readdirSync(dir, { withFileTypes: true }).map(i => i.name)
    fs.readdirSync(dir, { withFileTypes: true }).forEach(i => {
      console.log('  -', i.name)
    })

    res.status(200).json({ data: files })
  }
  catch (e) {
    console.log('Unable to read files..')
    console.error(e)
    res.status(500).json({ data: undefined })
  }
}
