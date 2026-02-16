// Accordion / Expandable Sections
const headers = document.querySelectorAll(".section-header");

headers.forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        const toggle = header.querySelector(".toggle");

        if (content.style.maxHeight) {
            // Collapse
            content.style.maxHeight = null;
            toggle.textContent = "+";
        } else {
            // Expand
            content.style.maxHeight = content.scrollHeight + "px";
            toggle.textContent = "-";
        }
    });
});
