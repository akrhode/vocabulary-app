let dictionary = JSON.parse(localStorage.getItem("dictionary")) || {};
let randomItalianWord;

function addVocabulary() {
  dictionary[italianText.value] = englishText.value;

  italianText.value = "";
  englishText.value = "";

  localStorage.setItem("dictionary", JSON.stringify(dictionary));
  render();
}

function render() {
  vocabularyList.innerHTML = "";
  for (let key in dictionary)
    vocabularyList.innerHTML += `<li>${key} - ${dictionary[key]}</li>`;
}

function nextVocabulary() {
  let obj_keys = Object.keys(dictionary);
  randomItalianWord = obj_keys[Math.floor(Math.random() * obj_keys.length)];
  words.innerHTML = `${dictionary[randomItalianWord]}`;
}

function compare() {
  if (italianText.value == randomItalianWord) {
    answer.innerHTML = "Right!";
  } else {
    answer.innerHTML = "Wrong!";
  }
  italianText.value = "";
  nextVocabulary();
}
