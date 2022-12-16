import uniqueRamdomArray from "unique-random-array";
import starwarsNames from "./starwars-names.json";

var getRandomItem = uniqueRamdomArray(starwarsNames);

module.exports = {
  all: starwarsNames,
  random: random,
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  }
  var randomItems = [];
  for (let i = 0; i < number; i++) {
    randomItems.push(getRandomItem());
  }
  return randomItems;
}

