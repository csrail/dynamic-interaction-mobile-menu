import { MobileMenuContainer, MobileMenuItem } from "./mobileMenuModel";
import htmlMixin from "./htmlMixin";

class MobileMenuView {
    constructor(
        mobileMenuContainer = new MobileMenuContainer(),
        mobileMenuItem = new MobileMenuItem(),
    ) {
        this.menuContainer = mobileMenuContainer;
        this.menuItem = mobileMenuItem;
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

    buildItem() {
        const component = MobileMenuView.#createMenuElement(
            this.menuItem.elementType,
            this.menuItem.classes,
        );

        component.textContent = this.menuItem.title;

        return component;
    }
}

export default MobileMenuView;
