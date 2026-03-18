document.addEventListener('DOMContentLoaded', function () {
    // --- Theme (Dark/Light Mode) ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    // Function to set the theme
    const setTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            if(themeToggleLightIcon) themeToggleLightIcon.classList.remove('hidden');
            if(themeToggleDarkIcon) themeToggleDarkIcon.classList.add('hidden');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            if(themeToggleLightIcon) themeToggleLightIcon.classList.add('hidden');
            if(themeToggleDarkIcon) themeToggleDarkIcon.classList.remove('hidden');
            localStorage.setItem('theme', 'light');
        }
    };

    // Set theme on initial load
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    // --- Language and Translation ---

    const setLanguage = (lang) => {
        // Fallback to English if translations are not loaded or language is invalid
        if (typeof translations === 'undefined' || !translations[lang]) {
            lang = 'en';
        }

        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;

        // Update all elements with a data-key
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update language switcher appearance
        const enButton = document.getElementById('lang-en');
        const bgButton = document.getElementById('lang-bg');
        if (enButton && bgButton) {
            if (lang === 'bg') {
                bgButton.classList.add('text-blue-500', 'underline');
                enButton.classList.remove('text-blue-500', 'underline');
            } else {
                enButton.classList.add('text-blue-500', 'underline');
                bgButton.classList.remove('text-blue-500', 'underline');
            }
        }
    };

    // Set initial language
    const initialLang = localStorage.getItem('language') || 'en';
    setLanguage(initialLang);

    // --- Navigation ---

    const navigateTo = (url) => {
        window.location.href = url;
    };

    // --- Event Delegation for Clicks ---

    document.body.addEventListener('click', (e) => {
        const targetElement = e.target;

        // Theme Toggle Button
        if (targetElement.closest('#theme-toggle')) {
            if (document.documentElement.classList.contains('dark')) {
                setTheme('light');
            } else {
                setTheme('dark');
            }
            return; // Prevent other click handlers from firing
        }

        // Language Switcher
        if (targetElement.id === 'lang-en') setLanguage('en');
        if (targetElement.id === 'lang-bg') setLanguage('bg');

        // Navigation Clicks
        const navTarget = targetElement.closest('[id^="drinks-card"], [id^="food-card"], #alcoholicDrinks, #nonAlcoholicDrinks, .logoFirm');
        if (!navTarget) return;

        if (navTarget.matches('.logoFirm')) navigateTo('index.html');
        if (navTarget.id === 'drinks-card') navigateTo('drinks.html');
        if (navTarget.id === 'food-card') navigateTo('food.html');
        if (navTarget.id === 'alcoholicDrinks') navigateTo('alcoholicDrinks.html');
        if (navTarget.id === 'nonAlcoholicDrinks') navigateTo('nonAlcoholicDrinks.html');
    });
});