const textInput = document.getElementsByTagName("TEXTAREA")[0];
const upperCaseButton = document.getElementById("upper-case");
const lowerCaseButton = document.getElementById("lower-case");
const properCaseButton = document.getElementById("proper-case");
const sentenceCaseButton = document.getElementById("sentence-case");
const saveFileButton = document.getElementById("save-text-file");
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

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
saveFileButton.addEventListener("click", (e) => {
   download("text.txt", textInput.value)
});
