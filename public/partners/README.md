# Partner-Logos

In diesem Ordner liegen die Partner-Logos, die auf den Service-Unterseiten
angezeigt werden. Aktuell sind alle Dateien **typografische Platzhalter**
(SVG mit Markenname). Bitte mit den offiziellen Logos der Hersteller ersetzen.

## Erwartete Spezifikationen

- Format: **SVG** (bevorzugt) oder hochauflösendes PNG
- ViewBox / Maße: **200 × 80** (Breite × Höhe), Logo zentriert
- Hintergrund: **transparent**
- Farbe: einfarbig, dunkel (`#0f172a` / Slate 900) –
  die Komponente invertiert die Logos automatisch im Dark Mode
- Maximale Anzeigegröße auf der Website: 140 × 48 px

## Erforderliche Dateien

| Datei            | Verwendet auf Seite                | Hinweis                         |
| ---------------- | ---------------------------------- | ------------------------------- |
| `knx.svg`        | `/knx`                             | KNX Partner-Logo                |
| `sma.svg`        | `/photovoltaik`                    | SMA Solar Technology            |
| `huawei.svg`     | `/photovoltaik`                    | Huawei FusionSolar              |
| `lg.svg`         | `/photovoltaik`                    | LG Energy Solution              |
| `avm.svg`        | `/it`                              | AVM (FRITZ!Box-Hersteller)      |
| `devolo.svg`     | `/it`                              | devolo                          |
| `corsair.svg`    | `/it`                              | Corsair                         |
| `dlink.svg`      | `/it`                              | D-Link                          |
| `microsoft.svg`  | `/it`                              | Microsoft                       |
| `hager.svg`      | `/elektroinstallation`             | Hager                           |

## Fallback-Verhalten

Die Komponente [`PartnerLogos.astro`](../../src/components/PartnerLogos.astro)
zeigt automatisch eine graue Pille mit dem Markennamen an, falls eine SVG-Datei
fehlt oder beim Laden fehlschlägt. Die Seiten bleiben also auch ohne reale
Logos optisch konsistent.
