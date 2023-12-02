import htmlMixin from "../htmlMixin";
import MobileMenuButton from "../models/mobileMenuButton";

class MobileMenuButtonView {
    constructor(mobileMenuButton = new MobileMenuButton()) {
        this.mobileMenuButton = mobileMenuButton;
    }

    #buildButton() {
        const component = htmlMixin.createElement(
            this.mobileMenuButton.elementType,
            this.mobileMenuButton.classes,
        );

        component.id = this.mobileMenuButton.id;
        component.textContent = this.mobileMenuButton.title;
        MobileMenuButtonView.#makeResponsive(component);

        return component;
    }

    static #makeResponsive(component) {
        component.addEventListener("touchstart", () => {
            document.querySelector(".menu-window").classList.add("visible");
        });
    }

    getButton() {
        return this.#buildButton();
    }
}

export default MobileMenuButtonView;
