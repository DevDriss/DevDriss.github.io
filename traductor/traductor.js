async function translating() {
    try {
    const input = await document.getElementById("sourceText").value
    const sourceLang = await document.getElementById("sourceLang").value
    const targetLang = await document.getElementById("targetLang").value
    const Key = "dd094ff4-beb0-4fe9-a298-e5f3ffc36c96:fx";
    // to secure the key, I migth be able to put it in some api, or put it in my own api on a ras pi

    // const data = new URLSearchParams();
    // data.append("auth_key", K);
    // data.append("text", `${input}`);
    // data.append("target_lang", `${targetLang}`);
    // data.append("source_lang", `${sourceLang}`);
    // console.log(data.toString());
    const url = "https://api-free.deepl.com/v2/translate";
    const response = await fetch(url, {
        method: "POST",
        body: new URLSearchParams({
            auth_key: Key,
            text: input,
            target_lang: targetLang,
            source_lang: sourceLang,
        })
    });
    // document.getElementById("code_response").innerHTML = response.translations;
    const jsonResponse = await response.json();
    document.getElementById("translatedText").innerHTML = jsonResponse.translations[0].text;

    document.getElementById("code_response").innerHTML = JSON.stringify(jsonResponse);
    
    document.getElementById("code_input").innerHTML = JSON.stringify(input);
    document.getElementById("code_target_lang").innerHTML = JSON.stringify(targetLang);
    if (sourceLang) {
        document.getElementById("code_source_lang").innerHTML = JSON.stringify(sourceLang);
    } else {document.getElementById("code_source_lang").innerHTML ='"AUTO"'}

} catch (error) {console.error("this is the error: ", error);
    throw error;}

};
















