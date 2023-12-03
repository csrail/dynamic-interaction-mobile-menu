import MobileMenuContainer from "../models/mobileMenuContainer";
import MobileMenuItems from "../models/mobileMenuItems";
import MobileMenuContainerView from "../views/mobileMenuContainerView";
import MobileMenuItemViews from "../views/mobileMenuItemViews";

class MobileMenuController {
    #containerObject;

    #itemObjects = [];

    #containerView;

    #itemViews;

    constructor(
        containerObject = new MobileMenuContainer(),
        itemObjects = new MobileMenuItems(),
    ) {
        this.#containerObject = containerObject;
        this.#itemObjects = itemObjects.getObjects();
        this.#containerView = new MobileMenuContainerView(
            this.#containerObject,
        );
        this.#itemViews = new MobileMenuItemViews(this.#itemObjects);
    }

    static #buildView(containerView, itemViews) {
        const component = containerView.getView();

        itemViews.getItemViews().forEach((itemView) => {
            component.appendChild(itemView.getView());
        });

        return component;
    }

    displayView(node) {
        node.appendChild(
            MobileMenuController.#buildView(
                this.#containerView,
                this.#itemViews,
            ),
        );
    }
}

export default MobileMenuController;
