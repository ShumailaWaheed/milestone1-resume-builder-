document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleSkills') as HTMLButtonElement | null;
    const skillsList = document.getElementById('skillsList') as HTMLUListElement | null;
    const skillsHeading = document.querySelector('#skillsContainer h2') as HTMLHeadingElement | null;

    if (toggleButton && skillsList && skillsHeading) {
        toggleButton.addEventListener('click', () => {
            if (skillsList.classList.contains('hidden')) {
                skillsList.classList.remove('hidden');
                skillsHeading.style.display = 'block';
                toggleButton.textContent = 'Hide Skills';
            } else {
                skillsList.classList.add('hidden');
                skillsHeading.style.display = 'none';
                toggleButton.textContent = 'Show Skills';
            }
        });
    }
});
