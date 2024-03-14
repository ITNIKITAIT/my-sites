const slider = () => {
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const slider = document.getElementById('slider');

    let currentId = 0;
    const NumOfCards = slider.childElementCount;
    const cards = [];
    for (const card of slider.children) {
        cards.push(card);
    }
    let cardWidth = cards[0].offsetWidth;

    function update() {
        if (prev.hasAttribute('disabled')) prev.removeAttribute('disabled');
        if (next.hasAttribute('disabled')) next.removeAttribute('disabled');

        cards.forEach((el) => {
            el.classList.remove('card--cur');
        });
        cards[currentId].classList.add('card--cur');

        if (currentId === 0) prev.setAttribute('disabled', '');
        if (currentId === NumOfCards - 1) next.setAttribute('disabled', '');
    }

    prev.addEventListener('click', () => {
        if (currentId !== 0) currentId--;
        slider.scrollLeft -= cardWidth + 32;
        update();
    });
    next.addEventListener('click', () => {
        if (currentId !== NumOfCards - 1) currentId++;
        slider.scrollLeft += cardWidth + 32;
        update();
    });

    cards.forEach((el, i) => {
        el.addEventListener('click', () => {
            currentId = i;
            update();
            const leftWidth = currentId * cardWidth + currentId * 32;
            slider.scrollLeft = leftWidth;
        });
    });
};

slider();
