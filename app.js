// Application data with specific images for Giuliano di Lecce
const appData = {
  siteInfo: {
    title: "Giuliano di Lecce",
    subtitle: "Il Borgo del Salento",
    description: "Giuliano di Lecce, frazione di Castrignano del Capo, è un borgo medievale nel cuore del Salento che conserva intatto il fascino della sua storia millenaria.",
    location: "Lecce, Puglia, Italia",
    altitude: "130 m s.l.m.",
    distance: {
      castrignano: "2 km",
      leuca: "5 km", 
      lecce: "64 km"
    },
    population: "594 abitanti (2001)"
  },
  monuments: [
    {
      name: "Castello Medievale",
      period: "XVI secolo",
      description: "Realizzato nel XVI secolo, mantiene inalterato l'aspetto primigenio. Presenta due torrioni a base quadrata, con stalle e scuderie al pianterreno e camere nobiliari ai piani superiori.",
      image: "img/monumenti/castelloMedievale.jpg"
    },
    {
      name: "Chiesa Madre di San Giovanni Crisostomo",
      period: "XVI secolo",
      description: "Dedicata al patrono del paese, presenta interni a tre navate con affreschi cinquecenteschi e il campanile dei fratelli Fuortes.",
      image: "img/monumenti/chiesaMadreSanGiovanniCrisostomo.jpg"
    },
    {
      name: "Chiesa di San Pietro Apostolo",
      period: "X secolo",
      description: "Edificata dai monaci basiliani nel X secolo, si trova alla periferia di Giuliano ed è caratterizzata da una struttura semplice ma affascinante.",
      image: "img/monumenti/chiesaSanPietroApostolo.jpg"
    },
    {
      name: "Menhir Mensi",
      period: "Preistorico",
      description: "Alto due metri e mezzo, è fatto di carparo locale e alla sua sommità presenta una lastra orizzontale (cappello), unico della provincia.",
      image: "img/monumenti/menhirMensi.jpg"
    },
    {
      name: "Porta di San Giuliano",
      period: "XVII secolo",
      description: "Parte delle mura difensive volute dai Cicinelli, rappresenta l'antico ingresso al borgo medievale.",
      image: "img/monumenti/portaSanGiuliano.png"
    },
    {
      name: "Loggia degli Sberleffi",
      period: "1609",
      description: "Poggia su 15 mensoloni con figure apotropaiche, incastonata in un'abitazione privata del centro storico.",
      image: "img/monumenti/loggiaDegliSberleffi.jpg"
    }
  ],
  traditions: [
    {
      name: "Festa di San Giovanni Crisostomo",
      date: "27 gennaio",
      description: "Festa patronale con processione del simulacro del Santo portato sulle spalle dei fedeli per le vie del borgo."
    },
    {
      name: "Festa della Madonna del Canneto",
      date: "1-2 luglio",
      description: "Celebrazioni con grande fiera tradizionale legata alla ruralità e ai prodotti della campagna, accompagnata da luminarie e banda musicale."
    },
    {
      name: "La Notte dei Sapori Antichi",
      date: "agosto",
      description: "Evento enogastronomico che celebra la cucina contadina con degustazioni, musica dal vivo e artigianato locale."
    }
  ],
  events: [
    {
      title: "La Notte dei Sapori Antichi",
      date: "agosto 2025",
      description: "Stand enogastronomici, vini locali, artigianato salentino, cortili aperti e artisti di strada",
      artists: ["Lu Rusciu Nosciu", "Kontrada Kalie", "Havana Trio", "Salento Street Band", "DJ Set Euphoria"]
    }
  ],
  terms: [
    {
      id: 1,
      letter: "A",
      dialect: "aratinu",
      translation: "aratro",
      pronunciation: "",
      example: "Lu cuntadinu ara cu l'aratinu",
      category: "agricoltura"
    },
    {
      id: 2,
      letter: "A",
      dialect: "all'ampete",
      translation: "a piedi",
      pronunciation: "",
      example: "Scemu all'ampete finca alla marina",
      category: "modo di dire"
    },
    {
      id: 3,
      letter: "A",
      dialect: "arburi",
      translation: "alberi",
      pronunciation: "",
      example: "Li arburi te ulia su beddhri",
      category: "natura"
    },
    {
      id: 4,
      letter: "A",
      dialect: "arunca-arune",
      translation: "dove",
      pronunciation: "",
      example: "Arunca stai sciendu?",
      category: "avverbio"
    },
    {
      id: 5,
      letter: "A",
      dialect: "ajata",
      translation: "beato, felice",
      pronunciation: "",
      example: "Ajata a ci se la pija",
      category: "aggettivo"
    },
    {
      id: 6,
      letter: "B",
      dialect: "basciare",
      translation: "abbassare",
      pronunciation: "",
      example: "Bascia la voce ca ni senti",
      category: "verbo"
    },
    {
      id: 7,
      letter: "B",
      dialect: "beddhru(a)",
      translation: "bello, bella",
      pronunciation: "",
      example: "Ci beddhra carusa ca ete!",
      category: "aggettivo"
    },
    {
      id: 8,
      letter: "B",
      dialect: "bracchiata",
      translation: "casa di campagna dove si tenevano gli animali",
      pronunciation: "",
      example: "Li animali stannu alla bracchiata",
      category: "agricoltura"
    },
    {
      id: 9,
      letter: "B",
      dialect: "binchiatu",
      translation: "saziato",
      pronunciation: "",
      example: "U binchiatu nu crite mai u disciunu",
      category: "aggettivo"
    },
    {
      id: 10,
      letter: "C",
      dialect: "cannarutu",
      translation: "goloso",
      pronunciation: "",
      example: "Stu caruso ete propriu cannarutu",
      category: "aggettivo"
    },
    {
      id: 11,
      letter: "C",
      dialect: "caura",
      translation: "granchio",
      pronunciation: "",
      example: "Nci su tante caure allu scogghiu",
      category: "mare"
    },
    {
      id: 12,
      letter: "C",
      dialect: "capiddhri",
      translation: "capelli",
      pronunciation: "",
      example: "Teni li capiddhri lunghi",
      category: "corpo"
    },
    {
      id: 13,
      letter: "C",
      dialect: "cavaddhru",
      translation: "cavallo",
      pronunciation: "",
      example: "Lu cavaddhru curre pe li campi",
      category: "animali"
    },
    {
      id: 14,
      letter: "C",
      dialect: "crai",
      translation: "domani",
      pronunciation: "",
      example: "Crai scemu alla fiera",
      category: "tempo"
    },
    {
      id: 15,
      letter: "D",
      dialect: "dirluttare",
      translation: "singhiozzare",
      pronunciation: "",
      example: "Lu caruso sta dirluttandu te dalore",
      category: "verbo"
    },
    {
      id: 16,
      letter: "D",
      dialect: "darlampare",
      translation: "lampeggiare",
      pronunciation: "",
      example: "Sta darlampandu, mo chiove",
      category: "tempo meteorologico"
    },
    {
      id: 17,
      letter: "D",
      dialect: "de nanzi",
      translation: "davanti",
      pronunciation: "",
      example: "Mintiti de nanzi alla porta",
      category: "posizione"
    },
    {
      id: 18,
      letter: "D",
      dialect: "duce",
      translation: "dolce",
      pronunciation: "",
      example: "Stu mele ete duce assai",
      category: "sapore"
    },
    {
      id: 19,
      letter: "F",
      dialect: "frascera",
      translation: "braciere",
      pronunciation: "",
      example: "Azza la frascera ca face friscu",
      category: "casa"
    },
    {
      id: 20,
      letter: "F",
      dialect: "fuscire",
      translation: "correre",
      pronunciation: "",
      example: "Mena a fuscire ca simu tardu",
      category: "verbo"
    }
  ],
  proverbs: [
    {
      id: 1,
      dialect: "U binchiatu nu crite mai u disciunu",
      translation: "Chi è sazio non crede mai al digiuno", 
      meaning: "Chi sta bene non comprende le difficoltà altrui",
      category: "saggezza"
    },
    {
      id: 2,
      dialect: "Ci pecura te faci, lu lupu te mancia",
      translation: "Se ti fai pecora, il lupo ti mangia",
      meaning: "Chi si dimostra debole viene sopraffatto",
      category: "carattere"
    },
    {
      id: 3,
      dialect: "Non spe lucri sed liberatatis",
      translation: "Non con speranza di guadagno, ma di libertà",
      meaning: "Iscrizione del frantoio del 1789 - simbolo di libertà",
      category: "storia"
    },
    {
      id: 4,
      dialect: "Quandu la luna se face russa, o piove o tira ientu",
      translation: "Quando la luna si fa rossa, o piove o tira vento",
      meaning: "Proverbio meteorologico tradizionale",
      category: "tempo"
    },
    {
      id: 5,
      dialect: "A casa toa, nu te scurdare mai te essere patrunu",
      translation: "A casa tua, non dimenticare mai di essere padrone",
      meaning: "Difendi sempre la tua dignità in casa propria",
      category: "casa"
    },
    {
      id: 6,
      dialect: "Cu l'amici de prima se campa megghiu",
      translation: "Con gli amici di prima si vive meglio",
      meaning: "Le amicizie sincere sono un tesoro per tutta la vita",
      category: "amicizia"
    },
    {
      id: 7,
      dialect: "Quandu spira tramontana, l'acqua te marina diventa cristallina",
      translation: "Quando soffia tramontana, l'acqua di mare diventa cristallina",
      meaning: "Il vento di tramontana rende il mare più limpido",
      category: "tempo"
    },
    {
      id: 8,
      dialect: "Lu sule de jennairu scauda comu focu, ma nu dura",
      translation: "Il sole di gennaio scalda come fuoco, ma non dura",
      meaning: "I momenti di calore invernale sono intensi ma brevi",
      category: "tempo"
    }
  ],
  categories: [
    "famiglia", "corpo", "casa", "natura", "animali", "cibo", "tempo", "agricoltura", "mare", "modo di dire", "verbo", "aggettivo", "avverbio", "pronome", "colore", "stagioni", "giorni", "frutta", "verdura", "esclamazione", "bevande", "abbigliamento", "legumi", "persona", "posizione", "sapore", "tempo meteorologico"
  ]
};

