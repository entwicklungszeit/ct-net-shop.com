import type { IconSlug } from './icons'

export interface Service {
  title: string
  href: string
  description: string
  icon: IconSlug
}

export const services: Service[] = [
  {
    title: 'KNX Smart Home',
    href: '/knx',
    icon: 'smart-home',
    description:
      'Intelligente Hausautomation, die für Sie mitdenkt – Licht, Beschattung, Heizung und Sicherheit nahtlos vereint.'
  },
  {
    title: 'Photovoltaik',
    href: '/photovoltaik',
    icon: 'sonne',
    description:
      'Werden Sie Ihr eigener Energieversorger. PV, Speicher, Wallbox und App-Steuerung aus einer Hand.'
  },
  {
    title: 'Wärmepumpe',
    href: '/waermepumpe',
    icon: 'schneeflocke',
    description:
      'Elektrischer Anschluss, Anmeldung beim Energieversorger und PV-Kopplung – sauber abgestimmt mit Ihrem Heizungsbauer.'
  },
  {
    title: 'IT-Infrastruktur',
    href: '/it',
    icon: 'netzwerk',
    description:
      'Schluss mit Funklöchern und instabilem WLAN. Wir liefern Netzwerke, Sicherheit und Backups, die einfach funktionieren.'
  },
  {
    title: 'Elektroinstallation',
    href: '/elektroinstallation',
    icon: 'steckdose',
    description:
      'Das sichere Fundament jedes Gebäudes – vom Neubau bis zur Sanierung, inklusive Beleuchtung und Schutztechnik.'
  },
  {
    title: 'SKYEYE Drohnenflug',
    href: '/drohnenflug',
    icon: 'drohne',
    description:
      'Picture2Fly, Video2Fly, Measurement2Fly und Hot2Fly – professionelle Luftaufnahmen. Ab 350 € mit Picture2Fly.'
  }
]
