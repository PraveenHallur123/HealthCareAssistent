/* script.js */
function startVoiceInput() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.onresult = function(event) {
        document.getElementById('symptoms').value = event.results[0][0].transcript;
    };
    recognition.start();
}

function analyzeSymptoms() {
    let symptoms = document.getElementById("symptoms").value.toLowerCase();
    let result = "";

    const conditions = {
        "fever cough sore throat": "Possible flu or viral infection. Stay hydrated and rest. Seek medical attention if symptoms worsen.",
        "chest pain shortness of breath": "Possible heart condition. Seek emergency medical care immediately!",
        "headache nausea dizziness": "Possible migraine or dehydration. Drink fluids and rest.",
        "stomach pain vomiting": "Possible food poisoning or digestive issue. Consider seeing a doctor if symptoms persist.",
        "rash itching swelling": "Possible allergic reaction. Use antihistamines and consult a doctor if needed."
    };

    for (let key in conditions) {
        if (key.split(" ").every(word => symptoms.includes(word))) {
            result = conditions[key];
            break;
        }
    }

    if (!result) {
        result = "We recommend consulting a healthcare professional for a proper diagnosis.";
    }

    document.getElementById("result").innerHTML = `<p>${result}</p>`;
}

function realTimeAnalysis() {
    let symptoms = document.getElementById("symptoms").value;
    if (symptoms.length > 10) {
        document.getElementById("result").innerHTML = "Analyzing symptoms...";
    }
}
