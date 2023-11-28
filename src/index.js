import "./stylesheets/minimum.css";
import "./stylesheets/style.css";
import htmlMixin from "./javascript/htmlMixin";
import MobileMenuContainer from "./javascript/mobileMenuModel";
import menuContainerData from "./data/data";

(() => {
    let mobileMenuContainer = new MobileMenuContainer(menuContainerData);
    mobileMenuContainer = mobileMenuContainer.buildContainer();

    const menuButton = htmlMixin.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("touchstart", () => {
        mobileMenuContainer.classList.add("visible");
    });

    const sequence = ["My Profile", "Messages", "Saved Posts", "Settings"];

    function createMenuElement(title) {
        const menuElement = document.createElement("div");
        menuElement.textContent = title;
        mobileMenuContainer.appendChild(menuElement);
        return menuElement;
    }

    function buildMenuElement(title) {
        return createMenuElement(title);
    }

    mobileMenuContainer.appendChild(buildMenuElement("My Profile"));
    document.body.appendChild(mobileMenuContainer);
    document.body.appendChild(menuButton);

    return {};
})();
