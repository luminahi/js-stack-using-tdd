import { Items } from "./Item";

class Stack<T1> {
    private top: number;
    private items: Items<T1>;

    constructor() {
        this.top = -1;
        this.items = {};
    }

    peek() {
        if (this.top < 0) return;
        return this.items[`${this.top}`];
    }

    isEmpty(): boolean {
        let b = 0;
        for (let i in this.items) {
            b++;
            if (b > 0) return false;
        }
        return true;
    }

    push(item: T1) {
        this.top += 1;
        this.items[`${this.top}`] = item;
    }

    pop() {
        if (this.top < 0) return;
        delete this.items[`${this.top}`];
        this.top -= 1;
    }
}

export { Stack };
