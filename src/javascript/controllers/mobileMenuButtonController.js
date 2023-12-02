import MobileMenuButtonView from "../views/mobileMenuButtonView";

class MobileMenuButtonController {
    constructor(mobileMenuButtonView = new MobileMenuButtonView()) {
        this.mobileMenuButtonView = mobileMenuButtonView;
    }

    getView() {
        return this.mobileMenuButtonView.getButton();
    }
}

export default MobileMenuButtonController;