// Application state
let appState = {
  currentSection: 'home',
  currentLetter: 'all',
  currentView: 'grid',
  searchQuery: '',
  favorites: JSON.parse(localStorage.getItem('giuliano-favorites') || '[]'),
  isAdmin: false,
  dailyTerm: null,
  dailyProverb: null,
  filteredTerms: [...appData.terms],
  adminPassword: 'GMTFiloni46'
};

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app...');
  initializeApp();
});

function initializeApp() {
  console.log('Initializing application...');
  try {
    loadSavedData();
    setupEventListeners();
    navigateToSection('home'); // Initialize with home section
    updateLetterCounts();
    generateDailyTerm();
    generateDailyProverb();
    populateCategorySelect();
    initializeTheme();
    console.log('Application initialized successfully');
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

function loadSavedData() {
  try {
    const savedTerms = localStorage.getItem('giuliano-terms');
    if (savedTerms) {
      appData.terms = JSON.parse(savedTerms);
      appState.filteredTerms = [...appData.terms];
    }
    
    const savedProverbs = localStorage.getItem('giuliano-proverbs');
    if (savedProverbs) {
      appData.proverbs = JSON.parse(savedProverbs);
    }
    
    const savedPassword = localStorage.getItem('giuliano-admin-password');
    if (savedPassword) {
      appState.adminPassword = savedPassword;
    }
  } catch (error) {
    console.error('Error loading saved data:', error);
  }
}

function saveData() {
  try {
    localStorage.setItem('giuliano-terms', JSON.stringify(appData.terms));
    localStorage.setItem('giuliano-proverbs', JSON.stringify(appData.proverbs));
    localStorage.setItem('giuliano-admin-password', appState.adminPassword);
  } catch (error) {
    console.error('Error saving data:', error);
  }
}

function setupEventListeners() {
  console.log('Setting up event listeners...');
  
  // Navigation event listeners - CRITICAL FIX
  document.addEventListener('click', function(e) {
    console.log('Click event detected on:', e.target);
    
    // Handle navigation links
    const navLink = e.target.closest('.nav-link');
    if (navLink) {
      e.preventDefault();
      e.stopPropagation();
      const section = navLink.getAttribute('data-section');
      console.log('Navigation link clicked:', section);
      if (section) {
        navigateToSection(section);
      }
      return;
    }
    
    // Handle feature cards
    const featureCard = e.target.closest('.feature-card');
    if (featureCard) {
      e.preventDefault();
      e.stopPropagation();
      const navigateTarget = featureCard.getAttribute('data-navigate');
      console.log('Feature card clicked:', navigateTarget);
      if (navigateTarget) {
        navigateToSection(navigateTarget);
      }
      return;
    }
    
    // Handle letter buttons
    if (e.target.classList.contains('letter-btn') || e.target.closest('.letter-btn')) {
      const btn = e.target.classList.contains('letter-btn') ? e.target : e.target.closest('.letter-btn');
      const letter = btn.dataset.letter;
      if (letter) {
        selectLetter(letter);
      }
      return;
    }
    
    // Handle view toggle buttons
    if (e.target.classList.contains('view-toggle')) {
      const view = e.target.dataset.view;
      if (view) {
        changeView(view);
      }
      return;
    }
    
    // Handle admin tabs
    if (e.target.classList.contains('admin-tab')) {
      const tabName = e.target.dataset.tab;
      if (tabName) {
        switchAdminTab(tabName);
      }
      return;
    }

    // Handle modal controls
    if (e.target.classList.contains('modal-backdrop') || e.target.classList.contains('modal-close')) {
      const modal = e.target.closest('.modal');
      if (modal) {
        hideModal(modal.id);
      }
      return;
    }

    // Handle export buttons
    if (e.target.dataset.format) {
      exportData(e.target.dataset.format);
      return;
    }

    // Handle import button
    if (e.target.id === 'importBtn') {
      importData();
      return;
    }
    
    // Handle admin buttons
    if (e.target.id === 'adminVocabularyBtn') {
      showModal('adminLoginModal');
      return;
    }
    
    if (e.target.id === 'adminProverbsBtn') {
      showModal('proverbsAdminModal');
      return;
    }
    
    // Handle daily buttons
    if (e.target.id === 'newTermBtn') {
      generateDailyTerm();
      return;
    }
    
    if (e.target.id === 'newProverbBtn') {
      generateDailyProverb();
      return;
    }
  });
  
  // Direct event listeners for specific elements
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      handleSearch(e.target.value);
    });
  }

  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Forms
  const adminLoginForm = document.getElementById('adminLoginForm');
  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', handleAdminLogin);
  }

  const proverbsAdminForm = document.getElementById('proverbsAdminForm');
  if (proverbsAdminForm) {
    proverbsAdminForm.addEventListener('submit', handleProverbsAdminLogin);
  }

  const addTermForm = document.getElementById('addTermForm');
  if (addTermForm) {
    addTermForm.addEventListener('submit', handleAddTerm);
  }

  const addProverbForm = document.getElementById('addProverbForm');
  if (addProverbForm) {
    addProverbForm.addEventListener('submit', handleAddProverb);
  }

  const changePasswordForm = document.getElementById('changePasswordForm');
  if (changePasswordForm) {
    changePasswordForm.addEventListener('submit', handleChangePassword);
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      const openModals = document.querySelectorAll('.modal:not(.hidden)');
      openModals.forEach(modal => modal.classList.add('hidden'));
    }
    
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault();
      const searchInput = document.getElementById('searchInput');
      if (searchInput && appState.currentSection === 'vocabolario') {
        searchInput.focus();
      }
    }
  });
  
  console.log('Event listeners setup complete');
}

