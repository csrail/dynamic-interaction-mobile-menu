import "./stylesheets/minimum.css";
import "./stylesheets/style.css";
import htmlMixin from "./javascript/htmlMixin";
import menuContainerData from "./data/data";
import MobileMenuContainer from "./javascript/mobileMenuModel";
import MobileMenuView from "./javascript/mobileMenuView";

(() => {
    const mobileMenuContainer = new MobileMenuContainer(menuContainerData);
    const mobileMenuView = new MobileMenuView(mobileMenuContainer);
    const mobileMenuElement = mobileMenuView.buildContainer();

    const menuButton = htmlMixin.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("touchstart", () => {
        mobileMenuElement.classList.add("visible");
    });

    const sequence = ["My Profile", "Messages", "Saved Posts", "Settings"];

    function createMenuElement(title) {
        const menuElement = document.createElement("div");
        menuElement.textContent = title;
        mobileMenuElement.appendChild(menuElement);
        return menuElement;
    }

    function buildMenuElement(title) {
        return createMenuElement(title);
    }

    mobileMenuElement.appendChild(buildMenuElement("My Profile"));
    document.body.appendChild(mobileMenuElement);
    document.body.appendChild(menuButton);

    return {};
})();
