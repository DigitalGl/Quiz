const quizQuestions = [
    {
        question: "Что такое DOM в контексте веб-разработки?",
        options: [
            "Документ объектной модели",
            "Динамический оператор метода",
            "Дополнительный оптимизированный модуль",
            "Детальный обработчик метаданных",
        ],
        correctAnswer: 0,
        explanation: "DOM (Document Object Model) - это программный интерфейс, который представляет HTML-документ в виде древовидной структуры объектов"
    },
    {
        question: "Что такое CSS в веб-разработке?",
        options: [
            "Язык программирования",
            "Каскадные таблицы стилей",
            "Система управления контентом",
            "Клиентский серверный скрипт",
        ],
        correctAnswer: 1,
        explanation: "CSS (Cascading Style Sheets) - это язык, используемый для описания стилей и внешнего вида веб-страниц"
    },
    {
        question: "Какой метод JavaScript используется для добавления элемента в конец массива?",
        options: [
            "pop()",
            "shift()",
            "push()",
            "unshift()",
        ],
        correctAnswer: 2,
        explanation: "Метод push() добавляет один или несколько элементов в конец массива и возвращает новую длину массива"
    },
    {
        question: "Что такое API в контексте веб-разработки?",
        options: [
            "Аппаратное обеспечение сервера",
            "Программный интерфейс приложения",
            "Автоматизированная панель инструментов",
            "Адаптивный протокол интернета",
        ],
        correctAnswer: 1,
        explanation: "API (Application Programming Interface) - это программный интерфейс, позволяющий разным приложениям взаимодействовать друг с другом"
    },
    {
        question: "Какой тег HTML используется для создания гиперссылки?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>",
        ],
        correctAnswer: 1,
        explanation: "Тег <a> используется для создания гиперссылок в HTML, а атрибут href задает адрес ссылки"
    },
    {
        question: "Что такое асинхронный код в JavaScript?",
        options: [
            "Код, выполняющийся в строгом порядке",
            "Код, который выполняется независимо от основного потока",
            "Код, работающий только с синхронными функциями",
            "Код, который не использует функции",
        ],
        correctAnswer: 1,
        explanation: "Асинхронный код позволяет выполнять операции, такие как запросы к серверу, не блокируя основной поток выполнения"
    },
    {
        question: "Какой HTTP-метод используется для получения данных с сервера?",
        options: [
            "POST",
            "PUT",
            "DELETE",
            "GET",
        ],
        correctAnswer: 3,
        explanation: "Метод GET используется для получения данных с сервера без их изменения"
    },
    {
        question: "Что такое JSON?",
        options: [
            "Язык программирования",
            "Формат обмена данными",
            "Библиотека JavaScript",
            "Протокол сетевого взаимодействия",
        ],
        correctAnswer: 1,
        explanation: "JSON (JavaScript Object Notation) - это легковесный формат для хранения и передачи данных, часто используемый в API"
    },
    {
        question: "Какой CSS-свойство управляет прозрачностью элемента?",
        options: [
            "visibility",
            "display",
            "opacity",
            "color",
        ],
        correctAnswer: 2,
        explanation: "Свойство opacity задает уровень прозрачности элемента, где 0 - полностью прозрачный, а 1 - полностью непрозрачный"
    },
    {
        question: "Что такое localStorage в JavaScript?",
        options: [
            "База данных на сервере",
            "Хранилище данных в браузере",
            "Временная память для функций",
            "Кэш для стилей CSS",
        ],
        correctAnswer: 1,
        explanation: "localStorage позволяет сохранять данные в браузере пользователя для последующего использования без обращения к серверу"
    },
];


const url = "https://js-quiz-questions-server.vercel.app/api/questions";
const quesries = {
    theme: "js | html | css" ,
    limit: 10,
    page: 1,
}

const restrictedUrls = "https://js-quiz-questions-server.vercel.app/api/restricted"
const alternativeAPI = "https://country-search-seven-gilt.vercel.app"




