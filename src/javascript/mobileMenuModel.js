import htmlMixin from "./htmlMixin";

class MobileMenuContainer {
    constructor(obj = {}) {
        this.elementType = obj.elementType || "nav";
        this.classes = obj.classes;
    }

    static #createMenuElement(type, classes) {
        const component = htmlMixin.createElement(type, classes);
        return component;
    }

    buildContainer() {
        return MobileMenuContainer.#createMenuElement(
            this.elementType,
            this.classes,
        );
    }
}

export default MobileMenuContainer;
