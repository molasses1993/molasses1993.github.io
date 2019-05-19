$('button').click(function() {
  $('h2').text(randomEl(adjectives) + ' ' + randomEl(nouns));
  selectElementContents($('h2')[0]);
});

function randomEl(list) {
  var i = Math.floor(Math.random() * list.length);
  return list[i];
}

function selectElementContents(el) {
  var range = document.createRange();
  range.selectNodeContents(el);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

var adjectives = ["moist", "lugubrious", "flat", "sexual", "oozing", "pussy", "orgy", "Jesus", "fucker", "curdled", "blood", "pagan", "scum", "cum", "christ", "dirt", "maggot", "fucking", "knife", "worm", "gut", "pus", "smegma", "phlegm", "jizz", "ooze", "fester", "festering", "horse", "mucus", "sinus", "sinusoidal", "sacred", "antichrist", "secretion", "secret", "squirting", "squirt", "snot", "curd", "putrid", "putrification", "ritual", "suckle", "suckling", "vomit", "vomiting", "anal", "anus", "larval", "larvae", "puke", "puking", "spew", "yeast", "bulbous", "engorging", "congealing", "veiny", "gristling", "lard", "smear", "fungal", "snot", "damp", "thrust", "gyrating", "biggot", "grind", "grinding", "succulent", "infected", "grimy", "dank", "sweaty", "gullet", "swelling", "dangling", "grotesque", "nauseous", "piling", "bulbous", "septic", "fecal", "moist", "renal", "viscous", "shit", "corpse","flaccid","cannibal","sinewy","crotch","bone","fatal","death","teeming"];
var nouns = ["odor","swab","death","nibblets", "toejam","orifice","saliva", "exorcism", "anvil", "maggot", "intestines", "christ", "pussy", "murder", "succubus", "grinder", "pile", "nausea", "grime", "biggot", "snot", "fungus", "lard", "smear", "vein", "curd", "lard", "gristle", "meat", "smear", "yeast", "wound", "puke", "maggots", "nausea", "horse", "fucker", "ritual", "cum", "fuck", "god", "dagger", "blood", "tendon", "mud", "dirt", "brains", "mucus", "sinus", "infection", "leakage", "yeast", "cum", "anus", "penis", "Vomit", "rot", "nasal passage", "mucuous", "discharge", "lung", "loogie", "butthole", "schpincter", "fetus", "jizz", "seepage", "smegma", "pus", "orifice", "sputum", "discharge", "bitch", "corpse", "bags","eaters","coitus","membrane","thrust","cannibal"];

$('button').click();

