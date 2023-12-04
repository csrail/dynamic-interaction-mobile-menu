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

        const link = htmlMixin.createHyperlink(
            this.menuItem.title,
            this.menuItem.hyperlink,
        );

        component.appendChild(link);

        return component;
    }

    getView() {
        return this.#buildItem();
    }
}

export default MobileMenuItemView;
