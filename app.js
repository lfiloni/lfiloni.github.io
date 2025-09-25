// Sostituisci questo URL con quello del tuo Google Apps Script pubblicato
const SHEET_VOC_API_URL = 'https://script.google.com/macros/s/AKfycbwip9jPYq7t06WTMY7OV-MBVusSim2Bg_5IME7Y3oWUoOeZOb-btw6TErtI9R-AJXW8/exec';
const SHEET_PRO_API_URL = 'https://script.google.com/macros/s/AKfycbxLOafE_apSpij6XAWcraQtdnkmNniJXQVwTflwKiBeK8IuvAn0FzfYRpYFYWQ8g_gT/exec';

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
    }
  ],
  events: [
    {
      title: "La Notte dei Sapori Antichi",
      date: "agosto 2025",
      description: "Evento enogastronomico che celebra la cucina contadina con degustazioni, musica dal vivo e artigianato locale.",
      artists: ["Lu Rusciu Nosciu", "Kontrada Kalie", "Havana Trio", "Salento Street Band", "DJ Set Euphoria"]
    }
  ],
  terms: [],
  proverbs: [],
  categories: []
};

// Application state
let appState = {
  filteredTerms: [],
  currentLetter: 'all',
  currentView: 'grid',
  searchQuery: ''
};

async function fetchVocabulary() {
  try {
    const response = await fetch(SHEET_VOC_API_URL);
    const data = await response.json();
    appData.terms = data;
    appState.filteredTerms = data;
    updateLetterCounts();
    displayTerms();
    generateDailyTerm();
  } catch (error) {
    console.error('Errore recupero vocaboli:', error);
  }
}

async function fetchProverbs() {
  try {
    const response = await fetch(SHEET_PRO_API_URL);
    const data = await response.json();
    appData.proverbs = data;
    //appState.filteredTerms = data;
    //updateLetterCounts();
    displayProverbs();
    generateDailyProverb();
  } catch (error) {
    console.error('Errore recupero vocaboli:', error);
  }
}

async function fetchVocabularyProverbs() {
  fetchVocabulary();
  fetchProverbs();
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM loaded, initializing app...');
  setupEventListeners(); // subito disponibili
  navigateToSection('home'); // navigazione immediata
  initializeTheme();
  fetchVocabularyProverbs();
});

