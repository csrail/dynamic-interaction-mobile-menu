class MobileMenuApplicationController {
    #menuButtonController;

    #menuWindowController;

    constructor(menuButtonController, menuWindowController) {
        this.#menuButtonController = menuButtonController;
        this.#menuWindowController = menuWindowController;
    }

    displayView(node) {
        node.appendChild(this.#menuWindowController.getView());
        node.appendChild(this.#menuButtonController.getView());
        MobileMenuApplicationController.#handleMenuClosing();
    }

    static #handleMenuClosing() {
        window.addEventListener("click", (event) => {
            if (!(event.target === document.querySelector(".menu-button"))) {
                document
                    .querySelector(".menu-window")
                    .classList.remove("visible");
            }
        });
    }
}

export default MobileMenuApplicationController;
