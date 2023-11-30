import MobileMenuContainer from "../models/mobileMenuContainer";
import MobileMenuItem from "../models/mobileMenuItem";
import MobileMenuContainerView from "../views/mobileMenuContainerView";
import MobileMenuItemView from "../views/mobileMenuItemView";

class MobileMenuController {
    #containerObject;

    #itemObjects = [];

    constructor(containerData, ...itemData) {
        this.#containerObject = new MobileMenuContainer(containerData);
        this.#constructMenuItems(itemData);
    }

    #constructMenuItems(itemData) {
        itemData.forEach((item) => {
            this.#itemObjects.push(new MobileMenuItem(item));
        });
    }

    static #buildView(container, items) {
        const containerView = new MobileMenuContainerView(container);
        const component = containerView.getView();

        items.forEach((item) => {
            const itemView = new MobileMenuItemView(item);
            component.appendChild(itemView.getView());
        });

        return component;
    }

    displayView(node) {
        node.appendChild(
            // this.#buildView(this.#containerObject, this.#itemObjects),
            // note the above doesn't work, since the method is called on an instance
            // rather than being called at the class
            MobileMenuController.#buildView(
                this.#containerObject,
                this.#itemObjects,
            ),
        );
    }
}

export default MobileMenuController;
