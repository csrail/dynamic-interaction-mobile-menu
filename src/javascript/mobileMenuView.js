import MobileMenuContainer from "./mobileMenuModel";
import htmlMixin from "./htmlMixin";

class MobileMenuView {
    constructor(mobileMenuContainer = new MobileMenuContainer()) {
        this.menuContainer = mobileMenuContainer;
    }

    static #createMenuElement(type, classes) {
        return htmlMixin.createElement(type, classes);
    }

    buildContainer() {
        return MobileMenuView.#createMenuElement(
            this.menuContainer.elementType,
            this.menuContainer.classes,
        );
    }
}

export default MobileMenuView;
