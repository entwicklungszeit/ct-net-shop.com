export interface PartnerLogo {
  src: string
  alt: string
  label: string
}

/** All partner and supplier logos shown on the homepage. */
export const partnerLogos: PartnerLogo[] = [
  { src: '/partners/knx.svg', alt: 'KNX Partner', label: 'KNX' },
  { src: '/partners/sma.svg', alt: 'SMA Solar Technology', label: 'SMA' },
  { src: '/partners/huawei.svg', alt: 'Huawei FusionSolar', label: 'Huawei' },
  { src: '/partners/lg.svg', alt: 'LG Energy Solution', label: 'LG' },
  { src: '/partners/hager.svg', alt: 'Hager', label: 'Hager' },
  { src: '/partners/wuerth.svg', alt: 'Würth', label: 'Würth' },
  { src: '/partners/avm.svg', alt: 'AVM', label: 'AVM' },
  { src: '/partners/devolo.svg', alt: 'devolo', label: 'devolo' },
  { src: '/partners/corsair.svg', alt: 'Corsair', label: 'Corsair' },
  { src: '/partners/dlink.svg', alt: 'D-Link', label: 'D-Link' },
  { src: '/partners/microsoft.svg', alt: 'Microsoft', label: 'Microsoft' }
]
