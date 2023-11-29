import "./stylesheets/minimum.css";
import "./stylesheets/style.css";
import htmlMixin from "./javascript/htmlMixin";
import { menuContainerData, menuItemData1 } from "./data/data";
import MobileMenuContainer from "./javascript/models/mobileMenuContainer";
import MobileMenuItem from "./javascript/models/mobileMenuItem";
import MobileMenuContainerView from "./javascript/views/mobileMenuContainerView";
import MobileMenuItemView from "./javascript/views/mobileMenuItemView";
import ViewInterface from "./javascript/viewInterface";

(() => {
    // knowledge exists here about
    // co-ordination of parts
    // dependency injection
    const mobileMenuContainer = new MobileMenuContainer(menuContainerData);
    const mobileMenuItem = new MobileMenuItem(menuItemData1);
    const mobileMenuContainerView = new MobileMenuContainerView(
        mobileMenuContainer,
    );
    const mobileMenuItemView = new MobileMenuItemView(mobileMenuItem);
    const mobileMenuContainerElement = mobileMenuContainerView.displayView();
    const mobileMenuItemElement = mobileMenuItemView.displayView();

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
