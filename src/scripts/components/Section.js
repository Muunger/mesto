export default class Section {
  constructor(renderer, containerSelector) {
    
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(items) {
    items.forEach((item) => {
      this._renderer({ data: item, position: "append" });
    })
  }

  addItem(element, position) {
    switch(position) {
      case "append":
        this._container.append(element);
        break;
      case "prepend":
        this._container.prepend(element);
        break;
      default:
        break;
    } 
  }
}