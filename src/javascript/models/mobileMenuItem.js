class MobileMenuItem {
    constructor(obj = {}) {
        this.elementType = obj.elementType || "div";
        this.classes = obj.classes;
        this.title = obj.title;
        this.hyperlink = obj.hyperlink;
    }
}

export default MobileMenuItem;
