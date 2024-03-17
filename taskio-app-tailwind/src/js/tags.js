const activateTag = () => {
    const tags = [
        ...document.querySelector('#tags').children,
        ...document.querySelector('#tags2').children,
    ];
    for (const tag of tags) {
        tag.addEventListener('click', () => {
            tag.classList.toggle('bg-lightblue');
        });
    }
};

activateTag();
