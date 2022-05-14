const heroBoxElement = document.querySelector('.herobox')
const heroBoxImgElement = document.querySelector('.herobox img')

heroBoxElement.addEventListener('mouseover', () => {
    const heroBoxImgTextElement = document.getElementById('herobox-img-text')
    const heroBoxImgOverlayElement = document.getElementById('herobox-img-overlay')
    const alt = heroBoxImgElement.getAttribute('alt')
    heroBoxImgTextElement.textContent = alt
    heroBoxImgTextElement.style.display = 'block';
    heroBoxImgOverlayElement.style.display = 'block';
})

heroBoxElement.addEventListener('mouseleave', () => {
    const heroBoxImgTextElement = document.getElementById('herobox-img-text')
    const heroBoxImgOverlayElement = document.getElementById('herobox-img-overlay')
    heroBoxImgTextElement.style.display = 'none';
    heroBoxImgOverlayElement.style.display = 'none';
})