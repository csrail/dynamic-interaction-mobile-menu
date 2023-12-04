const htmlMixin = (() => {
    function createElement(type, classes = []) {
        const component = document.createElement(type);
        classes.forEach((cls) => {
            component.classList.add(cls);
        });

        return component;
    }

    function createHyperlink(title, hyperlink) {
        const component = document.createElement("a");
        component.textContent = title;
        component.setAttribute("href", hyperlink);

        return component;
    }

    return {
        createElement,
        createHyperlink,
    };
})();

export default htmlMixin;