function setupEventListeners() {
  console.log('Setting up event listeners...');

  // Navigation event listeners - CRITICAL FIX
  document.addEventListener('click', function (e) {
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

    // Handle term cards - AGGIUNGI QUESTO CODICE QUI
    const termCard = e.target.closest('.term-card');
    if (termCard) {
      e.preventDefault();
      e.stopPropagation();

      // Recupera i dati del termine dalla card
      const termine = termCard.querySelector('.term-dialect')?.textContent || '';
      const traduzione = termCard.querySelector('.term-translation')?.textContent || '';
      const esempio = termCard.querySelector('.term-example')?.textContent || '';
      const categoria = termCard.querySelector('.term-category')?.textContent || '';

      // Popola la modale
      document.getElementById('modalTerm').textContent = termine;
      document.getElementById('modalTranslation').textContent = traduzione;
      document.getElementById('modalExample').textContent = esempio;
      document.getElementById('modalCategory').textContent = categoria;

      // Mostra la modale
      document.getElementById('termModal').classList.add('show');

      // Qui devi aggiungere la chiusura:
      document.getElementById('closeTermModal').onclick = function () {
        document.getElementById('termModal').classList.remove('show');
      }
      // Permetti anche la chiusura cliccando fuori!
      document.getElementById('termModal').onclick = function (event) {
        if (event.target === this) this.classList.remove('show');
      }
      return;
    }


    // Handle proverbs - AGGIUNGI QUESTO CODICE QUI
    const provCard = e.target.closest('.proverb-card');
    if (provCard) {
      e.preventDefault();
      e.stopPropagation();

      // Recupera i dati del termine dalla card
      const termineProv = provCard.querySelector('.proverb-dialect')?.textContent || '';
      const traduzioneProv = provCard.querySelector('.proverb-translation')?.textContent || '';
      const significatoProv = provCard.querySelector('.proverb-meaning')?.textContent || '';
      const categoriaProv = provCard.querySelector('.proverb-category')?.textContent || '';

      // Popola la modale
      document.getElementById('modalProverb').textContent = termineProv;
      document.getElementById('modalTranslationProv').textContent = traduzioneProv;
      document.getElementById('modalSignProv').textContent = significatoProv;
      document.getElementById('modalCategoryProv').textContent = categoriaProv;

      // Mostra la modale
      document.getElementById('proverbModal').classList.add('show');

      // Qui devi aggiungere la chiusura:
      document.getElementById('closeProverbModal').onclick = function () {
        document.getElementById('proverbModal').classList.remove('show');
      }
      // Permetti anche la chiusura cliccando fuori!
      document.getElementById('proverbModal').onclick = function (event) {
        if (event.target === this) this.classList.remove('show');
      }
      return;
    }


  });

  // Direct event listeners for specific elements
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function (e) {
      handleSearch(e.target.value);
    });
  }

  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  document.querySelectorAll('.letter-btn').forEach(btn => {
    btn.addEventListener('click', () => selectLetter(btn.dataset.letter));
  });
  document.getElementById('searchInput').addEventListener('input', e => handleSearch(e.target.value));
  document.getElementById('newTermBtn').addEventListener('click', generateDailyTerm);
  document.getElementById('newProverbBtn').addEventListener('click', generateDailyProverb);
  document.querySelectorAll('.view-toggle').forEach(btn => {
    btn.addEventListener('click', () => changeView(btn.dataset.view));
  });

  console.log('Event listeners setup complete');
}

function selectLetter(letter) {
  appState.currentLetter = letter;
  filterAndDisplayTerms();
}

// Vocabulary functions
function handleSearch(value) {
  appState.searchQuery = value.toLowerCase().trim();
  filterAndDisplayTerms();
}

function filterAndDisplayTerms() {
  let filtered = appData.terms;
  if (appState.searchQuery) {
    filtered = filtered.filter(term =>
      term.termine.toLowerCase().includes(appState.searchQuery) ||
      term.significato.toLowerCase().includes(appState.searchQuery) ||
      (term.esempio && term.esempio.toLowerCase().includes(appState.searchQuery)) ||
      term.categoria.toLowerCase().includes(appState.searchQuery)
    );
  }
  if (appState.currentLetter !== 'all') {
    filtered = filtered.filter(term => term.termine.charAt(0).toUpperCase() === appState.currentLetter);
  }
  appState.filteredTerms = filtered;
  displayTerms();
}

function startTermsLoading() {
  document.getElementById('termsLoading').classList.remove('hidden');
  document.getElementById('termsContainer').classList.add('hidden');
}

function stopTermsLoading() {
  document.getElementById('termsLoading').classList.add('hidden');
  document.getElementById('termsContainer').classList.remove('hidden');
}

function displayTerms() {
  const container = document.getElementById('termsContainer');
  const noResults = document.getElementById('noResults');
  if (!container) return;

  // Handler robusto: se dati non disponibili, mostra loading
  if (!appData.terms || appData.terms.length === 0) {
    startTermsLoading();
    container.innerHTML = '';
    noResults.classList.add('hidden');
    return;
  }
  stopTermsLoading();

  if (appState.filteredTerms.length === 0) {
    container.classList.add('hidden');
    noResults.classList.remove('hidden');
    return;
  }
  container.classList.remove('hidden');
  noResults.classList.add('hidden');
  container.innerHTML = appState.filteredTerms.sort((a, b) => a.termine.localeCompare(b.termine, 'it', { sensitivity: 'base' })).map(term => (
    `<div class="term-card fade-in">
      <div class="term-dialect">${term.termine}</div>
      <div class="term-translation">${term.significato}</div>
      ${term.esempio ? `<div class="term-example">${term.esempio}</div>` : ''}
      <div class="term-meta">
        <span class="term-category">${term.categoria}</span>
      </div>
    </div>`
  )).join('');

}

