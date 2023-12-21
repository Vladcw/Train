/*//===================================================== розклад*/

function randomlyFillTable() {
    const possibleValues = ["Прес", "Пілон", "Спорт-зал", "Табата", "Фітнес", "Кросфіт", "Функціональне тренування"];
    const daysOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];

    // Очищення значень всіх input-елементів перед заповненням
    const inputElements = document.querySelectorAll(`#initialTable input[type="text"]`);
    inputElements.forEach((inputElement) => {
        inputElement.value = "";
    });

    for (const day of daysOfWeek) {
        const inputElements = document.querySelectorAll(`#initialTable input[type="text"][id^="${day}-"]`);
        const availableIndices = [...Array(inputElements.length).keys()];

        // Перемішує масив індексів
        for (let i = availableIndices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [availableIndices[i], availableIndices[j]] = [availableIndices[j], availableIndices[i]];
        }

        // Заповнення перших 5 input-елементів для даного дня
        for (let i = 0; i < Math.min(5, availableIndices.length); i++) {
            const randomIndex = availableIndices[i];
            const randomValueIndex = Math.floor(Math.random() * possibleValues.length);
            inputElements[randomIndex].value = possibleValues[randomValueIndex];
        }
    }
}

// Виконуватиме код після завантаження сторінки
document.addEventListener("DOMContentLoaded", function () {
    // Обробник подій до кнопки "Генерувати таблицю"
    const generateButton = document.getElementById("generateButton");
    if (generateButton) {
        generateButton.addEventListener("click", function () {
            toggleTables();
        });
    }

    // Функція для переключення таблиць
    function toggleTables() {
        const initialTable = document.getElementById("initialTable");
        const filledTable = document.getElementById("filledTable");

        if (initialTable.classList.contains("visible")) {
            initialTable.classList.remove("visible");
            initialTable.classList.add("hidden");
            filledTable.classList.remove("hidden");
            filledTable.classList.add("visible");
            generateTable(); // Генерувати таблицю, якщо вона зараз видима
        } else {
            initialTable.classList.remove("hidden");
            initialTable.classList.add("visible");
            filledTable.classList.remove("visible");
            filledTable.classList.add("hidden");
        }
    }

    // Функція для генерації таблиці
    function generateTable() {
        const daysOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
        const hoursOfDay = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
        let tableHtml = "<table><thead><tr><th></th>";

        // Дні тижня до заголовку таблиці
        for (const day of daysOfWeek) {
            tableHtml += `<th>${day}</th>`;
        }

        tableHtml += "</tr></thead><tbody>";

        // Дані з input до таблиці
        for (const hour of hoursOfDay) {
            tableHtml += "<tr>";
            tableHtml += `<td>${hour}</td>`;
            for (const day of daysOfWeek) {
                const inputId = `${day}-${hour}`;
                const inputElement = document.getElementById(inputId);
                if (inputElement) {
                    const training = inputElement.value;
                    tableHtml += `<td>${training}</td>`;
                } else {
                    tableHtml += "<td></td>";
                }
            }
            tableHtml += "</tr>";
        }

        tableHtml += "</tbody></table>";

        // Вставляє згенеровану таблицю в блок з id "filledTable"
        const filledTableElement = document.getElementById("filledTable");
        if (filledTableElement) {
            filledTableElement.innerHTML = tableHtml;
        }
    }
});

