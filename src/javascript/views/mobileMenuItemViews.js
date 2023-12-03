import MobileMenuItemView from "./mobileMenuItemView";

class MobileMenuItemViews {
    #itemViews = [];

    constructor(menuItems) {
        this.#constructItemViews(menuItems);
    }

    #constructItemViews(menuItems) {
        menuItems.forEach((item) => {
            const itemView = new MobileMenuItemView(item);
            this.#itemViews.push(itemView);
        });
    }

    getItemViews() {
        return this.#itemViews;
    }
}

export default MobileMenuItemViews;
