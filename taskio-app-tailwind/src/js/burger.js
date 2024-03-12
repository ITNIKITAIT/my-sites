const toggleMenu = () => {
    const menu = document.getElementById('menu');
    const burger = document.getElementById('burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('is-open');
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
        document.body.classList.toggle('overflow-hidden');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menu.classList.add('hidden');
            burger.classList.remove('is-open');
            menu.classList.remove('flex');
            document.body.classList.remove('overflow-hidden');
        }
    });
};

toggleMenu();
