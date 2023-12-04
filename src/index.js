import "./stylesheets/minimum.css";
import "./stylesheets/style.css";
import {
    menuButtonData,
    menuContainerData,
    menuItemData1,
    menuItemData2,
} from "./data/data";
import MobileMenuController from "./javascript/controllers/mobileMenuController";
import MobileMenuContainer from "./javascript/models/mobileMenuContainer";
import MobileMenuButton from "./javascript/models/mobileMenuButton";
import MobileMenuButtonView from "./javascript/views/mobileMenuButtonView";
import MobileMenuButtonController from "./javascript/controllers/mobileMenuButtonController";
import MobileMenuItems from "./javascript/models/mobileMenuItems";
import MobileMenuApplicationController from "./javascript/controllers/mobileMenuApplicationController";

(() => {
    const mobileMenuApplicationController = new MobileMenuApplicationController(
        new MobileMenuButtonController(
            new MobileMenuButtonView(new MobileMenuButton(menuButtonData)),
        ),
        new MobileMenuController(
            new MobileMenuContainer(menuContainerData),
            new MobileMenuItems(menuItemData1, menuItemData2),
        ),
    );

    mobileMenuApplicationController.displayView(document.body);

    return {};
})();
