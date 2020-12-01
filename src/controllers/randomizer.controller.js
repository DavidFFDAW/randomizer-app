class Controller{
    constructor(randView,randService) {
        this.view = randView;
        this.service = randService;
        this.itemsChildren = this.service.parseArray(this.view.itemList.children);

        this.view.bindButtonAddItem(this.handlerButtonAddNewItem);
        this.view.bindButtonGetRandomItemFromList(this.handlerButtonGetRandomItem);
    }
    
    handlerButtonGetRandomItem = _ => this.service.getRandomItem(this.itemsChildren);

    handlerButtonAddNewItem = _newItemName => {
        this.itemsChildren = this.service.addToArray(this.itemsChildren,_newItemName);
        this.view.removeList();
        this.view.refreshList(this.itemsChildren);
    };




}