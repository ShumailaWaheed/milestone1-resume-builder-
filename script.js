document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleSkills');
    const skillsList = document.getElementById('skillsList');
    const skillsHeading = document.querySelector('#skillsContainer h2');

    if (toggleButton && skillsList && skillsHeading) {
        toggleButton.addEventListener('click', function () {
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
