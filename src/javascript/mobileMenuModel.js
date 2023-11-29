class MobileMenuContainer {
    constructor(obj = {}) {
        this.elementType = obj.elementType || "nav";
        this.classes = obj.classes;
    }
}

class MobileMenuItem {
    constructor(obj = {}) {
        this.elementType = obj.elementType || "div";
        this.classes = obj.classes;
        this.title = obj.title;
    }
}

export { MobileMenuContainer, MobileMenuItem };
