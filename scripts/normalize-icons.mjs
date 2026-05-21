import fs from 'node:fs'
import path from 'node:path'

const SOURCE_DIR = '/Users/gregor/Downloads/ICONS'
const OUT_DIR = path.join(process.cwd(), 'public/icons')

/** @type {Record<string, string>} slug -> exact or glob-like source basename */
const MAPPING = {
  'anmeldung': 'Anmeldung.svg',
  'auto-laden-sonne': 'Auto Laden Sonne.svg',
  'batterie': 'Batterie.svg',
  'blitz': 'Blitz.svg',
  'datensicherung': 'Datensicherung.svg',
  'dokument': 'Dokument.svg',
  'drohne': 'Drohne.svg',
  'effizienz': 'Effizienz.svg',
  'energiemanagement': 'Energiemanagement.svg',
  'flexibilitaet': 'Fexibilit',
  'gluehbirne': 'Gl',
  'handschlag': 'Handschlag.svg',
  'haus': 'Haus.svg',
  'integration': 'Integration.svg',
  'it-service': 'IT-Service.svg',
  'kamera': 'Kamera.svg',
  'netzwerk': 'Netzwerk.svg',
  'on': 'ON.svg',
  'pv-haus': 'PV-Haus.svg',
  'qualitaet': 'Qualit',
  'renew': 'Renew.svg',
  'sanierung': 'Sanierung.svg',
  'schliessanlage': 'Schlie',
  'schneeflocke': 'Schneeflocke.svg',
  'schild': 'Schild.svg',
  'smart-home': 'Smart Home.svg',
  'sonne': 'Sonne.svg',
  'steckdose': 'Steckdose.svg',
  'temperatur': 'Temperatur.svg',
  'uhr': 'Uhr.svg',
  'wechselrichter': 'Wechselrichter.svg',
  'wertsteigerung': 'Wertsteigerung.svg',
  'zahnrad': 'Zahnrad.svg',
  'zukunft': 'Zukunft.svg',
}

function findSourceFile(pattern) {
  const files = fs.readdirSync(SOURCE_DIR)
  if (pattern.endsWith('.svg')) {
    return files.find(f => f === pattern) ?? null
  }
  return files.find(f => f.startsWith(pattern) && f.endsWith('.svg')) ?? null
}

function normalizeSvg(content) {
  let svg = content
    .replace(/<\?xml[\s\S]*?\?>/gi, '')
    .replace(/<!DOCTYPE[\s\S]*?>/gi, '')
    .replace(/\sxmlns:serif="[^"]*"/gi, '')
    .replace(/\sxml:space="[^"]*"/gi, '')
    .replace(/\sserif:id="[^"]*"/gi, '')
    .replace(/style="[^"]*stroke:\s*black[^"]*"/gi, match =>
      match.replace(/stroke:\s*black/gi, 'stroke:currentColor')
    )
    .replace(/stroke:\s*black/gi, 'stroke:currentColor')
    .replace(/stroke:black/gi, 'stroke:currentColor')
    .replace(/stroke="#000000"/gi, 'stroke="currentColor"')
    .replace(/stroke="#000"/gi, 'stroke="currentColor"')
    .trim()

  if (!/xmlns=/.test(svg)) {
    svg = svg.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ')
  }

  svg = svg.replace(/<svg([^>]*)>/, (match, attrs) => {
    const cleaned = attrs
      .replace(/\s(width|height)="[^"]*"/gi, '')
      .replace(/\sxmlns:xlink="[^"]*"/gi, '')
    return `<svg${cleaned} width="100%" height="100%" fill="none" aria-hidden="true">`
  })

  return svg
}

fs.mkdirSync(OUT_DIR, { recursive: true })

const results = []
for (const [slug, pattern] of Object.entries(MAPPING)) {
  const sourceName = findSourceFile(pattern)
  if (!sourceName) {
    console.error(`Missing source for ${slug} (pattern: ${pattern})`)
    process.exitCode = 1
    continue
  }
  const raw = fs.readFileSync(path.join(SOURCE_DIR, sourceName), 'utf8')
  const normalized = normalizeSvg(raw)
  fs.writeFileSync(path.join(OUT_DIR, `${slug}.svg`), normalized)
  results.push(slug)
}

console.log(`Normalized ${results.length} icons -> ${OUT_DIR}`)
