class interactiveListController{
    constructor(model, view){
        this.model = model;
        this.view = view;

        this.view.addListOfItems(this.handlerAddItem.bind(this));
        this.view.checkedItem();
    }

    handlerAddItem(text){
        this.model.setItem(text)
        this.view.displayItem(this.model.getItem())
    }

}