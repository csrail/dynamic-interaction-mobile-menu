const menuButtonData = {
    elementType: "button",
    id: "the-button",
    classes: ["menu-button"],
    title: "Menu",
};

const menuContainerData = {
    elementType: "nav",
    classes: ["menu-window", "hidden"],
    // classes: ["menu-window"],
};

const menuItemData1 = {
    elementType: "div",
    classes: ["menu-item"],
    title: "My Profile",
    hyperlink: "/profile",
};

const menuItemData2 = {
    elementType: "div",
    classes: ["menu-item"],
    title: "Messages",
    hyperlink: "/messages",
};

const menuItemData3 = {
    elementType: "div",
    classes: ["menu-item"],
    title: "Saved Posts",
    hyperlink: "/saved_posts",
    hyperlinkClasses: ["hyperlink"],
};

const menuItemData4 = {
    elementType: "div",
    classes: ["menu-item"],
    title: "Settings",
    hyperlink: "/settings",
};

export {
    menuButtonData,
    menuContainerData,
    menuItemData1,
    menuItemData2,
    menuItemData3,
    menuItemData4,
};
