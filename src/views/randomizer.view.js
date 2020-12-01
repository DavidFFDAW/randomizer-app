class View{
    constructor() {
        this.btnAddItem = document.getElementById('btn-add-item');
        this.inputText = document.getElementById('new-item');
        this.itemList = document.getElementById('item-list');
        this.inptRandomItem = document.getElementById('random-item');
        this.btnRandomItem = document.getElementById('btn-random-item');
    }

    // ------------------------- View Methods ---------------------------
    removeList = _ => this.itemList.innerHTML = '';

    refreshList = _array => {
        for (const element of _array){
            const divElement = document.createElement('div');
            divElement.innerText = element;
            divElement.classList.add('item');
            this.itemList.appendChild(divElement);
        }
    };

    // ---------------------------- Binding ------------------------------
    bindButtonAddItem(handler){
        this.btnAddItem.addEventListener('click', ev => {
            console.log(this.itemList.children);
            handler(this.inputText.value);
            this.inputText.value = '';
        });
    }
    bindButtonGetRandomItemFromList(handler){
        this.btnRandomItem.addEventListener('click', ev => {
            this.inptRandomItem.value = handler();
        });
    }
}