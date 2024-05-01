const textInput = document.getElementsByTagName("TEXTAREA")[0];
const upperCaseButton = document.getElementById("upper-case");
const lowerCaseButton = document.getElementById("lower-case");
const properCaseButton = document.getElementById("proper-case");
const sentenceCaseButton = document.getElementById("sentence-case");

upperCaseButton.addEventListener("click", (e) => {
    textInput.value = textInput.value.toUpperCase();
});

lowerCaseButton.addEventListener("click", (e) => {
    textInput.value = textInput.value.toLowerCase();
});

properCaseButton.addEventListener("click", (e) => {
    const words = textInput.value.split(" ");
    const wordArray = [];
    for(let word of words) {
        word = word.toLowerCase();
        wordArray.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    textInput.value = wordArray.join(" ");
});

sentenceCaseButton.addEventListener("click", (e) => {
    const inputText = textInput.value;
    const results = inputText.match( /[^\.!\?]+[\.!\?]+/g );
    const sentenceArray = [];
    for(let result of results) {
        result = result.toLowerCase().trim();
        sentenceArray.push(result.charAt(0).toUpperCase() + result.slice(1));
    }
    textInput.value = sentenceArray.join(" ");
});
