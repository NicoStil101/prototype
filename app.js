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
            helpBtn: "Hilfe anfordern", helpSent: "Hilfe wurde gerufen!", next: "Weiter", back: "Zurück", finish: "Abschließen",
            steps: [
                { title: "Schritt 1", desc: "Fahren Sie zur Waage:", img1: "img/weighing.png", img2: "img/weighing2.png" },
                { title: "Schritt 2", desc: "Fahren Sie zur Entladestelle:" },
                { title: "Schritt 3", desc: "Frachtpapiere übergeben." },
                { title: "Schritt 4", desc: "Now take your clothes of" }
            ]
        },
        en: {
            helpBtn: "Request Help", helpSent: "Help is on the way!", next: "Next", back: "Back", finish: "Finish",
            steps: [
                { title: "Step 1", desc: "Proceed to Weighing Bridge:", img1: "img/weighing.png", img2: "img/weighing2.png" },
                { title: "Step 2", desc: "Move to Loading Pad:" },
                { title: "Step 3", desc: "Hand over the documentation:" },
                { title: "Step 4", desc: "Process complete:" }
            ]
        },
        ar: {
            helpBtn: "طلب مساعدة", helpSent: "المساعدة في الطريق!", next: "التالي", back: "السابق", finish: "إنهاء",
            steps: [
                { title: "خطوة 1", desc: "توجه إلى ميزان الشاحنات 1." },
                { title: "خطوة 2", desc: "انتقل إلى رصيف التحميل 3." },
                { title: "خطوة 3", desc: "سلم الوثائق للمسؤول." },
                { title: "خطوة 4", desc: "اكتملت العملية." }
            ]
        },
        bg: {
            helpBtn: "Помощ", next: "Напред", back: "Назад",
            steps: [
                { title: "Стъпка 1", desc: "Отидете на кантар 1." },
                { title: "Стъпка 2", desc: "Отидете на рампа 3." },
                { title: "Стъпка 3", desc: "Предайте документите." },
                { title: "Стъпка 4", desc: "Готово." }
            ]
        },
        cs: {
            helpBtn: "Pomoc", next: "Vpřed", back: "Zpět",
            steps: [
                { title: "Krok 1", desc: "Jedno na váhu 1." },
                { title: "Krok 2", desc: "Přejeďte na nakládací rampu 3." },
                { title: "Krok 3", desc: "Odevzdejte dokumenty." },
                { title: "Krok 4", desc: "Hotovo." }
            ]
        },
        el: {
            helpBtn: "Βοήθεια", next: "Επόμενο", back: "Πίσω",
            steps: [
                { title: "Βήμα 1", desc: "Πηγαίνετε στη γεφυροπλάστιγγα 1." },
                { title: "Βήμα 2", desc: "Μεταβείτε στη θέση φόρτωσης 3." },
                { title: "Βήμα 3", desc: "Παραδώστε τα έγγραφα." },
                { title: "Βήμα 4", desc: "Ολοκληρώθηκε." }
            ]
        },
        es: {
            helpBtn: "Solicitar ayuda", next: "Siguiente", back: "Atrás",
            steps: [
                { title: "Paso 1", desc: "Diríjase a la báscula 1." },
                { title: "Paso 2", desc: "Vaya al muelle de carga 3." },
                { title: "Paso 3", desc: "Entregue los documentos." },
                { title: "Paso 4", desc: "Completado." }
            ]
        },
        fr: {
            helpBtn: "Aide", next: "Suivant", back: "Retour",
            steps: [
                { title: "Étape 1", desc: "Allez au pont de pesage 1." },
                { title: "Étape 2", desc: "Allez à l'aire de chargement 3." },
                { title: "Étape 3", desc: "Remettez les documents." },
                { title: "Étape 4", desc: "Terminé." }
            ]
        },
        hu: {
            helpBtn: "Segítség", next: "Tovább", back: "Vissza",
            steps: [
                { title: "1. lépés", desc: "Hajtson az 1-es mérleghez." },
                { title: "2. lépés", desc: "Hajtson a 3-as rakodóhoz." },
                { title: "3. lépés", desc: "Adja át az okmányokat." },
                { title: "4. lépés", desc: "Kész." }
            ]
        },
        it: {
            helpBtn: "Aiuto", next: "Avanti", back: "Indietro",
            steps: [
                { title: "Passo 1", desc: "Vai alla pesa 1." },
                { title: "Passo 2", desc: "Vai al punto di carico 3." },
                { title: "Passo 3", desc: "Consegna i documenti." },
                { title: "Passo 4", desc: "Finito." }
            ]
        },
        nl: {
            helpBtn: "Hulp", next: "Volgende", back: "Terug",
            steps: [
                { title: "Stap 1", desc: "Rijd naar weegbrug 1." },
                { title: "Stap 2", desc: "Rijd naar laadplaats 3." },
                { title: "Stap 3", desc: "Lever de documenten in." },
                { title: "Stap 4", desc: "Klaar." }
            ]
        },
        pl: {
            helpBtn: "Pomoc", next: "Dalej", back: "Wstecz",
            steps: [
                { title: "Krok 1", desc: "Udać się do wagi 1." },
                { title: "Krok 2", desc: "Przejdź do pola załadunkowego 3." },
                { title: "Krok 3", desc: "Przekaż dokumentację." },
                { title: "Krok 4", desc: "Zakończono." }
            ]
        },
        pt: {
            helpBtn: "Ajuda", next: "Próximo", back: "Voltar",
            steps: [
                { title: "Passo 1", desc: "Vá para a balança 1." },
                { title: "Passo 2", desc: "Vá para o cais de carga 3." },
                { title: "Passo 3", desc: "Entregue os documentos." },
                { title: "Passo 4", desc: "Concluído." }
            ]
        },
        ro: {
            helpBtn: "Ajutor", next: "Înainte", back: "Înapoi",
            steps: [
                { title: "Pasul 1", desc: "Mergeți la cântarul 1." },
                { title: "Pasul 2", desc: "Mergeți la rampa de încărcare 3." },
                { title: "Pasul 3", desc: "Predați documentele." },
                { title: "Pasul 4", desc: "Finalizat." }
            ]
        },
        ru: {
            helpBtn: "Помощь", next: "Далее", back: "Назад",
            steps: [
                { title: "Шаг 1", desc: "Проследуйте к весам 1." },
                { title: "Шаг 2", desc: "Перейдите к погрузке 3." },
                { title: "Шаг 3", desc: "Передайте документы." },
                { title: "Шаг 4", desc: "Готово." }
            ]
        },
        sk: {
            helpBtn: "Pomoc", next: "Ďalej", back: "Späť",
            steps: [
                { title: "Krok 1", desc: "Choďte na váhu 1." },
                { title: "Krok 2", desc: "Choďte na nakladaciu rampu 3." },
                { title: "Krok 3", desc: "Odovzdajte dokumenty." },
                { title: "Krok 4", desc: "Hotovo." }
            ]
        },
        tr: {
            helpBtn: "Yardım", next: "İleri", back: "Geri",
            steps: [
                { title: "Adım 1", desc: "Kantar 1'e gidin." },
                { title: "Adım 2", desc: "Yükleme alanı 3'e geçin." },
                { title: "Adım 3", desc: "Belgeleri teslim edin." },
                { title: "Adım 4", desc: "Tamamlandı." }
            ]
        },
        uk: {
            helpBtn: "Допомога", next: "Далі", back: "Назад",
            steps: [
                { title: "Крок 1", desc: "Проїдьте до вагів 1." },
                { title: "Крок 2", desc: "Перейдіть до завантаження 3." },
                { title: "Крок 3", desc: "Передайте документи." },
                { title: "Крок 4", desc: "Завершено." }
            ]
        }
    },

    // Initialization
    init() {
        console.log("App initialized");
        // Automatically assign the weighing images to Step 1 for all languages
        Object.keys(this.content).forEach(lang => {
            if (this.content[lang].steps && this.content[lang].steps[0]) {
                this.content[lang].steps[0].img1 = "img/weighing.png";
                this.content[lang].steps[0].img2 = "img/weighing2.png";
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