// NAVIGATION FUNCTION - COMPLETELY REWRITTEN FOR RELIABILITY
function navigateToSection(sectionName) {
  console.log('=== NAVIGATION START ===');
  console.log('Target section:', sectionName);
  
  try {
    // Step 1: Validate section exists
    const targetSection = document.getElementById(sectionName);
    if (!targetSection) {
      console.error('Section not found:', sectionName);
      return false;
    }
    
    // Step 2: Hide all sections
    const allSections = document.querySelectorAll('.section');
    console.log('Found sections:', allSections.length);
    
    allSections.forEach((section, index) => {
      section.classList.remove('active');
      section.style.display = 'none'; // Force hide
      console.log(`Hidden section ${index}: ${section.id}`);
    });
    
    // Step 3: Show target section
    targetSection.classList.add('active');
    targetSection.style.display = 'block'; // Force show
    console.log('Activated section:', sectionName);
    
    // Step 4: Update navigation active state
    const allNavLinks = document.querySelectorAll('.nav-link');
    console.log('Found nav links:', allNavLinks.length);
    
    allNavLinks.forEach((link, index) => {
      link.classList.remove('active');
      const linkSection = link.getAttribute('data-section');
      console.log(`Nav link ${index}: ${linkSection}`);
      if (linkSection === sectionName) {
        link.classList.add('active');
        console.log('Activated nav link for:', sectionName);
      }
    });
    
    // Step 5: Update app state
    appState.currentSection = sectionName;
    
    // Step 6: Render section-specific content
    renderCurrentSection();
    
    // Step 7: Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    console.log('=== NAVIGATION COMPLETE SUCCESS ===');
    return true;
    
  } catch (error) {
    console.error('=== NAVIGATION ERROR ===', error);
    return false;
  }
}

