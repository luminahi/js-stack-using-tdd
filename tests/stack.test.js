import { Stack } from "../build/stack/stack.js";

describe("javascript stack", function () {
    it("it creates a empty stack", function () {
        const stack = new Stack();
        expect(stack.isEmpty()).toBe(true);
        expect(stack.peek()).toBe(undefined);
    });

    it("it properly adds a new item to the top", function () {
        const stack = new Stack();
        stack.push("apple");
        expect(stack.isEmpty()).toBe(false);
        expect(stack.peek()).toEqual("apple");
    });

    it("it properly removes the top", function () {
        const stack = new Stack();
        stack.push("orange");
        stack.push("avocado");
        stack.pop();
        expect(stack.isEmpty()).toBe(false);
        expect(stack.peek()).toEqual("orange");
    });
});
