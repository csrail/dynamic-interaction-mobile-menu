import MobileMenuContainer from "./mobileMenuModel";
import htmlMixin from "./htmlMixin";

class MobileMenuView {
    constructor(mobileMenu = new MobileMenuContainer()) {
        this.menu = mobileMenu;
    }

    static #createMenuElement(type, classes) {
        return htmlMixin.createElement(type, classes);
    }

    buildContainer() {
        return MobileMenuView.#createMenuElement(
            this.menu.elementType,
            this.menu.classes,
        );
    }
}

export default MobileMenuView;