function renderCurrentSection() {
  console.log('Rendering section:', appState.currentSection);
  
  try {
    switch (appState.currentSection) {
      case 'home':
        console.log('Home section - no additional rendering needed');
        break;
      case 'storia':
        console.log('Storia section - no additional rendering needed');
        break;
      case 'monumenti':
        console.log('Rendering monuments...');
        renderMonuments();
        break;
      case 'tradizioni':
        console.log('Rendering traditions...');
        renderTraditions();
        break;
      case 'eventi':
        console.log('Rendering events...');
        renderEvents();
        break;
      case 'vocabolario':
        console.log('Rendering vocabulary...');
        displayTerms();
        updateLetterCounts();
        break;
      case 'proverbi':
        console.log('Rendering proverbs...');
        displayProverbs();
        break;
      case 'contatti':
        console.log('Contatti section - no additional rendering needed');
        break;
      default:
        console.warn('Unknown section:', appState.currentSection);
    }
  } catch (error) {
    console.error('Error rendering section:', error);
  }
}

function renderMonuments() {
  const container = document.getElementById('monumentsGrid');
  if (!container) {
    console.error('monumentsGrid container not found');
    return;
  }

  container.innerHTML = appData.monuments.map(monument => `
    <div class="monument-card fade-in">
      <img src="${monument.image}" alt="${monument.name}" class="monument-image" loading="lazy">
      <div class="monument-name">${monument.name}</div>
      <div class="monument-period">${monument.period}</div>
      <p>${monument.description}</p>
    </div>
  `).join('');
  
  console.log('Monuments rendered:', appData.monuments.length);
}

function renderTraditions() {
  const container = document.getElementById('traditionsGrid');
  if (!container) {
    console.error('traditionsGrid container not found');
    return;
  }

  container.innerHTML = appData.traditions.map(tradition => `
    <div class="tradition-card fade-in">
      <div class="tradition-name">${tradition.name}</div>
      <div class="tradition-date">${tradition.date}</div>
      <p>${tradition.description}</p>
    </div>
  `).join('');
  
  console.log('Traditions rendered:', appData.traditions.length);
}

function renderEvents() {
  const container = document.getElementById('eventsContainer');
  if (!container) {
    console.error('eventsContainer not found');
    return;
  }

  container.innerHTML = appData.events.map(event => `
    <div class="event-card fade-in">
      <div class="event-title">${event.title}</div>
      <div class="event-date">${event.date}${event.time ? ` - ${event.time}` : ''}</div>
      <p>${event.description}</p>
      ${event.artists ? `
        <div class="event-artists">
          <strong>Artisti:</strong><br>
          ${event.artists.map(artist => `<span class="artist-tag">${artist}</span>`).join('')}
        </div>
      ` : ''}
    </div>
  `).join('');
  
  console.log('Events rendered:', appData.events.length);
}

// Vocabulary functions
function handleSearch(value) {
  appState.searchQuery = value.toLowerCase().trim();
  
  if (appState.searchQuery) {
    appState.currentLetter = 'all';
    document.querySelectorAll('.letter-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.letter === 'all') {
        btn.classList.add('active');
      }
    });
  }
  
  filterAndDisplayTerms();
}

