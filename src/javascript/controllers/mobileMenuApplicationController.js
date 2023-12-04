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
    }
}

export default MobileMenuApplicationController;
