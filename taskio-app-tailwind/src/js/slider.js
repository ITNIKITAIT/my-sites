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

    function activateButtons(type) {
        let conditional = 0;
        if (type === prev) conditional = 0;
        if (type === next) conditional = NumOfCards - 1;

        const svg = type.children[0];
        if (currentId === conditional) {
            svg.children[0].style.stroke = '#D4D4D4';
            svg.children[1].style.fill = '#D4D4D4';
            type.setAttribute('disabled', '');
        } else {
            svg.children[0].style.stroke = '#0A0A4A';
            svg.children[1].style.fill = '#0A0A4A';
            type.removeAttribute('disabled');
        }
    }

    function update() {
        cards.forEach((el) => {
            el.classList.remove('card--cur');
        });
        cards[currentId].classList.add('card--cur');
        activateButtons(prev);
        activateButtons(next);
    }

    prev.addEventListener('click', () => {
        if (currentId !== 0) currentId--;
        update();
    });
    next.addEventListener('click', () => {
        if (currentId !== NumOfCards - 1) currentId++;
        update();
    });

    cards.forEach((el, i) => {
        el.addEventListener('click', () => {
            currentId = i;
            update();
        });
    });
};

slider();
