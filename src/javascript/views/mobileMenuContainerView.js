import MobileMenuContainer from "../models/mobileMenuContainer";
import htmlMixin from "../htmlMixin";

class MobileMenuContainerView {
    #containerView;

    constructor(mobileMenuContainer = new MobileMenuContainer()) {
        this.menuContainer = mobileMenuContainer;
    }

    #buildContainer() {
        return htmlMixin.createElement(
            this.menuContainer.elementType,
            this.menuContainer.classes,
        );
    }

    getView() {
        if (this.#containerView === undefined) {
            this.#containerView = this.#buildContainer();
        }
        return this.#containerView;
    }
}

export default MobileMenuContainerView;
