
async function translating() {
    try {
        const input = document.getElementById("sourceText").value;
        const sourceLang = document.getElementById("sourceLang").value;
        const targetLang = document.getElementById("targetLang").value;
        
        const langPair = (sourceLang && sourceLang !== "auto") ? `${sourceLang}|${targetLang}` : `|${targetLang}`;
        const url = `https://api.mymemory.translated.net/get?q=
            ${encodeURIComponent(input)}&langpair=${langPair}`;
        
        // Log the request§
        
        console.log("=== MyMemory translation request ===");
        console.log("input text:", input);
        console.log("source lang:", sourceLang || "auto-detect");
        console.log("target lang:", targetLang);
        console.log("language pair:", langPair);
        console.log("URL:", url);
        console.log("------------------------");
        
        const response = await fetch(url);
        
        document.getElementById("code_langpair").innerHTML = langPair;
        document.getElementById("code_input").innerHTML = input;

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const jsonResponse = await response.json();
        

        console.log("=== MyMemory translation response ===");
        console.log("full response:", jsonResponse);
        console.log("translated text:", jsonResponse.responseData.translatedText);
        console.log("-----------");
        

        document.getElementById("translatedText").innerHTML = jsonResponse.responseData.translatedText;
        
        console.log("Translation successful:", jsonResponse.responseData.translatedText);
        document.getElementById("code_response").innerHTML = JSON.stringify(jsonResponse);;

        
    } catch (error) {
        console.error("Translation error:", error);
        document.getElementById("translatedText").innerHTML = "Translation failed. Please try again.";
    }
}









// async function translating() {
//     try {
//         const input = await document.getElementById("sourceText").value
//         const sourceLang = await document.getElementById("sourceLang").value
//         const targetLang = await document.getElementById("targetLang").value
//         const Key = "dd094ff4-beb0-4fe9-a298-e5f3ffc36c96:fx";
//         // to secure the key, I migth be able to put it in some api, or put it in my own api on a ras pi
//         const url = "https://api-free.deepl.com/v2/translate";
        
        
        
//         const response = await fetch(url, {
//             method: "POST",
//             body: data
//         });
        
//         const data = new URLSearchParams();
//         data.append("auth_key", `${Key}`);
//         data.append("text", `${input}`);
//         data.append("target_lang", `${targetLang}`);  //maybe this is the synthax of this value??
//         data.append("source_lang", `${sourceLang}`);
//         console.log(data.toString());
        
        
// // document.getElementById("code_response").innerHTML = response.translations;
// const jsonResponse = await response.json();
// document.getElementById("translatedText").innerHTML = jsonResponse.translations[0].text;

// // document.getElementById("code_response").innerHTML = JSON.stringify(jsonResponse);

// // document.getElementById("code_input").innerHTML = JSON.stringify(input);
// // document.getElementById("code_target_lang").innerHTML = JSON.stringify(targetLang);
// // if (sourceLang) {
// //     document.getElementById("code_source_lang").innerHTML = JSON.stringify(sourceLang);
// // } else {document.getElementById("code_source_lang").innerHTML ='"AUTO"'}
    
// // } catch (error) {console.error("this is the error: ", error);
// //     throw error;}
    
// // };





// // const response = await fetch(url, {
//     //     method: "POST",
//     //     body: new URLSearchParams({
//         //         auth_key: Key,
//         //         text: input,
//         //         target_lang: targetLang,
//         //         source_lang: sourceLang,
//         //     })
//         // });
        
        
        
        



