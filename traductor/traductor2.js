// const e = require("express");

// const sourceLang = document.getElementById("sourceLang").value



let time = setTimeout(undefined);

function requestTimer() {
    if (time) {clearTimeout(time)}
    time = setTimeout(translating, 700)

};

function eraseText() {
    document.getElementById("sourceText").value = ""
};

function switchLang() {
    const sourceLang = document.getElementById("sourceLang").value
    const targetLang = document.getElementById("targetLang").value
    let x = document.getElementById("translatedText").value
    let y = document.getElementById("sourceText").value
    if (sourceLang) {
        document.getElementById("sourceLang").value = targetLang;
        document.getElementById("targetLang").value = sourceLang;
        document.getElementById("sourceText").value = x
        document.getElementById("translatedText").value = y

    } else {alert("Can't switch language when source language is 'Detecte Language'.");}
};

function copyText() {
    navigator.clipboard.writeText(document.getElementById("translatedText").value)
};


// speaker
function textSpeech() {
    const textSpeaker = document.getElementById("translatedText").value;
    const langSpeaker = document.getElementById("targetLang").value;

    if (langSpeaker=="JA"|langSpeaker=="RU"|langSpeaker=="ZH"|langSpeaker=="AR") {
        alert("Language supported by Text-to-Speech: French, English, Italian, Dutch, German, Spanish.");
        return};

        let speech = new SpeechSynthesisUtterance();
        speech.text = textSpeaker;
        speech.lang = langSpeaker;
        speech.rate = 1;
        speech.volume = 1;
        speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    };
    


function fileTranslation(e) {
    const file = e.target.files[0];       // puts file in var file
// yo need to write [0] cause files refers to the list of files from the input (idk why, but there you go)
    if (!file) {
        alert("You did not upload any file.")};
    
    const reader = new FileReader();      // makes object that read the file
    reader.onload = function(x) {       // defines function that will run when obj is initialized
        const content = x.target.result;  // puts content of file in a var (x is the file)
        console.log(content)               
        document.getElementById("sourceText").value = content
        translating()
    };
    reader.readAsText(file)      // this initiallizes the object that reads the file
// , which launches the onload function
    const fileName = e.target.files[0]?.name || 'No document selected';
    document.querySelector('.custom-file-label').textContent = fileName
}
