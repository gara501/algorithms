class Tree {
  constructor(totalItems) {
    this.totalItems = totalItems;
    this.render();
  }
  
  render() {
    let symbol = '#';
    let spaces = ' ';
    let arrayItems = [];
      for (let i = 0; i <= this.totalItems; i++) {
        if (arrayItems.indexOf(spaces) === -1) {
          for (let j = this.totalItems - i; j > 0; j--) {
              arrayItems.push(spaces);
          }
        }
        arrayItems.push(symbol);
        this.buildTree(arrayItems);
        arrayItems.shift(spaces);
      }
  }

  buildTree(line) {
    line = line.join('');
    console.log(line);
  }
}

const treeItems = 10;
let tree = new Tree(treeItems);