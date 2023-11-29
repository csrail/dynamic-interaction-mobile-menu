import "./stylesheets/minimum.css";
import "./stylesheets/style.css";
import htmlMixin from "./javascript/htmlMixin";
import menuContainerData from "./data/data";
import MobileMenuContainer from "./javascript/mobileMenuModel";
import MobileMenuView from "./javascript/mobileMenuView";

(() => {
    const mobileMenuContainer = new MobileMenuContainer(menuContainerData);
    const mobileMenuView = new MobileMenuView(mobileMenuContainer);
    const mobileMenuContainerElement = mobileMenuView.buildContainer();

    const menuButton = htmlMixin.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("touchstart", () => {
        mobileMenuContainerElement.classList.add("visible");
    });

    const sequence = ["My Profile", "Messages", "Saved Posts", "Settings"];

    function createMenuItemElement(title) {
        const component = document.createElement("div");
        component.textContent = title;
        mobileMenuContainerElement.appendChild(component);
        return component;
    }

    function buildMenuItemElement(title) {
        return createMenuItemElement(title);
    }

    mobileMenuContainerElement.appendChild(buildMenuItemElement("My Profile"));
    document.body.appendChild(mobileMenuContainerElement);
    document.body.appendChild(menuButton);

    return {};
})();
