class interactiveListModel{
    constructor(){
        this.items = [];
    }

    setItem(item){
        this.items.push(item);
    }

    getItem(){
        return this.items;
    }
}