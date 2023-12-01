class ViewInterface {
    constructor(...views) {
        this.views = views;
    }

    displayViews() {
        this.views.forEach((view) => {
            view.displayView();
        });
    }
}

export default ViewInterface;
