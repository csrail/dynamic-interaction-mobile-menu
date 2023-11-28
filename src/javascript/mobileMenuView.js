import MobileMenuContainer from "./mobileMenuModel";

class MobileMenuView {
    constructor(mobileMenu = new MobileMenuContainer()) {
        this.menu = mobileMenu;
    }
}

export default MobileMenuView;
