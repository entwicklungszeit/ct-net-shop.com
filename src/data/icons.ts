export const iconSlugs = [
  'anmeldung',
  'auto-laden-sonne',
  'batterie',
  'blitz',
  'datensicherung',
  'dokument',
  'drohne',
  'effizienz',
  'energiemanagement',
  'flexibilitaet',
  'gluehbirne',
  'handschlag',
  'haus',
  'integration',
  'it-service',
  'kamera',
  'netzwerk',
  'on',
  'pv-haus',
  'qualitaet',
  'renew',
  'sanierung',
  'schliessanlage',
  'schneeflocke',
  'schild',
  'smart-home',
  'sonne',
  'steckdose',
  'temperatur',
  'uhr',
  'wechselrichter',
  'wertsteigerung',
  'zahnrad',
  'zukunft'
] as const

export type IconSlug = (typeof iconSlugs)[number]

export const iconLabels: Record<IconSlug, string> = {
  anmeldung: 'Anmeldung',
  'auto-laden-sonne': 'E-Ladestation',
  batterie: 'Batteriespeicher',
  blitz: 'Blitzschutz',
  datensicherung: 'Datensicherung',
  dokument: 'Dokument',
  drohne: 'Drohne',
  effizienz: 'Effizienz',
  energiemanagement: 'Energiemanagement',
  flexibilitaet: 'Flexibilität',
  gluehbirne: 'Beleuchtung',
  handschlag: 'Partnerschaft',
  haus: 'Hausinstallation',
  integration: 'Integration',
  'it-service': 'IT-Service',
  kamera: 'Kamera',
  netzwerk: 'Netzwerk',
  on: 'Steuerung',
  'pv-haus': 'Photovoltaik Haus',
  qualitaet: 'Qualität',
  renew: 'Nachhaltigkeit',
  sanierung: 'Sanierung',
  schliessanlage: 'Schließanlage',
  schneeflocke: 'Wärmepumpe',
  schild: 'Sicherheit',
  'smart-home': 'Smart Home',
  sonne: 'Sonne',
  steckdose: 'Elektroinstallation',
  temperatur: 'Temperatur',
  uhr: 'Zeitplan',
  wechselrichter: 'Wechselrichter',
  wertsteigerung: 'Wertsteigerung',
  zahnrad: 'Materialbeschaffung',
  zukunft: 'Zukunftssicherheit'
}

const rawModules = import.meta.glob('../icons/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default'
}) as Record<string, string>

export const iconSvgBySlug: Record<IconSlug, string> = Object.fromEntries(
  iconSlugs.map(slug => {
    const key = `../icons/${slug}.svg`
    const svg = rawModules[key]
    if (!svg) {
      throw new Error(`Missing icon module for slug: ${slug}`)
    }
    return [slug, svg]
  })
) as Record<IconSlug, string>