function selectLetter(letter) {
  const searchInput = document.getElementById('searchInput');
  if (searchInput && appState.searchQuery) {
    searchInput.value = '';
    appState.searchQuery = '';
  }
  
  document.querySelectorAll('.letter-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.letter === letter) {
      btn.classList.add('active');
    }
  });

  appState.currentLetter = letter;
  
  const title = letter === 'all' ? 'Tutti i termini' : `Termini che iniziano con "${letter}"`;
  const sectionTitle = document.getElementById('sectionTitle');
  if (sectionTitle) {
    sectionTitle.textContent = title;
  }

  filterAndDisplayTerms();
}

function filterAndDisplayTerms() {
  let filtered = [...appData.terms];

  if (appState.searchQuery) {
    filtered = filtered.filter(term => 
      term.dialect.toLowerCase().includes(appState.searchQuery) ||
      term.translation.toLowerCase().includes(appState.searchQuery) ||
      (term.example && term.example.toLowerCase().includes(appState.searchQuery)) ||
      term.category.toLowerCase().includes(appState.searchQuery)
    );
    
    const sectionTitle = document.getElementById('sectionTitle');
    if (sectionTitle) {
      sectionTitle.textContent = `Risultati per: "${appState.searchQuery}" (${filtered.length})`;
    }
  } else {
    if (appState.currentLetter !== 'all') {
      filtered = filtered.filter(term => term.letter === appState.currentLetter);
    }
  }

  appState.filteredTerms = filtered;
  displayTerms();
}

function displayTerms() {
  const container = document.getElementById('termsContainer');
  const noResults = document.getElementById('noResults');

  if (!container) return;

  if (appState.filteredTerms.length === 0) {
    container.classList.add('hidden');
    if (noResults) noResults.classList.remove('hidden');
    return;
  }

  container.classList.remove('hidden');
  if (noResults) noResults.classList.add('hidden');

  container.innerHTML = appState.filteredTerms.map(term => createTermCard(term)).join('');
}

function createTermCard(term) {
  const isFavorited = appState.favorites.includes(term.id);
  const favoriteIcon = isFavorited ? '⭐' : '☆';

  if (appState.currentView === 'list') {
    return `
      <div class="term-card slide-in">
        <div class="term-main">
          <div class="term-dialect">${term.dialect}</div>
          <div class="term-translation">${term.translation}</div>
        </div>
        <div class="term-meta">
          <span class="term-category">${term.category}</span>
          <div class="term-actions">
            <button class="term-favorite ${isFavorited ? 'favorited' : ''}" 
                    onclick="toggleFavorite(${term.id})" 
                    title="${isFavorited ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}">
              ${favoriteIcon}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="term-card fade-in">
      <div class="term-dialect">${term.dialect}</div>
      <div class="term-translation">${term.translation}</div>
      ${term.example ? `<div class="term-example">"${term.example}"</div>` : ''}
      <div class="term-meta">
        <span class="term-category">${term.category}</span>
        <div class="term-actions">
          <button class="term-favorite ${isFavorited ? 'favorited' : ''}" 
                  onclick="toggleFavorite(${term.id})" 
                  title="${isFavorited ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}">
            ${favoriteIcon}
          </button>
        </div>
      </div>
    </div>
  `;
}

function changeView(view) {
  document.querySelectorAll('.view-toggle').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.view === view) {
      btn.classList.add('active');
    }
  });

  const container = document.getElementById('termsContainer');
  if (container) {
    container.className = `terms-container ${view}-view`;
  }
  
  appState.currentView = view;
  displayTerms();
}

function toggleFavorite(termId) {
  const index = appState.favorites.indexOf(termId);
  
  if (index === -1) {
    appState.favorites.push(termId);
  } else {
    appState.favorites.splice(index, 1);
  }
  
  localStorage.setItem('giuliano-favorites', JSON.stringify(appState.favorites));
  displayTerms();
}

function updateLetterCounts() {
  const counts = {};
  
  appData.terms.forEach(term => {
    counts[term.letter] = (counts[term.letter] || 0) + 1;
  });

  Object.keys(counts).forEach(letter => {
    const countElement = document.getElementById(`count-${letter}`);
    if (countElement) {
      countElement.textContent = counts[letter];
    }
  });
}

// Proverbs functions
function displayProverbs() {
  const container = document.getElementById('proverbsContainer');
  
  if (container) {
    container.innerHTML = appData.proverbs.map(proverb => `
      <div class="proverb-card fade-in">
        <div class="proverb-dialect">"${proverb.dialect}"</div>
        <div class="proverb-translation">${proverb.translation}</div>
        <div class="proverb-meaning">${proverb.meaning}</div>
        <div class="proverb-category">${proverb.category}</div>
      </div>
    `).join('');
    
    console.log('Proverbs rendered:', appData.proverbs.length);
  }
}

function generateDailyTerm() {
  if (appData.terms.length === 0) return;
  
  const randomIndex = Math.floor(Math.random() * appData.terms.length);
  appState.dailyTerm = appData.terms[randomIndex];
  
  const dailyTermContainer = document.getElementById('dailyTerm');
  if (dailyTermContainer && appState.dailyTerm) {
    dailyTermContainer.style.opacity = '0.5';
    
    setTimeout(() => {
      dailyTermContainer.innerHTML = `
        <div class="daily-term-word">${appState.dailyTerm.dialect}</div>
        <div class="daily-term-translation">${appState.dailyTerm.translation}</div>
        ${appState.dailyTerm.example ? `<div class="daily-term-example">"${appState.dailyTerm.example}"</div>` : ''}
      `;
      dailyTermContainer.style.opacity = '1';
    }, 150);
  }
}

