   lucide.createIcons();

   // Mobile Menu
   const menuBtn = document.getElementById('mobile-menu-btn');
   const mobileMenu = document.getElementById('mobile-menu');
   menuBtn.addEventListener('click', () => {
       mobileMenu.classList.toggle('hidden');
   });

   // =========================================================================
   // LAGERVERWALTUNG / DATENBANK (HIER PRODUKTE & MENGEN EINTRAGEN)
   // =========================================================================
   const productDatabase = {
       'p-salat': {
           title: "Salatsetzlinge",
           price: "0,25 € / Stück",
           image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=600&auto=format&fit=crop",
           tag: "Saisonbedingt",
           desc: "Kopfsalat, Lollo Rossa, Eisbergsalat, Romana und mehr.",
           varieties: [{
                   name: "Kopfsalat rot",
                   stock: 100
               }, {
                   name: "Kopfsalat weiß",
                   stock: 15
               }, {
                   name: "Lollo Rossa",
                   stock: 50
               }, {
                   name: "Lollo Bionda",
                   stock: 8
               }, // Gelb
               {
                   name: "Eisbergsalat",
                   stock: 0
               }, // Rot
               {
                   name: "Eichenlaub",
                   stock: 20
               }, {
                   name: "Romana",
                   stock: 30
               }, {
                   name: "Rucola",
                   stock: 40
               }
           ]
       },
       'p-kohl': {
           title: "Kraut- & Kräutersetzlinge",
           price: "0,30 € / Stück",
           image: "https://images.unsplash.com/photo-1593105544559-ecb03bf76f87?q=80&w=600&auto=format&fit=crop",
           tag: "Saisonbedingt",
           desc: "Diverse Kohlsorten und Kräuter.",
           varieties: [{
               name: "Weißkohl",
               stock: 50
           }, {
               name: "Rotkohl",
               stock: 50
           }, {
               name: "Kohlrabi",
               stock: 100
           }, {
               name: "Blumenkohl",
               stock: 2
           }, {
               name: "Brokkoli",
               stock: 0
           }, {
               name: "Rosenkohl",
               stock: 20
           }, {
               name: "Petersilie",
               stock: 30
           }, {
               name: "Schnittlauch",
               stock: 30
           }, {
               name: "Basilikum",
               stock: 0
           }]
       },
       'p-tomaten': {
           title: "Tomaten-Setzlinge",
           price: "4,20 € / Stück",
           image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=600&auto=format&fit=crop",
           tag: "Saisonbedingt",
           desc: "Cocktail, Eier, Flaschen, Ochsenherzen und große Fleischtomaten.",
           varieties: [{
               name: "Cocktailtomaten",
               stock: 20
           }, {
               name: "Eiertomaten",
               stock: 15
           }, {
               name: "Flaschentomaten",
               stock: 5
           }, {
               name: "Ochsenherzen",
               stock: 0
           }, {
               name: "Fleischtomaten",
               stock: 25
           }]
       },
       'p-paprika': {
           title: "Paprika & Zucchini",
           price: "ab 4,20 € / Stück",
           image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?q=80&w=600&auto=format&fit=crop",
           tag: "Saisonbedingt",
           desc: "Paprika (bunt), Zucchini, Auberginen, Gurken.",
           varieties: [{
               name: "Paprika Rot",
               stock: 20
           }, {
               name: "Paprika Gelb",
               stock: 15
           }, {
               name: "Paprika Grün",
               stock: 20
           }, {
               name: "Zucchini Grün",
               stock: 10
           }, {
               name: "Zucchini Gelb",
               stock: 5
           }, {
               name: "Aubergine",
               stock: 0
           }, {
               name: "Schlangengurke",
               stock: 30
           }, {
               name: "Landgurke",
               stock: 12
           }]
       },
       'p-winter': {
           title: "Wintergemüse",
           price: "0,25 € / Stück",
           image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=600&auto=format&fit=crop",
           tag: "Saisonbedingt",
           desc: "Rote Rüben, Chinakohl und mehr.",
           varieties: [{
               name: "Rote Rüben",
               stock: 100
           }, {
               name: "Chinakohl",
               stock: 50
           }, {
               name: "Endivien",
               stock: 0
           }, {
               name: "Zuckerhut",
               stock: 20
           }, {
               name: "Lauch",
               stock: 100
           }, {
               name: "Sellerie",
               stock: 40
           }]
       },
       'p-salate-frisch': {
           title: "Frische Salate",
           price: "Tagespreis",
           image: "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?q=80&w=600&auto=format&fit=crop",
           tag: "Saisonbedingt",
           desc: "Frisch vom Feld.",
           varieties: [{
               name: "Ackersalat (Feldsalat)",
               stock: 500
           }, {
               name: "Frischer Kopfsalat",
               stock: 20
           }, {
               name: "Blattsalat Mix",
               stock: 0
           }]
       },
       'p-kartoffel': {
           title: "Speisekartoffeln",
           price: "Tagespreis",
           image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=600&auto=format&fit=crop",
           tag: "Dauerhaft",
           desc: "Festkochende und mehlige Sorten.",
           varieties: [{
               name: "Festkochend 12,5kg",
               stock: 50
           }, {
               name: "Festkochend 25kg",
               stock: 20
           }, {
               name: "Mehligkochend 12,5kg",
               stock: 10
           }, {
               name: "Mehligkochend 25kg",
               stock: 5
           }]
       },
       'p-zwiebel': {
           title: "Zwiebeln",
           price: "Tagespreis",
           image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=600&auto=format&fit=crop",
           tag: "Dauerhaft",
           desc: "Im Netz.",
           varieties: [{
               name: "Haushaltszwiebeln (Netz)",
               stock: 100
           }, {
               name: "Metzgerzwiebeln (Netz)",
               stock: 30
           }]
       },
       'p-apfel': {
           title: "Äpfel",
           price: "1,50 € / kg",
           image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?q=80&w=600&auto=format&fit=crop",
           tag: "Saisonbedingt",
           desc: "Knackige Sorten aus der Region.",
           varieties: [{
               name: "Jonagold",
               stock: 50
           }, {
               name: "Delba",
               stock: 0
           }, {
               name: "Elstar",
               stock: 30
           }, {
               name: "Boskoop",
               stock: 10
           }, {
               name: "Gala",
               stock: 40
           }]
       },
       'p-wurst': {
           title: "Dosenwurst",
           price: "4,20 € / Dose",
           image: "https://images.unsplash.com/photo-1551462147-37885acc36f1?q=80&w=600&auto=format&fit=crop",
           tag: "Dauerhaft",
           desc: "Hausmacher Qualität (300g).",
           varieties: [{
               name: "Schinkenwurst",
               stock: 20
           }, {
               name: "Bauernwurst",
               stock: 15
           }, {
               name: "Bratwurst",
               stock: 5
           }, {
               name: "Blutwurst",
               stock: 10
           }, {
               name: "Leberwurst",
               stock: 0
           }, {
               name: "Schwartenmagen",
               stock: 8
           }, {
               name: "Lyoner",
               stock: 25
           }]
       },
       'p-kaese': {
           title: "Bergkäse",
           price: "ca. 2,00 € / 100g",
           image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=600&auto=format&fit=crop",
           tag: "Dauerhaft",
           desc: "Würziger Käse am Stück.",
           varieties: [{
               name: "Bergkäse (Stück)",
               stock: 0
           }]
       },
       'p-weinbrand': {
           title: "Weinbrand",
           price: "8,00 € / 0,2l",
           image: "https://images.unsplash.com/photo-1569937756447-e1988bf04dd4?q=80&w=600&auto=format&fit=crop",
           tag: "Dauerhaft",
           desc: "Feiner Tropfen.",
           varieties: [{
               name: "Weinbrand 0,2l",
               stock: 12
           }]
       },

       'p-rotwein': {
           title: "Wein",
           price: "6,50 € / 0,75l",
           image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=600&auto=format&fit=crop",
           tag: "Dauerhaft",
           desc: "Erlesene Rotweine aus eigenem Anbau und der Region.",
           varieties: [{
                   name: "Curvee",
                   stock: 15
               },
               {
                   name: "Regent",
                   stock: 5 // Wenig auf Lager (wird gelb angezeigt)
               },
               {
                   name: "Johaniter",
                   stock: 12
               },
               {
                   name: "Regent Barrique",
                   stock: 0 // Ausverkauft (wird rot durchgestrichen)
               }
           ]
       },



       'p-erde': {
           title: "Pflanzerde",
           price: "ab 16,00 €",
           image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=600&auto=format&fit=crop",
           tag: "Dauerhaft",
           desc: "Qualitätserde.",
           varieties: [{
               name: "Pflanzerde 70L",
               stock: 100
           }]
       }
   };

   // ==========================================
   // LOGIK (NICHT ÄNDERN)
   // ==========================================

   // 1. Initialisierung: Karten füllen
   function initProducts() {
       for (const [id, data] of Object.entries(productDatabase)) {
           const card = document.getElementById(id);
           if (card) {
               // Gesamte Verfügbarkeit prüfen (Summe aller Sorten)
               let totalStock = 0;
               data.varieties.forEach(v => totalStock += v.stock);

               // Status bestimmen
               let statusHtml = '';
               let imgClass = 'w-full h-full object-cover transition duration-300';
               let bgClass = 'bg-green-600';
               let statusText = 'Auf Lager';

               if (totalStock === 0) {
                   bgClass = 'bg-red-600';
                   statusText = 'Ausverkauft';
                   imgClass += ' grayscale opacity-60';
               } else if (totalStock <= 10) {
                   bgClass = 'bg-yellow-500';
                   statusText = 'Wenige';
               }

               // Klick-Event hinzufügen
               card.onclick = function() {
                   openModal(id);
               };

               // HTML befüllen
               card.innerHTML = `
                        <div class="h-56 overflow-hidden relative">
                            <img src="${data.image}" class="${imgClass}">
                            <div class="absolute top-4 left-4 bg-stone-800/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">${data.tag}</div>
                            <div class="status-badge absolute top-4 right-4 ${bgClass} text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md">${statusText}</div>
                            <div class="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full shadow-sm hover:scale-110 transition"><i data-lucide="search" class="w-4 h-4 text-wine"></i></div>
                        </div>
                        <div class="p-6">
                            <h4 class="text-xl font-bold mb-2">${data.title}</h4>
                            <p class="text-stone-500 text-sm mb-4 line-clamp-2">${data.desc}</p>
                            <div class="flex justify-between items-center pt-4 border-t border-stone-50">
                                <span class="text-xl font-bold text-wine">${data.price}</span>
                                <span class="text-xs text-stone-400">Bestand ansehen</span>
                            </div>
                        </div>
                    `;
           }
       }
       lucide.createIcons(); // Icons neu laden
   }

   // 2. Modal Öffnen
   const modal = document.getElementById('info-modal');
   const modalTitle = document.getElementById('modal-title');
   const modalPrice = document.getElementById('modal-price');
   const modalList = document.getElementById('modal-list');
   const modalImage = document.getElementById('modal-image');

   function openModal(id) {
       const data = productDatabase[id];
       if (!data) return;

       modalTitle.textContent = data.title;
       modalPrice.textContent = data.price;
       modalImage.src = data.image;
       modalList.innerHTML = ''; // Liste leeren

       // Sortenliste generieren
       data.varieties.forEach(v => {
           let dotClass = 'bg-green-500';
           let textClass = '';
           let statusMsg = '';

           if (v.stock === 0) {
               dotClass = 'bg-red-500';
               textClass = 'text-stone-400 line-through decoration-red-500';
               statusMsg = '(Ausverkauft)';
           } else if (v.stock <= 10) {
               dotClass = 'bg-yellow-500';
               statusMsg = '(Nur noch wenige)';
           }

           const li = document.createElement('li');
           li.className = "flex justify-between items-center py-2 border-b border-stone-100 last:border-0";
           li.innerHTML = `
                    <div class="flex items-center gap-3">
                        <span class="w-2.5 h-2.5 rounded-full ${dotClass} shrink-0"></span>
                        <span class="${textClass}">${v.name}</span>
                    </div>
                    <span class="text-xs font-semibold text-stone-500">${statusMsg}</span>
                `;
           modalList.appendChild(li);
       });

       modal.classList.remove('hidden');
       document.body.classList.add('modal-active');
   }

   function closeModal() {
       modal.classList.add('hidden');
       document.body.classList.remove('modal-active');
   }

   // 3. Filter Funktion
   function filterProducts(category) {
       const products = document.querySelectorAll('.product-card');
       const buttons = document.querySelectorAll('.filter-btn');

       buttons.forEach(btn => {
           btn.classList.remove('active', 'border-wine', 'text-wine');
           if (btn.getAttribute('onclick').includes(`'${category}'`)) {
               btn.classList.add('active', 'border-wine', 'text-wine');
           }
       });

       products.forEach(item => {
           if (category === 'all' || item.getAttribute('data-category') === category) {
               item.style.display = 'block';
               setTimeout(() => item.style.opacity = '1', 50);
           } else {
               item.style.display = 'none';
               item.style.opacity = '0';
           }
       });
   }

   // Starten
   document.addEventListener('DOMContentLoaded', initProducts);