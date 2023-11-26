let toLang = "English"; // language to translate to
const swap = document.getElementById("switch");
swap.addEventListener("click", function() {
  let box1 = document.getElementById("box-1");
  let box2 = document.getElementById("box-2");
  document.getElementById("input").setAttribute("placeholder", `${box2.textContent} input`);
  let temp = box1.textContent;
  box1.textContent = box2.textContent; // swap language-
  box2.textContent = temp;             // boxes
  toLang = box2.textContent;
});

const tokiPonaToEnglishDefinitions = new Map([
  ["akesi", "reptile, lizard, non-cute animal"],
  ["ala", "no, nothing, none, zero"],
  ["alasa", "hunt, gather, search, to try"],
  ["ale", "all, everything, universe, abundant"],
  ["anpa", "lower part, lowly, downward, dependent, conquer, defeat"],
  ["ante", "difference, change, other"],
  ["anu", "or"],
  ["awen", "stability, safety, keep, endure, protect, continue"],
  ["e", "object identifier"],
  ["en", "and"],
  ["epiku", "awesome, epic, cool"],
  ["esun", "trade, transaction, exchange, commercial"],
  ["ijo", "object, thing, matter, material, physical"],
  ["ike", "bad, uneccessary"],
  ["ilo", "tool, machine, device, useful, electronic, matellic"],
  ["insa", "inside, center, between, contents"],
  ["jaki", "dirt, waste, disgust, toxic, unclean, unsanitary"],
  ["jan", "person, people, human-like, humanity, personal"],
  ["jasima", "mirror, echo, reflect, opposite, reverse"],
  ["jelo", "yellow"],
  ["jo", "possess, property, own, have, carry, contain, hold"],
  ["kala", "fish, marine, marine creature, sea creature"],
  ["kalama", "sound, noise, loud, recite, to play"],
  ["kama", "event, arrival, become, succeed"],
  ["kasi", "plant, grass, herb, leaf"],
  ["ken", "ability, posibility, right, liberty, can"],
  [""]
]);

const input = document.getElementById("input");
const output = document.getElementById("output");
const warning = document.getElementById("english-warning");
let warningShown = false;
input.addEventListener("input", function() {
  if (toLang == "English") {
    output.textContent = tokiPonaToEnglishDefinitions.get(input.value) || "Invalid input";
  } else if (toLang == "Toki Pona") {
    
  }
});