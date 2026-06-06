const app = {
    // Application State
    state: {
        currentView: 'languages',
        currentLanguage: 'en',
        currentStepIndex: 0,
        helpRequested: false
    },

    // Content Data
    content: {
        de: {
            helpBtn: "Hilfe anfordern", helpSent: "Hilfe ist unterwegs!", placeTruckHere: "LKW hier abstellen", next: "Weiter", back: "Zurück", finish: "Abschließen",
            steps: [
                { title: "Schritt 1", desc: "Fahren Sie zur Waage" },
                { title: "Schritt 2", desc: "Betreten Sie den Container" },
                { title: "Schritt 3", desc: "Dokumente übergeben" }
            ]
        },
        en: {
            helpBtn: "Request Help", helpSent: "Help is on the way!", placeTruckHere: "Place truck here", next: "Next", back: "Back", finish: "Finish",
            steps: [
                { title: "Step 1", desc: "Proceed to Weighing Bridge" },
                { title: "Step 2", desc: "Enter the container" },
                { title: "Step 3", desc: "Hand over documentation" }
            ]
        },
        ar: {
            helpBtn: "طلب مساعدة", helpSent: "المساعدة في الطريق!", placeTruckHere: "ضع الشاحنة هنا", next: "التالي", back: "السابق", finish: "إنهاء",
            steps: [
                { title: "خطوة 1", desc: "توجه إلى ميزان الشاحنات" },
                { title: "خطوة 2", desc: "ادخل إلى الحاوية" },
                { title: "خطوة 3", desc: "سلم الوثائق" }
            ]
        },
        bg: {
            helpBtn: "Поискайте помощ", helpSent: "Помощта е на път!", placeTruckHere: "Поставете камиона тук", next: "Напред", back: "Назад", finish: "Завършване",
            steps: [
                { title: "Стъпка 1", desc: "Отидете на кантара" },
                { title: "Стъпка 2", desc: "Влезте в контейнера" },
                { title: "Стъпка 3", desc: "Предайте документацията" }
            ]
        },
        cs: {
            helpBtn: "Vyžádat pomoc", helpSent: "Pomoc je na cestě!", placeTruckHere: "Umístěte kamion zde", next: "Další", back: "Zpět", finish: "Dokončit",
            steps: [
                { title: "Krok 1", desc: "Přejeďte na váhu" },
                { title: "Krok 2", desc: "Vstupte do kontejneru" },
                { title: "Krok 3", desc: "Odevzdejte dokumentaci" }
            ]
        },
        el: {
            helpBtn: "Ζητήστε βοήθεια", helpSent: "Η βοήθεια έρχεται!", placeTruckHere: "Τοποθετήστε το φορτηγό εδώ", next: "Επόμενο", back: "Πίσω", finish: "Ολοκλήρωση",
            steps: [
                { title: "Βήμα 1", desc: "Πηγαίνετε στη γεφυροπλάστιγγα" },
                { title: "Βήμα 2", desc: "Εισέλθετε στο κοντέινερ" },
                { title: "Βήμα 3", desc: "Παραδώστε τα έγγραφα" }
            ]
        },
        es: {
            helpBtn: "Solicitar ayuda", helpSent: "¡La ayuda está en camino!", placeTruckHere: "Coloque el camión aquí", next: "Siguiente", back: "Atrás", finish: "Finalizar",
            steps: [
                { title: "Paso 1", desc: "Diríjase a la báscula" },
                { title: "Paso 2", desc: "Entre al contenedor" },
                { title: "Paso 3", desc: "Entregue la documentación" }
            ]
        },
        fr: {
            helpBtn: "Demander de l'aide", helpSent: "L'aide est en route !", placeTruckHere: "Placez le camion ici", next: "Suivant", back: "Retour", finish: "Terminer",
            steps: [
                { title: "Étape 1", desc: "Allez au pont de pesage" },
                { title: "Étape 2", desc: "Entrez dans le conteneur" },
                { title: "Étape 3", desc: "Remettez la documentation" }
            ]
        },
        hu: {
            helpBtn: "Segítség kérése", helpSent: "A segítség úton van!", placeTruckHere: "Helyezze a kamiont ide", next: "Tovább", back: "Vissza", finish: "Befejezés",
            steps: [
                { title: "1. lépés", desc: "Hajtson a mérleghez" },
                { title: "2. lépés", desc: "Lépjen be a konténerbe" },
                { title: "3. lépés", desc: "Adja át a dokumentációt" }
            ]
        },
        it: {
            helpBtn: "Richiedi aiuto", helpSent: "L'aiuto è in arrivo!", placeTruckHere: "Posiziona il camion qui", next: "Avanti", back: "Indietro", finish: "Fine",
            steps: [
                { title: "Passo 1", desc: "Vai alla pesa" },
                { title: "Passo 2", desc: "Entra nel container" },
                { title: "Passo 3", desc: "Consegna la documentazione" }
            ]
        },
        nl: {
            helpBtn: "Hulp aanvragen", helpSent: "Hulp is onderweg!", placeTruckHere: "Plaats de vrachtwagen hier", next: "Volgende", back: "Terug", finish: "Voltooien",
            steps: [
                { title: "Stap 1", desc: "Rijd naar de weegbrug" },
                { title: "Stap 2", desc: "Ga de container in" },
                { title: "Stap 3", desc: "Lever de documentatie in" }
            ]
        },
        pl: {
            helpBtn: "Poproś o pomoc", helpSent: "Pomoc jest w drodze!", placeTruckHere: "Umieść ciężarówkę tutaj", next: "Dalej", back: "Wstecz", finish: "Zakończ",
            steps: [
                { title: "Krok 1", desc: "Udaj się na wagę" },
                { title: "Krok 2", desc: "Wejdź do kontenera" },
                { title: "Krok 3", desc: "Przekaż dokumentację" }
            ]
        },
        pt: {
            helpBtn: "Solicitar ajuda", helpSent: "A ajuda está a caminho!", placeTruckHere: "Coloque o caminhão aqui", next: "Próximo", back: "Voltar", finish: "Concluir",
            steps: [
                { title: "Passo 1", desc: "Vá para a balança" },
                { title: "Passo 2", desc: "Entre no contêiner" },
                { title: "Passo 3", desc: "Entregue a documentação" }
            ]
        },
        ro: {
            helpBtn: "Solicită ajutor", helpSent: "Ajutorul este pe drum!", placeTruckHere: "Plasați camionul aici", next: "Înainte", back: "Înapoi", finish: "Finalizare",
            steps: [
                { title: "Pasul 1", desc: "Mergeți la cântar" },
                { title: "Pasul 2", desc: "Intrați în container" },
                { title: "Pasul 3", desc: "Predați documentația" }
            ]
        },
        ru: {
            helpBtn: "Запросить помощь", helpSent: "Помощь в пути!", placeTruckHere: "Разместите грузовик здесь", next: "Далее", back: "Назад", finish: "Завершить",
            steps: [
                { title: "Шаг 1", desc: "Проследуйте к весам" },
                { title: "Шаг 2", desc: "Войдите в контейнер" },
                { title: "Шаг 3", desc: "Передайте документацию" }
            ]
        },
        sk: {
            helpBtn: "Vyžiadať pomoc", helpSent: "Pomoc je na ceste!", placeTruckHere: "Umiestnite nákladné auto sem", next: "Ďalej", back: "Späť", finish: "Dokončiť",
            steps: [
                { title: "Krok 1", desc: "Prejdite na váhu" },
                { title: "Krok 2", desc: "Vstúpte do kontajnera" },
                { title: "Krok 3", desc: "Odovzdajte dokumentáciu" }
            ]
        },
        tr: {
            helpBtn: "Yardım İste", helpSent: "Yardım yolda!", placeTruckHere: "Kamyonu buraya yerleştirin", next: "İleri", back: "Geri", finish: "Bitir",
            steps: [
                { title: "Adım 1", desc: "Kantara ilerleyin" },
                { title: "Adım 2", desc: "Konteynere girin" },
                { title: "Adım 3", desc: "Belgeleri teslim edin" }
            ]
        },
        uk: {
            helpBtn: "Запросити допомогу", helpSent: "Допомога в дорозі!", placeTruckHere: "Розмістіть вантажівку тут", next: "Далі", back: "Назад", finish: "Завершити",
            steps: [
                { title: "Крок 1", desc: "Прямуйте до вагів" },
                { title: "Крок 2", desc: "Зайдіть у контейнер" },
                { title: "Крок 3", desc: "Передайте документацію" }
            ]
        }
    },

    // Initialization
    init() {
        console.log("App initialized");
        // Automatically assign images to steps for all languages
        Object.keys(this.content).forEach(lang => {
            if (this.content[lang].steps) {
                if (this.content[lang].steps[0]) {
                    this.content[lang].steps[0].img1 = "img/weighing.png";
                    this.content[lang].steps[0].img2 = "img/weighing2.png";
                }
                if (this.content[lang].steps[1]) {
                    this.content[lang].steps[1].img = "img/weighing3.png";
                }
            }
        });
        this.render();
    },

    // View Management
    setLanguage(lang) {
        if (!lang) return;
        this.state.currentLanguage = lang;
        this.state.currentView = 'guidance';
        this.state.currentStepIndex = 0;
        
        // Reset the select dropdown to the placeholder
        const select = document.getElementById('lang-select');
        if (select) select.selectedIndex = 0;
        
        this.render();
    },

    nextStep() {
        const lang = this.state.currentLanguage;
        const totalSteps = this.content[lang].steps.length;
        
        if (this.state.currentStepIndex < totalSteps - 1) {
            this.state.currentStepIndex++;
            this.render();
        } else {
            // Reset to language selection if finished
            this.state.currentView = 'languages';
            this.state.currentStepIndex = 0;
            this.render();
        }
    },

    prevStep() {
        if (this.state.currentStepIndex > 0) {
            this.state.currentStepIndex--;
            this.render();
        } else {
            // Go back to language selection
            this.state.currentView = 'languages';
            this.render();
        }
    },

    requestHelp() {
        const lang = this.state.currentLanguage;
        const msg = this.content[lang]?.helpSent || "Help requested! A loader will be with you shortly.";
        alert(msg);
        
        // Visual feedback on button
        const helpBtn = document.getElementById('help-trigger');
        const originalText = helpBtn.innerText;
        helpBtn.innerText = "✓ " + (this.content[lang]?.helpSent || "Sent");
        helpBtn.style.backgroundColor = "#28a745";
        
        setTimeout(() => {
            helpBtn.innerText = originalText;
            helpBtn.style.backgroundColor = "";
        }, 3000);
    },

    // UI Rendering
    render() {
        const { currentView, currentLanguage, currentStepIndex } = this.state;
        const langContent = this.content[currentLanguage] || this.content['en'];

        // Toggle Views
        document.getElementById('view-languages').classList.toggle('hidden', currentView !== 'languages');
        document.getElementById('view-guidance').classList.toggle('hidden', currentView !== 'guidance');
        
        // Toggle Help Button visibility (only in guidance)
        document.getElementById('help-trigger').classList.toggle('hidden', currentView !== 'guidance');

        if (currentView === 'guidance') {
            const steps = langContent.steps || this.content['en'].steps;
            const step = steps[currentStepIndex];
            const totalSteps = steps.length;
            
            if (!step) return;

            // Update Text
            document.getElementById('current-step-title').innerText = step.title || "";
            document.getElementById('step-description').innerText = step.desc || "";
            
            const placeTruckEl = document.getElementById('place-truck-here');
            if (placeTruckEl) {
                placeTruckEl.innerText = langContent.placeTruckHere || "Place truck here";
            }

            // Toggle between different visual containers based on the current step
            const weighingContainer = document.getElementById('step-visual-container');
            const cabinContainer = document.getElementById('cabin-visual-container');
            const finalContainer = document.getElementById('final-visual-container');
            
            // Reset all
            weighingContainer.style.display = 'none';
            cabinContainer.style.display = 'none';
            finalContainer.style.display = 'none';

            if (currentStepIndex === 0) {
                weighingContainer.style.display = 'flex';
            } else if (currentStepIndex === 1) {
                cabinContainer.style.display = 'flex';
                cabinContainer.style.flexDirection = 'column';
                cabinContainer.style.gap = '10px';
            } else if (currentStepIndex === totalSteps - 1) {
                finalContainer.style.display = 'block';
            }
            
            // Update Buttons
            document.getElementById('btn-back').innerText = langContent.back || "Back";
            const nextBtn = document.getElementById('btn-next');
            nextBtn.innerText = (currentStepIndex === totalSteps - 1) 
                ? (langContent.finish || "Finish") 
                : (langContent.next || "Next");

            // Update Progress Bar
            const progress = ((currentStepIndex + 1) / totalSteps) * 100;
            document.getElementById('progress-bar').style.width = `${progress}%`;
            
            // Update Help Button Text
            document.getElementById('help-trigger').innerText = langContent.helpBtn || "Help";
        }
    }
};

// Start the app
document.addEventListener('DOMContentLoaded', () => app.init());
