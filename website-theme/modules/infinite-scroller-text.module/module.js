

const textList = document.querySelector('.scroll-list-text');
const textItems = textList.getElementsByClassName('scroll-item-text');
const numLogos = textItems.length;
const numClones = Math.ceil(textList.offsetWidth / (textItems[0].offsetWidth + 20));
const totalLogos = numLogos * numClones;

// Clone texts and append to text list up to the maximum number of clones
for (let i = 0; i < totalLogos; i++) {
    const clone = textItems[i % numLogos].cloneNode(true);
    textList.appendChild(clone);
}

// Continuous scrolling effect using CSS translateX property
let translateValue = 0;
function animateScroll() {
    translateValue--;
    if (translateValue <= -textItems[0].offsetWidth) {
        translateValue = 0;
        textList.appendChild(textList.firstElementChild);
    }
    textList.style.transform = `translateX(${translateValue}px)`;
    requestAnimationFrame(animateScroll);
}
animateScroll();
