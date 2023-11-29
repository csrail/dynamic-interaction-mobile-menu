import "./stylesheets/minimum.css";
import "./stylesheets/style.css";
import htmlMixin from "./javascript/htmlMixin";
import { menuContainerData, menuItemData1 } from "./data/data";
import MobileMenuContainer from "./javascript/models/mobileMenuContainer";
import MobileMenuItem from "./javascript/models/mobileMenuItem";
import MobileMenuView from "./javascript/mobileMenuView";

(() => {
    const mobileMenuContainer = new MobileMenuContainer(menuContainerData);
    const mobileMenuItem = new MobileMenuItem(menuItemData1);
    const mobileMenuView = new MobileMenuView(
        mobileMenuContainer,
        mobileMenuItem,
    );
    const mobileMenuContainerElement = mobileMenuView.buildContainer();
    const mobileMenuItemElement = mobileMenuView.buildItem();

    const menuButton = htmlMixin.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("touchstart", () => {
        mobileMenuContainerElement.classList.add("visible");
    });

    mobileMenuContainerElement.appendChild(mobileMenuItemElement);
    document.body.appendChild(mobileMenuContainerElement);
    document.body.appendChild(menuButton);

    return {};
})();
