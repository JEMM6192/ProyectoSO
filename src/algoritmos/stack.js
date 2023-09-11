// stack.js


class Stack {
   
    constructor() {
      this.items = [];
    }
  
    push(item) {  // adicionar um elemento
      this.items.push(item);
    }
  
    pop() { // remover  último elemento
      if (!this.isEmpty()) {
        return this.items.pop();
      }
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() { // tamaño de la pila
      return this.items.length;
    }
  
    peek() { // ver  último elemento
      if (!this.isEmpty()) {
        return this.items[this.items.length - 1];
      }
    }
  }
  
  export default Stack;
  