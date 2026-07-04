# Partner-Logos

In diesem Ordner liegen die offiziellen Partner- und Hersteller-Logos, die auf den Service-Unterseiten angezeigt werden.

## Erwartete Spezifikationen

- Format: **SVG** (bevorzugt) oder hochauflösendes PNG
- Transparenter Hintergrund (keine Vollflächen-Hintergründe in den SVGs)
- Farbige Markenlogos sind erwünscht; die Komponente invertiert sie **nicht**
- Alle Logos werden auf einer **weißen Kachel** angezeigt – in Light und Dark Mode gleich
- Maximale Anzeigegröße auf der Website: 140 × 48 px (über `max-h-12 max-w-[140px]`)

## Dateien und Verwendung

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
| `synology.svg`   | `/it`                              | Synology                        |
| `qnap.svg`       | `/it`                              | QNAP                            |
| `western-digital.svg` | `/it`                          | Western Digital                 |
| `siteco.svg`     | `/it`                              | Siteco                          |
| `hp.svg`         | `/it`                              | HP                               |
| `wuerth.svg`     | `/elektroinstallation`             | Würth                           |
| `hager.svg`      | `/elektroinstallation`             | Hager                           |

Die **Startseite** (`/`) zeigt alle Logos in einer Partner-Sektion (Liste in [`src/data/partners.ts`](../../src/data/partners.ts)).

## Fallback-Verhalten

Die Komponente [`PartnerLogos.astro`](../../src/components/PartnerLogos.astro)
zeigt automatisch eine graue Pille mit dem Markennamen an, falls eine SVG-Datei
fehlt oder beim Laden fehlschlägt. Die Seiten bleiben also auch ohne reale
Logos optisch konsistent.
