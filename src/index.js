import "./stylesheets/minimum.css";
import "./stylesheets/style.css";
import {
    menuButtonData,
    menuContainerData,
    menuItemData1,
    menuItemData2,
} from "./data/data";
import MobileMenuController from "./javascript/controllers/mobileMenuController";
import MobileMenuButton from "./javascript/models/mobileMenuButton";
import MobileMenuButtonView from "./javascript/views/mobileMenuButtonView";
import MobileMenuButtonController from "./javascript/controllers/mobileMenuButtonController";

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
    // relationship between DOM and a view
    const menuButtonController = new MobileMenuButtonController(
        new MobileMenuButtonView(new MobileMenuButton(menuButtonData)),
    );

    // knowledge exists here about the layout
    mobileMenuController.displayView(document.body);
    document.body.appendChild(menuButtonController.getView());

    return {};
})();
