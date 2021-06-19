const scrollPage = {
    yIndicies: {},

    set setHeights(elements) {

        for (let i = 0; i < elements.length; i++) {
            if (!elements[i] instanceof Element) {
                break;
            }
            const id = elements[i].id;

            if (i === 0) {
                this.yIndicies[id] = 0;
            } else {
                let height = 0;
                for (let j = 0; j < i; j++) {
                    height += elements[j].getBoundingClientRect().height;
                }
                this.yIndicies[id] = height;
            }
        }
    },
    scroll: function(value) {
        window.scrollTo({
            top: value,
            left: 0,
            behavior: 'smooth'
        });
    }
}