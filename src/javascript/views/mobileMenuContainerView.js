import MobileMenuContainer from "../models/mobileMenuContainer";
import htmlMixin from "../htmlMixin";

class MobileMenuContainerView {
    constructor(mobileMenuContainer = new MobileMenuContainer()) {
        this.menuContainer = mobileMenuContainer;
    }

    #buildContainer() {
        return htmlMixin.createElement(
            this.menuContainer.elementType,
            this.menuContainer.classes,
        );
    }

    displayView() {
        return this.#buildContainer();
    }
}

export default MobileMenuContainerView;
