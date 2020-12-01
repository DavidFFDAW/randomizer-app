class Service {
    constructor() {}

    parseArray = _list => Array.from(_list).map((elem) => elem.innerText);
    getRandomNumber = (min,max) => Math.floor(Math.random() * (max - min)) + min;
    getRandomItem = _items => _items[this.getRandomNumber(0,_items.length)];
    addToArray = (_array,_name) => [..._array,_name];
}