import MobileMenuItem from "../models/mobileMenuItem";
import htmlMixin from "../htmlMixin";

class MobileMenuItemView {
    constructor(mobileMenuItem = new MobileMenuItem()) {
        this.menuItem = mobileMenuItem;
    }

    #buildItem() {
        const component = htmlMixin.createElement(
            this.menuItem.elementType,
            this.menuItem.classes,
        );

        component.textContent = this.menuItem.title;

        return component;
    }

    getView() {
        return this.#buildItem();
    }
}

export default MobileMenuItemView;
