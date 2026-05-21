export interface PartnerLogo {
  src: string
  alt: string
  label: string
  /** White inset in dark mode when the SVG has black or very dark marks. */
  darkPad?: boolean
  /** Full white card in dark mode (same look as light mode). */
  lightTile?: boolean
}

/** All partner and supplier logos shown on the homepage. */
export const partnerLogos: PartnerLogo[] = [
  { src: '/partners/knx.svg', alt: 'KNX Partner', label: 'KNX' },
  { src: '/partners/sma.svg', alt: 'SMA Solar Technology', label: 'SMA' },
  { src: '/partners/huawei.svg', alt: 'Huawei FusionSolar', label: 'Huawei', darkPad: true },
  { src: '/partners/lg.svg', alt: 'LG Energy Solution', label: 'LG' },
  { src: '/partners/hager.svg', alt: 'Hager', label: 'Hager' },
  { src: '/partners/wuerth.svg', alt: 'Würth', label: 'Würth', lightTile: true },
  { src: '/partners/avm.svg', alt: 'AVM', label: 'AVM', darkPad: true },
  { src: '/partners/devolo.svg', alt: 'devolo', label: 'devolo', darkPad: true },
  { src: '/partners/corsair.svg', alt: 'Corsair', label: 'Corsair', lightTile: true },
  { src: '/partners/dlink.svg', alt: 'D-Link', label: 'D-Link' },
  { src: '/partners/microsoft.svg', alt: 'Microsoft', label: 'Microsoft' }
]
