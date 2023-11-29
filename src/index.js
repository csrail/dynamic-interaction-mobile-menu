import "./stylesheets/minimum.css";
import "./stylesheets/style.css";
import htmlMixin from "./javascript/htmlMixin";
import { menuContainerData, menuItemData1 } from "./data/data";
import MobileMenuContainer from "./javascript/models/mobileMenuContainer";
import MobileMenuItem from "./javascript/models/mobileMenuItem";
import MobileMenuView from "./javascript/mobileMenuView";

(() => {
    // knowledge exists here about
    // co-ordination of parts
    // dependency injection
    const mobileMenuContainer = new MobileMenuContainer(menuContainerData);
    const mobileMenuItem = new MobileMenuItem(menuItemData1);
    const mobileMenuView = new MobileMenuView(
        mobileMenuContainer,
        mobileMenuItem,
    );
    const mobileMenuContainerElement = mobileMenuView.buildContainer();
    const mobileMenuItemElement = mobileMenuView.buildItem();

    // knowledge exists here about
    // DOM element creation
    // event handling
    const menuButton = htmlMixin.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("touchstart", () => {
        mobileMenuContainerElement.classList.add("visible");
    });

    // knowledge exists here about the layout
    mobileMenuContainerElement.appendChild(mobileMenuItemElement);
    document.body.appendChild(mobileMenuContainerElement);
    document.body.appendChild(menuButton);

    return {};
})();
