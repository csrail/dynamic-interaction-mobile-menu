import "./stylesheets/minimum.css";
import "./stylesheets/style.css";

(() => {
    const menuWindow = document.createElement("nav");
    menuWindow.classList.add("menu-window");
    menuWindow.classList.add("hidden");

    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("touchstart", () => {
        menuWindow.classList.add("visible");
    });

    const sequence = ["My Profile", "Messages", "Saved Posts", "Settings"];

    function createMenuElement(title) {
        const menuElement = document.createElement("div");
        menuElement.textContent = title;
        menuWindow.appendChild(menuElement);
        return menuElement;
    }

    function buildMenuElement(title) {
        return createMenuElement(title);
    }

    menuWindow.appendChild(buildMenuElement("My Profile"));
    document.body.appendChild(menuWindow);
    document.body.appendChild(menuButton);

    return {};
})();
