document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
        });
    });
});

const techDivs = document.querySelectorAll('.div-technologies');

techDivs.forEach(techDiv => {
    const techImage = techDiv.querySelector('.tech-image');
    const techInfo = techDiv.querySelector('.technology-info');
    const closeButton = techDiv.querySelector('.close-button');

    techImage.addEventListener('click', () => {
        closeAllTechInfos();
        techInfo.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        techInfo.style.display = 'none';
    });
});

function closeAllTechInfos() {
    techDivs.forEach(techDiv => {
        const techInfo = techDiv.querySelector('.technology-info');
        techInfo.style.display = 'none';
    });
}
