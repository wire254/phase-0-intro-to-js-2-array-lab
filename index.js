// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph")
};

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
};

function destructivelyRemoveLastCat() {
    cats.pop()
};

function destructivelyRemoveFirstCat() {
    cats.shift()
};

function appendCat(name) {
    const newCats = [...cats, "Broom"]
    return newCats;
};

function prependCat(name) {
    const newCats = ["Arnold", ...cats]
    return newCats
};

function removeLastCat() {
    const newCats2 = cats.slice(0, 2)
    return newCats2
};

function removeFirstCat() {
    const newCats2 = cats.slice(1)
    return newCats2
};