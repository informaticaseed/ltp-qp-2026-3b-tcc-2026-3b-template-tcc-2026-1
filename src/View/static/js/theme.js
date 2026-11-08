(function () {
    const storageKey = "site-theme";
    const validThemes = ["original", "beige"];

    function applyTheme(theme) {
        const selectedTheme = validThemes.includes(theme) ? theme : "original";
        document.documentElement.dataset.theme = selectedTheme;

        const selector = document.getElementById("theme-select");
        if (selector) {
            selector.value = selectedTheme;
        }
        return selectedTheme;
    }

    const savedTheme = localStorage.getItem(storageKey) || "original";
    applyTheme(savedTheme);

    document.addEventListener("DOMContentLoaded", function () {
        const selector = document.getElementById("theme-select");
        if (!selector) return;

        applyTheme(savedTheme);
        selector.addEventListener("change", function () {
            const selectedTheme = applyTheme(selector.value);
            localStorage.setItem(storageKey, selectedTheme);
        });
    });
})();
