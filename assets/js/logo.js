document.addEventListener('DOMContentLoaded', function() {

    // 1. Das Logo im Footer auswählen
    // Wir nutzen die ID 'footer-logo-img', die wir gleich im HTML vergeben
    const footerLogo = document.getElementById('footer-logo-img');

    // 2. Die Popup-Elemente auswählen
    const popup = document.getElementById('logo-popup');
    const popupImg = document.getElementById('logo-popup-content');
    const popupOverlay = document.getElementById('logo-popup-overlay');

    // Prüfen, ob alle Elemente da sind
    if (footerLogo && popup && popupImg) {

        // A) Klick auf das Footer-Logo -> Popup öffnen
        footerLogo.addEventListener('click', function() {
            // Das Bild im Popup soll das gleiche sein wie das angeklickte
            popupImg.src = this.src;
            // Popup anzeigen (Tailwind 'hidden' entfernen, 'flex' hinzufügen)
            popup.classList.remove('hidden');
            popup.classList.add('flex');
            // Scrollen der Seite verhindern
            document.body.classList.add('overflow-hidden');
        });

        // Funktion zum Schließen
        const closePopup = function() {
            popup.classList.add('hidden');
            popup.classList.remove('flex');
            document.body.classList.remove('overflow-hidden');
        };

        // B) Schließen bei Klick auf das Overlay (Hintergrund)
        if (popupOverlay) {
            popupOverlay.addEventListener('click', closePopup);
        }

        // C) Schließen bei Klick auf das Bild selbst (optional, wie in deinem Code)
        popupImg.addEventListener('click', closePopup);
    }
});