function startProverbsLoading() {
  document.getElementById('proverbsLoading').classList.remove('hidden');
  document.getElementById('dailyProverb').classList.add('hidden');
}

function stopProverbsLoading() {
  document.getElementById('proverbsLoading').classList.add('hidden');
  document.getElementById('dailyProverb').classList.remove('hidden');
}

// Proverbs functions
function displayProverbs() {
  const container = document.getElementById('proverbsContainer');

  if (!container) return;

  // Handler robusto: se dati non disponibili, mostra loading
  if (!appData.proverbs || appData.proverbs.length === 0) {
    startProverbsLoading();
    container.innerHTML = '';
    noResults.classList.add('hidden');
    return;
  }
  stopProverbsLoading();

  if (container) {
    container.innerHTML = appData.proverbs.sort((a, b) => a.frase.localeCompare(b.frase, 'it', { sensitivity: 'base' })).map(proverbs => `
      <div class="proverb-card fade-in">
        <div class="proverb-dialect">"${proverbs.frase}"</div>
        <div class="proverb-translation">${proverbs.traduzione}</div>
        <div class="proverb-meaning">${proverbs.significato}</div>
        <div class="proverb-category">${proverbs.categoria}</div>
      </div>
    `).join('');

    console.log('Proverbs rendered:', appData.proverbs.length);
  }
}

function changeView(view) {
  appState.currentView = view;
  document.getElementById('termsContainer').className = `terms-container ${view}-view`;
  displayTerms();
}

function updateLetterCounts() {
  const counts = {};
  appData.terms.forEach(term => {
    const letter = term.termine.charAt(0).toUpperCase();
    counts[letter] = (counts[letter] || 0) + 1;
  });
  Object.keys(counts).forEach(letter => {
    const countElement = document.getElementById(`count-${letter}`);
    if (countElement) countElement.textContent = counts[letter];
  });
}

function generateDailyTerm() {
  if (appData.terms.length === 0)
    return;
  const randomIndex = Math.floor(Math.random() * appData.terms.length);
  const term = appData.terms[randomIndex];
  const dailyTermContainer = document.getElementById('dailyTerm');
  if (dailyTermContainer) {
    dailyTermContainer.innerHTML = `
		<div class="daily-term-word">${term.termine}</div>
		<div class="daily-term-translation">${term.significato}</div>
		${term.esempio ? `<div class="daily-term-example">${term.esempio}</div>` : ''}
		`;
  }
}

function generateDailyProverb() {
  if (appData.proverbs.length === 0)
    return;
  const randomIndex = Math.floor(Math.random() * appData.proverbs.length);
  appState.dailyProverb = appData.proverbs[randomIndex];

  const dailyProverbContainer = document.getElementById('dailyProverb');
  if (dailyProverbContainer && appState.dailyProverb) {
    dailyProverbContainer.style.opacity = '0.5';
    setTimeout(() => {
      dailyProverbContainer.innerHTML = `
			<div class="daily-proverb-dialect">"${appState.dailyProverb.frase}"</div>
			<div class="daily-proverb-translation">${appState.dailyProverb.traduzione}</div>
			<div class="daily-proverb-meaning">${appState.dailyProverb.significato}</div>
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

function updateThemeToggle(theme) {
  const themeIcon = document.querySelector('.theme-icon');
  if (themeIcon) {
    themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
  }
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

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  document.documentElement.setAttribute('data-color-scheme', newTheme);
  localStorage.setItem('giuliano-theme', newTheme);
  updateThemeToggle(newTheme);
}

function populateCategorySelect() {
  const categorySelect = document.getElementById('categoryTerm');
  if (categorySelect) {
    categorySelect.innerHTML = '<option value="">Seleziona categoria</option>' +
      appData.categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
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

// Global functions for backwards compatibility
window.navigateToSection = navigateToSection;
window.toggleFavorite = toggleFavorite;