function generateDailyProverb() {
  if (appData.proverbs.length === 0) return;
  
  const randomIndex = Math.floor(Math.random() * appData.proverbs.length);
  appState.dailyProverb = appData.proverbs[randomIndex];
  
  const dailyProverbContainer = document.getElementById('dailyProverb');
  if (dailyProverbContainer && appState.dailyProverb) {
    dailyProverbContainer.style.opacity = '0.5';
    
    setTimeout(() => {
      dailyProverbContainer.innerHTML = `
        <div class="daily-proverb-dialect">"${appState.dailyProverb.dialect}"</div>
        <div class="daily-proverb-translation">${appState.dailyProverb.translation}</div>
        <div class="daily-proverb-meaning">${appState.dailyProverb.meaning}</div>
      `;
      dailyProverbContainer.style.opacity = '1';
    }, 150);
  }
}

// Theme functions
function initializeTheme() {
  const savedTheme = localStorage.getItem('giuliano-theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-color-scheme', savedTheme);
    updateThemeToggle(savedTheme);
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-color-scheme', newTheme);
  localStorage.setItem('giuliano-theme', newTheme);
  updateThemeToggle(newTheme);
}

function updateThemeToggle(theme) {
  const themeIcon = document.querySelector('.theme-icon');
  if (themeIcon) {
    themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
  }
}

// Modal functions
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    
    const focusableElements = modal.querySelectorAll('input, button, select, textarea');
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }
  }
}

function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Admin functions
function handleAdminLogin(event) {
  event.preventDefault();
  
  const password = document.getElementById('adminPassword').value;
  
  if (password === appState.adminPassword) {
    appState.isAdmin = true;
    hideModal('adminLoginModal');
    showModal('adminPanel');
    loadAdminPanel();
    document.getElementById('adminPassword').value = '';
  } else {
    alert('Password non corretta!');
  }
}

function handleProverbsAdminLogin(event) {
  event.preventDefault();
  
  const password = document.getElementById('proverbsAdminPassword').value;
  
  if (password === appState.adminPassword) {
    appState.isAdmin = true;
    hideModal('proverbsAdminModal');
    showModal('proverbsPanel');
    loadProverbsPanel();
    document.getElementById('proverbsAdminPassword').value = '';
  } else {
    alert('Password non corretta!');
  }
}

function loadAdminPanel() {
  populateCategorySelect();
  loadManageTermsList();
}

function loadProverbsPanel() {
  loadManageProverbsList();
}

function populateCategorySelect() {
  const categorySelect = document.getElementById('categoryTerm');
  if (categorySelect) {
    categorySelect.innerHTML = '<option value="">Seleziona categoria</option>' +
      appData.categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
  }
}

function switchAdminTab(tabName) {
  document.querySelectorAll('.admin-tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.dataset.tab === tabName) {
      tab.classList.add('active');
    }
  });
  
  document.querySelectorAll('.admin-tab-content').forEach(content => {
    content.classList.remove('active');
    if (content.id === `${tabName}-tab`) {
      content.classList.add('active');
    }
  });
  
  if (tabName === 'manage') {
    loadManageTermsList();
  } else if (tabName === 'manage-proverb') {
    loadManageProverbsList();
  }
}

function handleAddTerm(event) {
  event.preventDefault();
  
  const dialectTerm = document.getElementById('dialectTerm').value.trim();
  const translationTerm = document.getElementById('translationTerm').value.trim();
  const pronunciationTerm = document.getElementById('pronunciationTerm').value.trim();
  const exampleTerm = document.getElementById('exampleTerm').value.trim();
  const categoryTerm = document.getElementById('categoryTerm').value;
  
  if (!dialectTerm || !translationTerm || !categoryTerm) {
    alert('Compila tutti i campi obbligatori!');
    return;
  }
  
  const letter = dialectTerm.charAt(0).toUpperCase();
  const newId = Math.max(...appData.terms.map(t => t.id), 0) + 1;
  
  const newTerm = {
    id: newId,
    letter: letter,
    dialect: dialectTerm,
    translation: translationTerm,
    pronunciation: pronunciationTerm,
    example: exampleTerm,
    category: categoryTerm
  };
  
  appData.terms.push(newTerm);
  appData.terms.sort((a, b) => a.dialect.localeCompare(b.dialect));
  
  saveData();
  
  event.target.reset();
  updateLetterCounts();
  filterAndDisplayTerms();
  
  alert('Termine aggiunto con successo!');
}

function handleAddProverb(event) {
  event.preventDefault();
  
  const dialectProverb = document.getElementById('dialectProverb').value.trim();
  const translationProverb = document.getElementById('translationProverb').value.trim();
  const meaningProverb = document.getElementById('meaningProverb').value.trim();
  const categoryProverb = document.getElementById('categoryProverb').value;
  
  if (!dialectProverb || !translationProverb || !meaningProverb || !categoryProverb) {
    alert('Compila tutti i campi!');
    return;
  }
  
  const newId = Math.max(...appData.proverbs.map(p => p.id), 0) + 1;
  
  const newProverb = {
    id: newId,
    dialect: dialectProverb,
    translation: translationProverb,
    meaning: meaningProverb,
    category: categoryProverb
  };
  
  appData.proverbs.push(newProverb);
  
  saveData();
  
  event.target.reset();
  displayProverbs();
  
  alert('Proverbio aggiunto con successo!');
}

