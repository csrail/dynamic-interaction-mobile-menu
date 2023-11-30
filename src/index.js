import "./stylesheets/minimum.css";
import "./stylesheets/style.css";
import htmlMixin from "./javascript/htmlMixin";
import { menuContainerData, menuItemData1, menuItemData2 } from "./data/data";
import MobileMenuController from "./javascript/controllers/mobileMenuController";

(() => {
    // knowledge exists here about
    // co-ordination of parts
    // dependency injection
    const mobileMenuController = new MobileMenuController(
        menuContainerData,
        menuItemData1,
        menuItemData2,
    );

    // knowledge exists here about
    // DOM element creation
    // event handling
    const menuButton = htmlMixin.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("touchstart", () => {
        document.querySelector(".menu-window").classList.add("visible");
    });

    // knowledge exists here about the layout
    // mobileMenuContainerElement.appendChild(mobileMenuItemElement);
    // document.body.appendChild(mobileMenuContainerElement);
    mobileMenuController.displayView(document.body);
    document.body.appendChild(menuButton);

    return {};
})();
