const sourceLang = document.getElementById("sourceLang").value



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



// Example usage:
function textSpeech() {
    const translatedText = document.getElementById("translatedText").value;
    const languageCode = document.getElementById("targetLang").value;
    speakText(translatedText, languageCode);
};

function copyText() {
    navigator.clipboard.writeText(document.getElementById("translatedText").value)
};

function speakText(text, lang = "en-US") {
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = lang;
    speech.rate = 1;
    speech.volume = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

