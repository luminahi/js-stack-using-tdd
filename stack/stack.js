class Stack {
    top;
    items;
    constructor() {
        this.top = -1;
        this.items = {};
    }
    peek() {
        if (this.top < 0)
            return;
        return this.items[`${this.top}`];
    }
    isEmpty() {
        let b = 0;
        for (let i in this.items) {
            b++;
            if (b > 0)
                return false;
        }
        return true;
    }
    push(item) {
        this.top += 1;
        this.items[`${this.top}`] = item;
    }
    pop() {
        if (this.top < 0)
            return;
        delete this.items[`${this.top}`];
        this.top -= 1;
    }
}
export { Stack };
