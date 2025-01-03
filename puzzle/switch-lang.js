document.addEventListener('DOMContentLoaded', () => {
    const supportedLanguages = ['ua', 'es', 'en'];
    const defaultLanguage =
        localStorage.getItem('lang') || getBrowserLanguage(supportedLanguages);

    const path = window.location.pathname.replace('/', '').toLowerCase();

    if (!supportedLanguages.includes(path)) {
        const newUrl = `/${path + defaultLanguage}`;
        window.history.replaceState({}, '', newUrl);
        updateTextContent(defaultLanguage);
    } else {
        updateTextContent(path);
    }

    const elements = document.querySelectorAll('.nav_language_pick');
    elements.forEach((element) => {
        element.addEventListener('click', () => {
            const lang = element.getAttribute('data-lang');
            if (supportedLanguages.includes(lang)) {
                window.location.replace(`/${path + lang}`);
                localStorage.setItem('lang', lang);
                updateTextContent(lang);
            }
        });
    });
});

function getBrowserLanguage(supportedLanguages) {
    const browserLang = navigator.language.slice(0, 2);

    if (supportedLanguages.includes(browserLang)) {
        return browserLang;
    }
    return 'en';
}
