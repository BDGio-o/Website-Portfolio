document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Check if user has a saved preference
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
        body.classList.add("light-mode");
    }

    toggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");

        // Save user preference
        const newTheme = body.classList.contains("light-mode") ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
    });

    // Keyboard accessibility for toggle
    toggle.addEventListener("keydown", function (e) {
        if (e.key === "l" || e.key === "L") {
            toggle.click();
        }
    });
});