function loadManageTermsList() {
  const container = document.getElementById('manageTermsList');
  
  if (container) {
    container.innerHTML = appData.terms.map(term => `
      <div class="manage-term-item">
        <div class="manage-term-info">
          <div class="manage-term-dialect">${term.dialect}</div>
          <div class="manage-term-translation">${term.translation}</div>
        </div>
        <div class="manage-term-actions">
          <button class="btn btn--outline btn--sm" onclick="editTerm(${term.id})">
            Modifica
          </button>
          <button class="btn btn--outline btn--sm" onclick="deleteTerm(${term.id})" style="color: var(--color-error);">
            Elimina
          </button>
        </div>
      </div>
    `).join('');
  }
}

function loadManageProverbsList() {
  const container = document.getElementById('manageProverbsList');
  
  if (container) {
    container.innerHTML = appData.proverbs.map(proverb => `
      <div class="manage-proverb-item">
        <div class="manage-proverb-info">
          <div class="manage-proverb-dialect">${proverb.dialect}</div>
          <div class="manage-proverb-translation">${proverb.translation}</div>
        </div>
        <div class="manage-proverb-actions">
          <button class="btn btn--outline btn--sm" onclick="editProverb(${proverb.id})">
            Modifica
          </button>
          <button class="btn btn--outline btn--sm" onclick="deleteProverb(${proverb.id})" style="color: var(--color-error);">
            Elimina
          </button>
        </div>
      </div>
    `).join('');
  }
}

function editTerm(termId) {
  const term = appData.terms.find(t => t.id === termId);
  if (!term) return;
  
  const newDialect = prompt('Termine in dialetto:', term.dialect);
  if (newDialect === null) return;
  
  const newTranslation = prompt('Traduzione italiana:', term.translation);
  if (newTranslation === null) return;
  
  const newExample = prompt('Esempio d\'uso:', term.example || '');
  if (newExample === null) return;
  
  term.dialect = newDialect.trim();
  term.translation = newTranslation.trim();
  term.example = newExample.trim();
  term.letter = newDialect.charAt(0).toUpperCase();
  
  saveData();
  loadManageTermsList();
  updateLetterCounts();
  filterAndDisplayTerms();
  
  alert('Termine modificato con successo!');
}

function editProverb(proverbId) {
  const proverb = appData.proverbs.find(p => p.id === proverbId);
  if (!proverb) return;
  
  const newDialect = prompt('Proverbio in dialetto:', proverb.dialect);
  if (newDialect === null) return;
  
  const newTranslation = prompt('Traduzione italiana:', proverb.translation);
  if (newTranslation === null) return;
  
  const newMeaning = prompt('Significato:', proverb.meaning);
  if (newMeaning === null) return;
  
  proverb.dialect = newDialect.trim();
  proverb.translation = newTranslation.trim();
  proverb.meaning = newMeaning.trim();
  
  saveData();
  loadManageProverbsList();
  displayProverbs();
  
  alert('Proverbio modificato con successo!');
}

function deleteTerm(termId) {
  if (!confirm('Sei sicuro di voler eliminare questo termine?')) {
    return;
  }
  
  appData.terms = appData.terms.filter(t => t.id !== termId);
  
  const favIndex = appState.favorites.indexOf(termId);
  if (favIndex !== -1) {
    appState.favorites.splice(favIndex, 1);
    localStorage.setItem('giuliano-favorites', JSON.stringify(appState.favorites));
  }
  
  saveData();
  loadManageTermsList();
  updateLetterCounts();
  filterAndDisplayTerms();
  
  alert('Termine eliminato con successo!');
}

function deleteProverb(proverbId) {
  if (!confirm('Sei sicuro di voler eliminare questo proverbio?')) {
    return;
  }
  
  appData.proverbs = appData.proverbs.filter(p => p.id !== proverbId);
  
  saveData();
  loadManageProverbsList();
  displayProverbs();
  
  alert('Proverbio eliminato con successo!');
}

// Import/Export functions
function importData() {
  const fileInput = document.getElementById('importFile');
  const file = fileInput.files[0];
  
  if (!file) {
    alert('Seleziona un file da importare!');
    return;
  }
  
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const content = e.target.result;
      let importedData = [];
      
      if (file.name.endsWith('.json')) {
        importedData = JSON.parse(content);
      } else if (file.name.endsWith('.csv')) {
        importedData = parseCSV(content);
      } else {
        alert('Formato file non supportato!');
        return;
      }
      
      if (Array.isArray(importedData)) {
        let imported = 0;
        importedData.forEach(item => {
          if (item.dialect && item.translation && item.category) {
            const newId = Math.max(...appData.terms.map(t => t.id), 0) + 1;
            const letter = item.dialect.charAt(0).toUpperCase();
            
            appData.terms.push({
              id: newId + imported,
              letter: letter,
              dialect: item.dialect,
              translation: item.translation,
              pronunciation: item.pronunciation || '',
              example: item.example || '',
              category: item.category
            });
            imported++;
          }
        });
        
        saveData();
        updateLetterCounts();
        filterAndDisplayTerms();
        alert(`Importati ${imported} termini con successo!`);
      } else {
        alert('Formato dati non valido!');
      }
    } catch (error) {
      alert('Errore nell\'importazione: ' + error.message);
    }
  };
  
  reader.readAsText(file);
}

