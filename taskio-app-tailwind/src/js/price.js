const month = document.querySelector('#month-price');
const year = document.querySelector('#year-price');
month.addEventListener('click', () => {
    if (month.classList.contains('price--cur')) return;
    month.classList.add('price--cur');
    year.classList.remove('price--cur');
});

year.addEventListener('click', () => {
    if (year.classList.contains('price--cur')) return;
    year.classList.add('price--cur');
    month.classList.remove('price--cur');
});
