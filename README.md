# Krahls Naturprodukte Website

Website für den Hofladen und mobilen Verkauf in Kirchardt.
Das Ganze ist eine rein statische Seite. Heißt: Kein Backend, kein Build-Process, kein `npm install`. Einfach HTML, Tailwind (via CDN) und Vanilla JS.

![Preview](./assets/img/banner_placeholder.jpg)

## Technik & Aufbau

* **Styling:** Tailwind CSS ist direkt per CDN eingebunden. Du musst also nichts kompilieren.
* **Icons:** Kommen von Lucide (ebenfalls CDN).
* **Kalender (Salatmann):** Die Logik dafür steckt direkt in der `anfahrt.html` (ganz unten im Script).
    * Berechnet die Termine automatisch anhand der Wochentage (Di, Fr, Sa).
    * **Saison:** Ist fest auf März bis Juni eingestellt. Außerhalb dieser Monate zeigt er automatisch "Saisonpause" an. Muss man also nicht jedes Jahr anfassen.
* **Produkte:** Simpler JS-Filter auf der `produkte.html`.

## Projektstruktur

```text
/
├── index.html          # Startseite
├── anfahrt.html        # Hier liegt die Kalender-Logik (!)
├── produkte.html       # Sortiment & Filter
├── assets/
│   ├── css/style.css   # Nur für Kleinigkeiten (Dots, Hover)
│   └── js/script.js    # Globales Zeug (Mobile Menu)
└── ...
