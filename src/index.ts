import { Stack } from "./stack/stack.js";

function main() {
    const fruits = new Stack<string>();

    console.log(fruits);

    fruits.push("orange");
    fruits.push("apple");
    fruits.push("watermelon");
    console.log(fruits.peek());

    console.log(fruits);

    fruits.pop();
    fruits.pop();
    fruits.pop();
    fruits.pop();
    fruits.pop();

    console.log(fruits);

    fruits.push("melon");

    console.log(fruits);
}

main();
