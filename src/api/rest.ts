export function timeout(value) {
    return setTimeout(this.exampleFunction(value), 2000);
}

function exampleFunction(value) {
    console.log("Waiting");
    return !value;
}
Ł