function parseCSV(csvContent) {
  const lines = csvContent.split('\n');
  const data = [];
  
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    if (values.length >= 4) {
      data.push({
        dialect: values[0]?.trim().replace(/"/g, ''),
        translation: values[1]?.trim().replace(/"/g, ''),
        example: values[2]?.trim().replace(/"/g, ''),
        category: values[3]?.trim().replace(/"/g, '')
      });
    }
  }
  
  return data;
}

function exportData(format) {
  let dataToExport, filename, blob;
  
  if (format === 'json') {
    dataToExport = {
      terms: appData.terms,
      proverbs: appData.proverbs,
      exportDate: new Date().toISOString(),
      version: "1.0"
    };
    
    const dataStr = JSON.stringify(dataToExported, null, 2);
    blob = new Blob([dataStr], { type: 'application/json' });
    filename = `giuliano-vocabolario-${new Date().toISOString().split('T')[0]}.json`;
  } else if (format === 'csv') {
    const csvHeader = 'dialect,translation,example,category\n';
    const csvContent = appData.terms.map(term => 
      `"${term.dialect}","${term.translation}","${term.example || ''}","${term.category}"`
    ).join('\n');
    
    blob = new Blob([csvHeader + csvContent], { type: 'text/csv' });
    filename = `giuliano-vocabolario-${new Date().toISOString().split('T')[0]}.csv`;
  }
  
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  
  URL.revokeObjectURL(link.href);
}

function handleChangePassword(event) {
  event.preventDefault();
  
  const currentPassword = document.getElementById('currentPassword').value;
  const newPassword = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  
  if (currentPassword !== appState.adminPassword) {
    alert('Password attuale non corretta!');
    return;
  }
  
  if (newPassword !== confirmPassword) {
    alert('Le nuove password non corrispondono!');
    return;
  }
  
  if (newPassword.length < 6) {
    alert('La nuova password deve essere di almeno 6 caratteri!');
    return;
  }
  
  appState.adminPassword = newPassword;
  saveData();
  
  event.target.reset();
  alert('Password cambiata con successo!');
}

// Global functions for backwards compatibility
window.navigateToSection = navigateToSection;
window.toggleFavorite = toggleFavorite;
window.editTerm = editTerm;
window.editProverb = editProverb;
window.deleteTerm = deleteTerm;
window.deleteProverb = deleteProverb;


// --- Import Proverbi ---
function importProverbs() {
  const fileInput = document.getElementById('importProverbsFile');
  const file = fileInput.files[0];
  if (!file) {
    alert('Seleziona un file da importare!');
    return;
  }
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const content = e.target.result;
      let importedData;
      if (file.name.endsWith('.json')) {
        importedData = JSON.parse(content);
      } else if (file.name.endsWith('.csv')) {
        importedData = parseCSVProverbs(content);
      } else {
        alert('Formato file non supportato!');
        return;
      }
      if (Array.isArray(importedData)) {
        let imported = 0;
        importedData.forEach(item => {
          if (item.dialect && item.translation && item.meaning && item.category) {
            const newId = Math.max(0, ...appData.proverbs.map(p => p.id)) + 1;
            appData.proverbs.push({
              id: newId,
              dialect: item.dialect,
              translation: item.translation,
              meaning: item.meaning,
              category: item.category
            });
            imported++;
          }
        });
        saveData();
        displayProverbs();
        alert(`Importati ${imported} proverbi con successo!`);
      } else {
        alert('Formato dati non valido!');
      }
    } catch (error) {
      alert('Errore nell\'importazione: ' + error.message);
    }
  };
  reader.readAsText(file);
}

// --- Export Proverbi ---
function exportProverbs(format) {
  let dataToExport, filename, blob;
  if (format === 'json') {
    dataToExport = appData.proverbs;
    const dataStr = JSON.stringify(dataToExport, null, 2);
    blob = new Blob([dataStr], { type: 'application/json' });
    filename = `giuliano-proverbi-${new Date().toISOString().split('T')[0]}.json`;
  } else if (format === 'csv') {
    const csvHeader = 'dialect,translation,meaning,category\n';
    const csvContent = appData.proverbs.map(p =>
      `"${p.dialect.replace(/"/g, '""')}","${p.translation.replace(/"/g, '""')}","${p.meaning.replace(/"/g, '""')}","${p.category.replace(/"/g, '""')}"`
    ).join('\n');
    blob = new Blob([csvHeader + csvContent], { type: 'text/csv' });
    filename = `giuliano-proverbi-${new Date().toISOString().split('T')[0]}.csv`;
  }
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

// --- CSV Parser per proverbi ---
function parseCSVProverbs(csvContent) {
  const lines = csvContent.split('\n');
  const data = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    if (values.length >= 4) {
      data.push({
        dialect: values[0]?.trim().replace(/^"|"$/g, ''),
        translation: values[1]?.trim().replace(/^"|"$/g, ''),
        meaning: values[2]?.trim().replace(/^"|"$/g, ''),
        category: values[3]?.trim().replace(/^"|"$/g, '')
      });
    }
  }
  return data;
}