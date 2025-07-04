
async function translating() {
    try {
        const input = document.getElementById("sourceText").value;
        const sourceLang = document.getElementById("sourceLang").value;
        const targetLang = document.getElementById("targetLang").value;
        
        const langPair = (sourceLang && sourceLang !== "auto") ? `${sourceLang}|${targetLang}` : `|${targetLang}`;
        const url = `https://api.mymemory.translated.net/get?q=
            ${encodeURIComponent(input)}&langpair=${langPair}`; // actual request (no up P for the after &)
        
        // log request§
        
        console.log("=== myMemory translation request =----"); // to check for matching 
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
        
        const jsonResponse = await response.json(); // does not print in HTML because raw JS.
        

        console.log("----MyMemory translation response ----");
        console.log("full response:", jsonResponse);
        console.log("translated text:", jsonResponse.responseData.translatedText);
        console.log("-----------");
        
        document.getElementById("translatedText").innerHTML = jsonResponse.responseData.translatedText;
        
        console.log("translation successful:", jsonResponse.responseData.translatedText);
        document.getElementById("code_response").innerHTML = JSON.stringify(jsonResponse);;

        
    } catch (error) {
        console.error("translation error:", error);
        document.getElementById("translatedText").innerHTML = "translation failed, try again.";
    }
}



//this is for the previous api, if remake, put key
// // const response = await fetch(url, {
//     //     method: "POST",
//     //     body: new URLSearchParams({
//         //         auth_key: Key,
//         //         text: input,
//         //         target_lang: targetLang,
//         //         source_lang: sourceLang,
//         //     })
//         // });
        
        
        
        



