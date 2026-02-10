lucide.createIcons();

// --- 1. DATENBASIS (ROUTEN) ---
// Definition der Touren nach Wochentagen (0=So, 1=Mo, 2=Di, 3=Mi, 4=Do, 5=Fr, 6=Sa)
const routes = {
    2: { // DIENSTAG
        key: 'DIENSTAG',
        color: 'dot-yellow',
        stops: [
            { time: '18:00 - 18:30', location: 'Baumerlenbach' }
        ]
    },
    5: { // FREITAG
        key: 'FREITAG',
        color: 'dot-green',
        stops: [
            { time: '15:00 - 16:00', location: 'Westernhausen' },
            { time: '16:30 - 17:30', location: 'Oberkessach' },
            { time: '18:00 - 19:00', location: 'Berlichingen' },
            { time: '19:30 - 20:00', location: 'Muthof' }
        ]
    },
    6: { // SAMSTAG
        key: 'SAMSTAG',
        color: 'dot-orange',
        stops: [
            { time: '08:30 - 08:45', location: 'Kochersteinsfeld' },
            { time: '09:00 - 09:30', location: 'Ohrnberg / Oberohrn' },
            { time: '10:00 - 10:15', location: 'Sindringen' },
            { time: '11:00 - 12:30', location: 'Zweiflingen' },
            { time: '13:00 - 14:30', location: 'Eichach' },
            { time: '15:00 - 16:00', location: 'Westernbach' },
            { time: '16:30 - 17:30', location: 'Großhirschbach' }
        ]
    }
};

// --- SAISON DEFINITION ---
// Monate sind 0-basiert: 2=März, 3=April, 4=Mai, 5=Juni
const seasonMonths = [2, 3, 4, 5];

// Startet mit dem HEUTIGEN Datum
let currentDate = new Date();

// Initialisierung
renderCalendar();

// --- 2. FUNKTIONEN ---

function changeMonth(delta) {
    currentDate.setMonth(currentDate.getMonth() + delta);
    renderCalendar();
}

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth(); // 0-11
    const monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

    // Prüfen, ob der angezeigte Monat in der Saison liegt
    const isSeason = seasonMonths.includes(month);

    // Titel aktualisieren + Hinweis wenn Saisonpause
    let titleText = `${monthNames[month]} ${year}`;
    if (!isSeason) {
        // Optional: Kleiner Hinweis im Titel
        // titleText += " (Saisonpause)"; 
    }
    document.getElementById('currentMonthYear').innerText = titleText;

    const grid = document.getElementById('calendarGrid');
    grid.innerHTML = '';

    const firstDayIndex = new Date(year, month, 1).getDay();
    const adjustedFirstDay = firstDayIndex === 0 ? 6 : firstDayIndex - 1; // Mo=0 Anpassung
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Leere Zellen am Anfang
    for (let i = 0; i < adjustedFirstDay; i++) {
        grid.innerHTML += `<div></div>`;
    }

    // Tage erstellen
    for (let day = 1; day <= daysInMonth; day++) {
        const checkDate = new Date(year, month, day);
        const dayOfWeek = checkDate.getDay();

        // Route nur laden, wenn wir in der Saison sind
        let routeInfo = null;
        if (isSeason) {
            routeInfo = routes[dayOfWeek];
        }

        // Div erstellen
        const dayDiv = document.createElement('div');
        let cssClass = "calendar-day p-2 rounded-lg cursor-pointer transition flex flex-col items-center justify-center h-12 md:h-14";

        let dotHTML = '';

        // Wenn Route vorhanden (und Saison aktiv), Punkt anzeigen
        if (routeInfo) {
            cssClass += " font-bold text-stone-900 bg-stone-100";
            dotHTML = `<div class="event-dot ${routeInfo.color}"></div>`;
        }

        // "Heute" markieren
        const today = new Date();
        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            cssClass += " ring-2 ring-stone-300";
        }

        dayDiv.className = cssClass;
        dayDiv.innerHTML = `<span>${day}</span>${dotHTML}`;

        // Klick Event
        dayDiv.addEventListener('click', function() {
            document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('active', 'ring-2', 'ring-wine'));
            this.classList.add('active', 'ring-2', 'ring-wine');
            // Details anzeigen (wir übergeben auch isSeason status)
            showDetails(checkDate, routeInfo, isSeason);
        });

        grid.appendChild(dayDiv);
    }
}

function showDetails(dateObj, routeInfo, isSeason) {
    const container = document.getElementById('eventDetails');
    const displayDate = dateObj.toLocaleDateString('de-DE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // FALL 1: SAISONPAUSE (Monat ist nicht März-Juni)
    if (!isSeason) {
        container.innerHTML = `
                    <div class="text-center animate-fade-in">
                        <div class="bg-stone-100 p-3 rounded-full inline-block mb-4">
                            <i data-lucide="snowflake" class="w-8 h-8 text-stone-400"></i>
                        </div>
                        <h3 class="text-xl font-bold text-stone-800 mb-2">${displayDate}</h3>
                        <div class="w-16 h-1 bg-stone-200 mx-auto mb-6"></div>
                        <div class="bg-stone-100 p-4 rounded-xl inline-block mb-4 border border-stone-200">
                            <span class="text-stone-500 font-bold block">Saisonpause</span>
                            <span class="text-xs text-stone-400">Mobiler Verkauf nur März bis Juni</span>
                        </div>
                        <p class="text-sm text-stone-400">Unser Hauptgeschäft in Kirchardt ist natürlich geöffnet! <br>Bitte beachten Sie: Momentan führen wir keine Saisonware. Unser reguläres Sortiment (wie auf der Produktseite) steht Ihnen jedoch uneingeschränkt zur Verfügung.</p>
                    </div>
                `;
        lucide.createIcons();
        return;
    }

    // FALL 2: SAISON AKTIV, ABER KEIN ROUTENTAG (z.B. Sonntag)
    if (!routeInfo) {
        container.innerHTML = `
                    <div class="text-center animate-fade-in">
                        <h3 class="text-xl font-bold text-stone-800 mb-2">${displayDate}</h3>
                        <div class="w-16 h-1 bg-stone-200 mx-auto mb-6"></div>
                        <div class="bg-stone-50 p-4 rounded-xl inline-block mb-4">
                            <span class="text-stone-500 font-medium">Kein mobiler Verkauf an diesem Tag</span>
                        </div>
                        <p class="text-sm text-stone-400">Besuchen Sie uns gerne im Hauptgeschäft in Kirchardt!</p>
                    </div>
                `;
        return;
    }

    // FALL 3: TERMIN VORHANDEN
    let stopsHTML = routeInfo.stops.map(stop => `
                <div class="flex items-start border-l-4 border-stone-200 pl-4 py-2 hover:bg-stone-50 transition rounded-r-lg">
                    <div class="w-28 font-bold text-wine shrink-0">${stop.time}</div>
                    <div class="text-stone-800 font-medium">${stop.location}</div>
                </div>
            `).join('');

    container.innerHTML = `
                <div class="animate-fade-in">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="px-3 py-1 rounded-full text-xs uppercase font-bold tracking-widest text-white bg-wine">Tour aktiv</span>
                    </div>
                    <h3 class="text-2xl font-bold text-stone-800 mb-6 border-b pb-4">${displayDate}</h3>
                    <div class="space-y-2">
                        ${stopsHTML}
                    </div>
                </div>
            `;
}

// Mobile Menu
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
if (btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}