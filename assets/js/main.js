const buttons = document.querySelectorAll(".selector button");
const sections = document.querySelectorAll(".page-section");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const target = button.dataset.section;

        // Update sections
        sections.forEach(section => {
            section.classList.toggle(
                "active",
                section.id === target
            );
        });

        // Update button state
        buttons.forEach(btn =>
            btn.classList.toggle("active", btn === button)
        );
    });
});
