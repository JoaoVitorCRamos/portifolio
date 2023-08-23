
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.div-technologies').forEach(techDiv => {
    const techImage = techDiv.querySelector('.tech-image');
    const techInfo = techDiv.querySelector('.technology-info');
    const closeButton = techDiv.querySelector('.close-button');

    techImage.addEventListener('click', () => {
        techInfo.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        techInfo.style.display = 'none';
    });
});
