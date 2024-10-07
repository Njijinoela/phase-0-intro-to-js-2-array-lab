// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
  cats.push("Ralph");
}

function destructivelyPrependCat(name) {
  cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  return [...cats, "Broom"];  // Creates a new array
}

function prependCat(name) {
  return ["Arnold", ...cats];  // Creates a new array
}

function removeLastCat() {
  return cats.slice(0, cats.length - 1);  // Creates a new array
}

function removeFirstCat() {
  return cats.slice(1);  // Creates a new array
}
