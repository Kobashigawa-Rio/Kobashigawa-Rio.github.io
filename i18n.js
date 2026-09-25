document.addEventListener('DOMContentLoaded', () => {
  // 1. Get HTML tag language or fallback
  const htmlLang = document.documentElement.lang || 'en-UK';

  // 2. Determine initial language (localStorage -> HTML lang -> 'en-UK')
  let currentLang = localStorage.getItem('app_lang') || htmlLang;

  const selectEl = document.getElementById('Lan-Select');
  if (selectEl) {
    // Sync select dropdown value
    if (selectEl.querySelector(`option[value="${currentLang}"]`)) {
      selectEl.value = currentLang;
    } else {
      // If exact code isn't in select options, fallback to first option
      currentLang = selectEl.value || currentLang;
    }

    selectEl.addEventListener('change', (e) => {
      const newLang = e.target.value;
      localStorage.setItem('app_lang', newLang);
      loadTranslations(newLang);
    });
  }

  // 3. Load translations
  loadTranslations(currentLang);
});

async function loadTranslations(lang) {
  const filePath = `./lang/${lang}.json`;
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to load file: ${filePath} (Status: ${response.status})`);
    }
    
    const translations = await response.json();
    applyTranslations(translations);
  } catch (error) {
    console.error('i18n Error:', error.message);
  }
}

function applyTranslations(translations) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[key]) {
      element.textContent = translations[key];
    }
  });
}