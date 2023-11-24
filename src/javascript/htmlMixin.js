const htmlMixin = (() => {
    function createElement(type, classes = []) {
        const component = document.createElement(type);
        classes.forEach((cls) => {
            component.classList.add(cls);
        });

        return component;
    }

    return {
        createElement,
    };
})();

export default htmlMixin;
