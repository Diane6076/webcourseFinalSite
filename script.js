document.addEventListener("DOMContentLoaded", function () {
    // 1. Масив з цитатами
    const quotes = [
        { text: "Тисячі свічок можна запалити від однієї єдиної свічки, і життя її не стане коротшим. Щастя не стає менше, коли ним ділишся.", author: "Будда" },
        { text: "Весь секрет існування полягає в тому, щоб позбутися страхів. Не бійся того, що з тобою буде, твоє майбутнє не зміниться від цього, зате сьогодення стане спокійним.", author: "Будда" },
        { text: "Спокій знаходиться всередині вас. Не шукайте його зовні.", author: "Будда" },
        { text: "Ми — це наші думки. Все, що ми є, виникає з нашими думками. Своїми думками ми створюємо світ.", author: "Будда" },
        { text: "Розум — це все. Ви стаєте тим, про що думаєте.", author: "Будда" },
        { text: "Глечик наповнюється поступово, крапля за краплею.", author: "Будда" },
        { text: "Немає шляху до щастя. Щастя — це і є шлях.", author: "Тік Нат Хан" }
    ];

    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");
    const newQuoteBtn = document.getElementById("new-quote-btn");

    // Функція для генерації випадкової цитати
    function generateQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const selectedQuote = quotes[randomIndex];

        // Додаємо ефект плавного зникнення і появи
        quoteText.style.opacity = 0;
        setTimeout(() => {
            quoteText.innerText = `"${selectedQuote.text}"`;
            quoteAuthor.innerText = `— ${selectedQuote.author}`;
            quoteText.style.opacity = 1;
        }, 300);
    }

    // Запускаємо генерацію при завантаженні та по кліку
    if (newQuoteBtn) {
        newQuoteBtn.addEventListener("click", generateQuote);
        generateQuote(); // Показати першу цитату відразу
    }

    // 2. Логіка акордеона
    const accordions = document.querySelectorAll(".accordion-header");
    accordions.forEach(header => {
        header.addEventListener("click", function () {
            const item = this.parentNode;
            item.classList.toggle("active");
            document.querySelectorAll(".accordion-item").forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove("active");
            });
        });
    });

    // 3. Твоя кнопка привітання
    const helloBtn = document.getElementById("helloBtn");
    if (helloBtn) {
        helloBtn.addEventListener("click", function () {
            alert("HI, Di! You've just created another webSite! You Cool!");
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".content-section");

    function switchSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove("active");
            section.style.display = "none"; // Додатково ховаємо
        });

        const target = document.getElementById(sectionId);
        if (target) {
            target.classList.add("active");
            target.style.display = "block"; // Показуємо активну
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Повертаємо вгору при перемиканні
        }
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const sectionId = this.getAttribute("data-section");
            if (sectionId) {
                e.preventDefault();
                switchSection(sectionId);
            }
        });
    });
});


// Додай це в кінець свого DOMContentLoaded
const chatTrigger = document.getElementById('chat-trigger-btn');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatMessages = document.getElementById('chat-messages');

// Відкрити/Закрити чат
chatTrigger.addEventListener('click', () => chatWindow.classList.toggle('chat-hidden'));
closeChat.addEventListener('click', () => chatWindow.classList.add('chat-hidden'));

// Функція бота
function botResponse(text) {
    const msg = document.createElement('div');
    msg.className = 'bot-msg';

    // Проста імітація "ШІ"
    if (text.toLowerCase().includes("привіт")) msg.innerText = "Привіт, світла душе! Чим можу допомогти?";
    else if (text.toLowerCase().includes("спокій")) msg.innerText = "Спокій приходить через дихання. Спробуй зробити глибокий вдих.";
    else if (text.toLowerCase().includes("хто ти")) msg.innerText = "Я — Lotus AI, твій цифровий провідник у світ буддійської мудрості.";
    else msg.innerText = "Цікава думка. Пам'ятай: 'Розум — це все. Ви стаєте тим, про що думаєте'.";

    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendBtn.addEventListener('click', () => {
    if (userInput.value.trim() !== "") {
        const userDiv = document.createElement('div');
        userDiv.className = 'user-msg';
        userDiv.innerText = userInput.value;
        chatMessages.appendChild(userDiv);

        const tempText = userInput.value;
        userInput.value = "";

        setTimeout(() => botResponse(tempText), 1000); // Відповідь через секунду
    }
});