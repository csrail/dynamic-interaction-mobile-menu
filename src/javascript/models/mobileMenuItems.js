import MobileMenuItem from "./mobileMenuItem";

class MobileMenuItems {
    #itemObjects = [];

    constructor(...itemData) {
        this.itemData = itemData;
        this.#constructItemObjets(this.itemData);
    }

    #constructItemObjets(itemData) {
        itemData.forEach((item) => {
            const obj = new MobileMenuItem(item);
            this.#itemObjects.push(obj);
        });

        return this.#itemObjects;
    }

    getObjects() {
        return this.#itemObjects;
    }
}

export default MobileMenuItems;
