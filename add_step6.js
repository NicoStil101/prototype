const fs = require('fs');

const content = fs.readFileSync('app.js', 'utf8');

const translations = {
    de: { title: "Schritt 6", desc: "Tournummer eingeben" },
    en: { title: "Step 6", desc: "Enter tour number" },
    ar: { title: "خطوة 6", desc: "أدخل رقم الجولة" },
    bg: { title: "Стъпка 6", desc: "Въведете номер на обиколка" },
    cs: { title: "Krok 6", desc: "Zadejte číslo prohlídky" },
    el: { title: "Βήμα 6", desc: "Εισαγάγετε αριθμό περιήγησης" },
    es: { title: "Paso 6", desc: "Introducir número de tour" },
    fr: { title: "Étape 6", desc: "Entrer le numéro de tour" },
    hu: { title: "6. lépés", desc: "Adja meg a túra számát" },
    it: { title: "Passo 6", desc: "Inserisci il numero del tour" },
    nl: { title: "Stap 6", desc: "Voer het tournummer in" },
    pl: { title: "Krok 6", desc: "Wprowadź numer trasy" },
    pt: { title: "Passo 6", desc: "Insira o número da excursão" },
    ro: { title: "Pasul 6", desc: "Introduceți numărul turneului" },
    ru: { title: "Шаг 6", desc: "Введите номер тура" },
    sk: { title: "Krok 6", desc: "Zadajte číslo prehliadky" },
    tr: { title: "Adım 6", desc: "Tur numarasını girin" },
    uk: { title: "Крок 6", desc: "Введіть номер туру" }
};

let currentLang = '';

let newContent = content.replace(/([a-z]{2}):\s*\{([\s\S]*?)steps:\s*\[([\s\S]*?)\]/g, (match, lang, beforeSteps, stepsBlock) => {
    let lines = stepsBlock.split('\n');
    
    // Find the last item and its index
    let lastStepLineIndex = -1;
    for (let i = lines.length - 1; i >= 0; i--) {
        if (lines[i].includes('{') && lines[i].includes('title:')) {
            lastStepLineIndex = i;
            break;
        }
    }
    
    if (lastStepLineIndex !== -1 && translations[lang]) {
        // Add comma to the last step if it doesn't have one
        if (!lines[lastStepLineIndex].trim().endsWith(',')) {
            lines[lastStepLineIndex] += ',';
        }
        
        // Add the new step
        let indent = lines[lastStepLineIndex].match(/^\s*/)[0];
        let newStep = `${indent}{ title: "${translations[lang].title}", desc: "${translations[lang].desc}" }`;
        lines.splice(lastStepLineIndex + 1, 0, newStep);
    }
    
    return `${lang}: {${beforeSteps}steps: [${lines.join('\n')}]`;
});

fs.writeFileSync('app.js', newContent);
console.log("Updated app.js with Step 6");
