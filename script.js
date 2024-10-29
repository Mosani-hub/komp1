let currentIndex = {
    musicas: 0,
    fotos: 0,
    letras: 0
};

function openTab(section) {
    window.open(`#${section}`, '_blank');
}

function showCarousel(section) {
    const items = document.querySelectorAll(`#carousel${capitalize(section)} .carousel-item`);
    items.forEach(item => item.style.display = 'none');
    items[currentIndex[section]].style.display = 'block';
}

function nextItem(section) {
    const items = document.querySelectorAll(`#carousel${capitalize(section)} .carousel-item`);
    currentIndex[section] = (currentIndex[section] + 1) % items.length;
    showCarousel(section);
}

function prevItem(section) {
    const items = document.querySelectorAll(`#carousel${capitalize(section)} .carousel-item`);
    currentIndex[section] = (currentIndex[section] - 1 + items.length) % items.length;
    showCarousel(section);
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

document.addEventListener("DOMContentLoaded", () => {
    showCarousel("musicas");
    showCarousel("fotos");
    showCarousel("letras");
});