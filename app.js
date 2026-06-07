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
            selectLanguageComputer: "Wählen Sie Ihre Sprache am Computer und folgen Sie den Anweisungen",
            steps: [
                { title: "Schritt 1", desc: "Fahren Sie zur Waage und stellen Sie den LKW ab" },
                { title: "Schritt 2", desc: "Fahren Sie zur Laderampe und folgen Sie den Anweisungen am Computer" },
                { title: "Schritt 3", desc: "Dokumente übergeben" },
                { title: "Schritt 4", desc: "Zum Parkplatz fahren" },
                { title: "Schritt 5", desc: "Dokumente vorlegen" },
                { title: "Schritt 6", desc: "Zum LKW gehen" }
            ]
        },
        en: {
            helpBtn: "Request Help", helpSent: "Help is on the way!", placeTruckHere: "Place truck here", next: "Next", back: "Back", finish: "Finish",
            selectLanguageComputer: "Select your language on computer and follow instructions",
            steps: [
                { title: "Step 1", desc: "Proceed to Weighing Bridge and place truck" },
                { title: "Step 2", desc: "Enter Cabin" },
                { title: "Step 3", desc: "Hand over documentation" },
                { title: "Step 4", desc: "Go to Parking lot" },
                { title: "Step 5", desc: "Present documentation" },
                { title: "Step 6", desc: "Walk to truck" }
            ]
        },
        ar: {
            helpBtn: "طلب مساعدة", helpSent: "المساعدة في الطريق!", placeTruckHere: "ضع الشاحنة هنا", next: "التالي", back: "السابق", finish: "إنهاء",
            selectLanguageComputer: "اختر لغتك على الكمبيوتر واتبع التعليمات",
            steps: [
                { title: "خطوة 1", desc: "توجه إلى ميزان الشاحنات وضع الشاحنة" },
                { title: "خطوة 2", desc: "انتقل إلى منصة التحميل واتبع تعليمات الكمبيوتر" },
                { title: "خطوة 3", desc: "سلم الوثائق" },
                { title: "خطوة 4", desc: "اذهب إلى موقف السيارات" },
                { title: "خطوة 5", desc: "تقديم الوثائق" },
                { title: "خطوة 6", desc: "امش إلى الشاحنة" }
            ]
        },
        bg: {
            helpBtn: "Поискайте помощ", helpSent: "Помощта е на път!", placeTruckHere: "Поставете камиона тук", next: "Напред", back: "Назад", finish: "Завършване",
            selectLanguageComputer: "Изберете вашия език на компютъра и следвайте инструкциите",
            steps: [
                { title: "Стъпка 1", desc: "Отидете на кантара и поставете камиона" },
                { title: "Стъпка 2", desc: "Отидете на рампата и следвайте инструкциите на компютъра" },
                { title: "Стъпка 3", desc: "Предайте документацията" },
                { title: "Стъпка 4", desc: "Отидете на паркинга" },
                { title: "Стъпка 5", desc: "Представете документация" },
                { title: "Стъпка 6", desc: "Отидете до камиона" }
            ]
        },
        cs: {
            helpBtn: "Vyžádat pomoc", helpSent: "Pomoc je na cestě!", placeTruckHere: "Umístěte kamion zde", next: "Další", back: "Zpět", finish: "Dokončit",
            selectLanguageComputer: "Vyberte svůj jazyk na počítači a postupujte podle pokynů",
            steps: [
                { title: "Krok 1", desc: "Přejeďte na váhu a zastavte kamion" },
                { title: "Krok 2", desc: "Přejeďte na rampu a postupujte podle pokynů na počítači" },
                { title: "Krok 3", desc: "Odevzdejte dokumentaci" },
                { title: "Krok 4", desc: "Přejděte na parkoviště" },
                { title: "Krok 5", desc: "Předložte dokumentaci" },
                { title: "Krok 6", desc: "Jděte ke kamionu" }
            ]
        },
        el: {
            helpBtn: "Ζητήστε βοήθεια", helpSent: "Η βοήθεια έρχεται!", placeTruckHere: "Τοποθετήστε το φορτηγό εδώ", next: "Επόμενο", back: "Πίσω", finish: "Ολοκλήρωση",
            selectLanguageComputer: "Επιλέξτε τη γλώσσα σας στον υπολογιστή και ακολουθήστε τις οδηγίες",
            steps: [
                { title: "Βήμα 1", desc: "Πηγαίνετε στη γεφυροπλάστιγγα και σταθμεύστε" },
                { title: "Βήμα 2", desc: "Μεταβείτε στη φόρτωση και ακολουθήστε τις οδηγίες στον υπολογιστή" },
                { title: "Βήμα 3", desc: "Παραδώστε τα έγγραφα" },
                { title: "Βήμα 4", desc: "Πηγαίνετε στο χώρο στάθμευσης" },
                { title: "Βήμα 5", desc: "Προσκομίστε τα έγγραφα" },
                { title: "Βήμα 6", desc: "Περπατήστε στο φορτηγό" }
            ]
        },
        es: {
            helpBtn: "Solicitar ayuda", helpSent: "¡La ayuda está en camino!", placeTruckHere: "Coloque el camión aquí", next: "Siguiente", back: "Atrás", finish: "Finalizar",
            selectLanguageComputer: "Seleccione su idioma en la computadora y siga las instrucciones",
            steps: [
                { title: "Paso 1", desc: "Diríjase a la báscula y estacione" },
                { title: "Paso 2", desc: "Vaya al muelle y siga las instrucciones en la computadora" },
                { title: "Paso 3", desc: "Entregue la documentación" },
                { title: "Paso 4", desc: "Vaya al estacionamiento" },
                { title: "Paso 5", desc: "Presentar documentación" },
                { title: "Paso 6", desc: "Camine hacia el camión" }
            ]
        },
        fr: {
            helpBtn: "Demander de l'aide", helpSent: "L'aide est en route !", placeTruckHere: "Placez le camion ici", next: "Suivant", back: "Retour", finish: "Terminer",
            selectLanguageComputer: "Sélectionnez votre langue sur l'ordinateur et suivez les instructions",
            steps: [
                { title: "Étape 1", desc: "Allez au pont de pesage et stationnez" },
                { title: "Étape 2", desc: "Allez au chargement et suivez les instructions sur l'ordinateur" },
                { title: "Étape 3", desc: "Remettez la documentation" },
                { title: "Étape 4", desc: "Allez au parking" },
                { title: "Étape 5", desc: "Présenter les documents" },
                { title: "Étape 6", desc: "Marchez jusqu'au camion" }
            ]
        },
        hu: {
            helpBtn: "Segítség kérése", helpSent: "A segítség úton van!", placeTruckHere: "Helyezze a kamiont ide", next: "Tovább", back: "Vissza", finish: "Befejezés",
            selectLanguageComputer: "Válassza ki a nyelvet a számítógépen, és kövesse az utasításokat",
            steps: [
                { title: "1. lépés", desc: "Hajtson a mérleghez und álljon meg" },
                { title: "2. lépés", desc: "Hajtson a rakodóhoz és kövesse a számítógépes utasításokat" },
                { title: "3. lépés", desc: "Adja át a dokumentációt" },
                { title: "4. lépés", desc: "Menjen a parkolóba" },
                { title: "5. lépés", desc: "Mutassa be a dokumentumokat" },
                { title: "6. lépés", desc: "Sétáljon a kamionhoz" }
            ]
        },
        it: {
            helpBtn: "Richiedi aiuto", helpSent: "L'aiuto è in arrivo!", placeTruckHere: "Posiziona il camion qui", next: "Avanti", back: "Indietro", finish: "Fine",
            selectLanguageComputer: "Seleziona la tua lingua sul computer e segui le istruzioni",
            steps: [
                { title: "Passo 1", desc: "Vai alla pesa e posiziona il camion" },
                { title: "Passo 2", desc: "Vai al carico e segui le istruzioni al computer" },
                { title: "Passo 3", desc: "Consegna la documentazione" },
                { title: "Passo 4", desc: "Vai al parcheggio" },
                { title: "Passo 5", desc: "Presentare la documentazione" },
                { title: "Passo 6", desc: "Cammina verso il camion" }
            ]
        },
        nl: {
            helpBtn: "Hulp aanvragen", helpSent: "Hulp is onderweg!", placeTruckHere: "Plaats de vrachtwagen hier", next: "Volgende", back: "Terug", finish: "Voltooien",
            selectLanguageComputer: "Selecteer uw taal op de computer en volg de instructies",
            steps: [
                { title: "Stap 1", desc: "Rijd naar de weegbrug en parkeer" },
                { title: "Stap 2", desc: "Ga naar het laden en volg de computerinstructies" },
                { title: "Stap 3", desc: "Lever de documentatie in" },
                { title: "Stap 4", desc: "Ga naar de parkeerplaats" },
                { title: "Stap 5", desc: "Documentatie overhandigen" },
                { title: "Stap 6", desc: "Loop naar de vrachtwagen" }
            ]
        },
        pl: {
            helpBtn: "Poproś o pomoc", helpSent: "Pomoc jest w drodze!", placeTruckHere: "Umieść ciężarówkę tutaj", next: "Dalej", back: "Wstecz", finish: "Zakończ",
            selectLanguageComputer: "Wybierz swój język na komputerze i postępuj zgodnie z instrukcjami",
            steps: [
                { title: "Krok 1", desc: "Udaj się na wagę i zaparkuj" },
                { title: "Krok 2", desc: "Przejdź do załadunku i postępuj zgodnie z instrukcjami na komputerze" },
                { title: "Krok 3", desc: "Przekaż dokumentację" },
                { title: "Krok 4", desc: "Udaj się na parking" },
                { title: "Krok 5", desc: "Przedstaw dokumentację" },
                { title: "Krok 6", desc: "Podejdź do ciężarówki" }
            ]
        },
        pt: {
            helpBtn: "Solicitar ajuda", helpSent: "A ajuda está a caminho!", placeTruckHere: "Coloque o caminhão aqui", next: "Próximo", back: "Voltar", finish: "Concluir",
            selectLanguageComputer: "Selecione o seu idioma no computador e siga as instruções",
            steps: [
                { title: "Passo 1", desc: "Vá para a balança e estacione" },
                { title: "Passo 2", desc: "Vá para a carga e siga as instruções no computador" },
                { title: "Passo 3", desc: "Entregue a documentação" },
                { title: "Passo 4", desc: "Vá para o estacionamento" },
                { title: "Passo 5", desc: "Apresentar documentação" },
                { title: "Passo 6", desc: "Caminhe até o caminhão" }
            ]
        },
        ro: {
            helpBtn: "Solicită ajutor", helpSent: "Ajutorul este pe drum!", placeTruckHere: "Plasați camionul aici", next: "Înainte", back: "Înapoi", finish: "Finalizare",
            selectLanguageComputer: "Selectați limba pe computer și urmați instrucțiunile",
            steps: [
                { title: "Pasul 1", desc: "Mergeți la cântar și parcați" },
                { title: "Pasul 2", desc: "Mergeți la încărcare și urmați instrucțiunile de pe computer" },
                { title: "Pasul 3", desc: "Predați documentația" },
                { title: "Pasul 4", desc: "Mergeți la parcare" },
                { title: "Pasul 5", desc: "Prezentați documentația" },
                { title: "Pasul 6", desc: "Mergeți la camion" }
            ]
        },
        ru: {
            helpBtn: "Запросить помощь", helpSent: "Помощь в пути!", placeTruckHere: "Разместите грузовик здесь", next: "Далее", back: "Назад", finish: "Завершить",
            selectLanguageComputer: "Выберите свой язык на компьютере и следуйте инструкциям",
            steps: [
                { title: "Шаг 1", desc: "Проследуйте к весам и припаркуйтесь" },
                { title: "Шаг 2", desc: "Перейдите к погрузке и следуйте инструкциям на компьютере" },
                { title: "Шаг 3", desc: "Передайте документацию" },
                { title: "Шаг 4", desc: "Отправляйтесь на парковку" },
                { title: "Шаг 5", desc: "Предъявите документы" },
                { title: "Шаг 6", desc: "Идите к грузовику" }
            ]
        },
        sk: {
            helpBtn: "Vyžiadať pomoc", helpSent: "Pomoc je na ceste!", placeTruckHere: "Umiestnite nákladné auto sem", next: "Ďalej", back: "Späť", finish: "Dokončiť",
            selectLanguageComputer: "Vyberte svoj jazyk na počítači a postupujte podľa pokynov",
            steps: [
                { title: "Krok 1", desc: "Prejdite na váhu a zaparkujte" },
                { title: "Krok 2", desc: "Prejdite k nakládke a postupujte podľa pokynov na počítači" },
                { title: "Krok 3", desc: "Odovzdajte dokumentáciu" },
                { title: "Krok 4", desc: "Prejdite na parkovisko" },
                { title: "Krok 5", desc: "Predložte dokumentáciu" },
                { title: "Krok 6", desc: "Choďte k nákladnému autu" }
            ]
        },
        tr: {
            helpBtn: "Yardım İste", helpSent: "Yardım yolda!", placeTruckHere: "Kamyonu buraya yerleştirin", next: "İleri", back: "Geri", finish: "Bitir",
            selectLanguageComputer: "Bilgisayarda dilinizi seçin ve talimatları izleyin",
            steps: [
                { title: "Adım 1", desc: "Kantara gidin e park edin" },
                { title: "Adım 2", desc: "Yüklemeye geçin ve bilgisayardaki talimatları izleyin" },
                { title: "Adım 3", desc: "Belgeleri teslim edin" },
                { title: "Adım 4", desc: "Otoparka gidin" },
                { title: "Adım 5", desc: "Belgeleri sunun" },
                { title: "Adım 6", desc: "Kamyona yürüyün" }
            ]
        },
        uk: {
            helpBtn: "Запросити допомогу", helpSent: "Допомога в дорозі!", placeTruckHere: "Розмістіть вантажівку тут", next: "Далі", back: "Назад", finish: "Завершити",
            selectLanguageComputer: "Виберіть свою мову на комп'ютері та дотримуйтесь інструкцій",
            steps: [
                { title: "Крок 1", desc: "Прямуйте до вагів та припаркуйтеся" },
                { title: "Крок 2", desc: "Перейдіть до завантаження та дотримуйтесь інструкцій на комп'ютері" },
                { title: "Крок 3", desc: "Передайте документацію" },
                { title: "Крок 4", desc: "Прямуйте на парковку" },
                { title: "Крок 5", desc: "Надайте документи" },
                { title: "Крок 6", desc: "Йдіть до вантажівки" }
            ]
        }
    },

    // Initialization
    init() {
        console.log("App initialized");
        this.render();
    },

    // View Management
    setLanguage(lang) {
        if (!lang) return;
        this.state.currentLanguage = lang;
        this.state.currentView = 'guidance';
        this.state.currentStepIndex = 0;
        
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
            this.state.currentView = 'languages';
            this.render();
        }
    },

    requestHelp() {
        const lang = this.state.currentLanguage;
        const msg = this.content[lang]?.helpSent || "Help requested!";
        alert(msg);
        
        const helpBtn = document.getElementById('help-trigger');
        if (helpBtn) {
            const originalText = helpBtn.innerText;
            helpBtn.innerText = "✓ " + (this.content[lang]?.helpSent || "Sent");
            helpBtn.style.backgroundColor = "#28a745";
            
            setTimeout(() => {
                helpBtn.innerText = originalText;
                helpBtn.style.backgroundColor = "";
            }, 3000);
        }
    },

    // UI Rendering
    render() {
        const { currentView, currentLanguage, currentStepIndex } = this.state;
        const langContent = this.content[currentLanguage] || this.content['en'];

        const viewLanguages = document.getElementById('view-languages');
        const viewGuidance = document.getElementById('view-guidance');
        const helpBtn = document.getElementById('help-trigger');

        if (viewLanguages) viewLanguages.classList.toggle('hidden', currentView !== 'languages');
        if (viewGuidance) viewGuidance.classList.toggle('hidden', currentView !== 'guidance');
        if (helpBtn) helpBtn.classList.toggle('hidden', currentView !== 'guidance');

        if (currentView === 'guidance') {
            const steps = langContent.steps || [];
            const step = steps[currentStepIndex];
            const totalSteps = steps.length;
            
            if (!step) return;

            const titleEl = document.getElementById('current-step-title');
            const descEl = document.getElementById('step-description');
            if (titleEl) titleEl.innerText = step.title || "";
            if (descEl) descEl.innerText = step.desc || "";

            const weighingContainer = document.getElementById('step-visual-container');
            const cabinContainer = document.getElementById('cabin-visual-container');
            const documentsContainer = document.getElementById('documents-visual-container');
            const finalContainer = document.getElementById('final-visual-container');
            const step5Container = document.getElementById('step5-visual-container');
            const step6Container = document.getElementById('step6-visual-container');
            
            if (weighingContainer) weighingContainer.style.display = 'none';
            if (cabinContainer) cabinContainer.style.display = 'none';
            if (documentsContainer) documentsContainer.style.display = 'none';
            if (finalContainer) finalContainer.style.display = 'none';
            if (step5Container) step5Container.style.display = 'none';
            if (step6Container) step6Container.style.display = 'none';

            if (currentStepIndex === 0) {
                if (weighingContainer) {
                    weighingContainer.style.display = 'flex';
                    weighingContainer.style.flexDirection = 'column';
                    weighingContainer.style.gap = '15px';
                    
                    const img1 = document.getElementById('step-image-1');
                    const img2 = document.getElementById('step-image-2');
                    const label = document.getElementById('place-truck-here');
                    
                    if (img1) img1.style.display = 'block';
                    if (label) {
                        label.style.display = 'block';
                        label.innerText = langContent.placeTruckHere || "";
                    }
                    if (img2) img2.style.display = 'block';
                }
            } else if (currentStepIndex === 1) {
                if (cabinContainer) {
                    cabinContainer.style.display = 'flex';
                    cabinContainer.style.flexDirection = 'column';
                    cabinContainer.style.gap = '15px';
                    
                    const computerLabel = document.getElementById('select-lang-computer');
                    if (computerLabel) {
                        computerLabel.innerText = langContent.selectLanguageComputer || "";
                    }
                }
            } else if (currentStepIndex === 2) {
                if (documentsContainer) {
                    documentsContainer.style.display = 'flex';
                }
            } else if (currentStepIndex === 3) {
                if (finalContainer) {
                    finalContainer.style.display = 'flex';
                }
            } else if (currentStepIndex === 4) {
                if (step5Container) {
                    step5Container.style.display = 'flex';
                }
            } else if (currentStepIndex === 5) {
                if (step6Container) {
                    step6Container.style.display = 'flex';
                }
            }
            
            const backBtn = document.getElementById('btn-back');
            const nextBtn = document.getElementById('btn-next');
            if (backBtn) backBtn.innerText = langContent.back || "Back";
            if (nextBtn) {
                nextBtn.innerText = (currentStepIndex === totalSteps - 1) 
                    ? (langContent.finish || "Finish") 
                    : (langContent.next || "Next");
            }

            const progressBar = document.getElementById('progress-bar');
            if (progressBar) {
                const progress = ((currentStepIndex + 1) / totalSteps) * 100;
                progressBar.style.width = `${progress}%`;
            }
            
            if (helpBtn) helpBtn.innerText = langContent.helpBtn || "Help";
        }
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
