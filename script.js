const calendarContainer = document.getElementById('calendar-container');
const currentMonthSpan = document.getElementById('current-month');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

let currentDate = new Date();

function fileExists(url) {
    return fetch(url, { method: 'HEAD' })
        .then(res => res.ok)
        .catch(() => false);
}

async function renderCalendar(date) {
    calendarContainer.innerHTML = '';
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();

    currentMonthSpan.textContent = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

    const table = document.createElement('table');
    table.className = "calendar";

    const headerRow = document.createElement('tr');
    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach(day => {
        const th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    let row = document.createElement('tr');
    for (let i = 0; i < firstDayOfWeek; i++) {
        row.appendChild(document.createElement('td'));
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement('td');
        const formattedDate = `${year}${String(month + 1).padStart(2, '0')}${String(day).padStart(2, '0')}`;
        const filePath = `blog/${formattedDate}.html`;

        if (await fileExists(filePath)) {
            const link = document.createElement('a');
            link.href = filePath;
            link.textContent = day;
            link.className = "active-link";
            cell.appendChild(link);
        } else {
            cell.textContent = day;
            cell.className = "inactive";
        }

        row.appendChild(cell);

        if ((firstDayOfWeek + day) % 7 === 0) {
            table.appendChild(row);
            row = document.createElement('tr');
        }
    }

    table.appendChild(row);
    calendarContainer.appendChild(table);
}

function changeMonth(offset) {
    currentDate.setMonth(currentDate.getMonth() + offset);
    renderCalendar(currentDate);
}

prevMonthBtn.addEventListener('click', () => changeMonth(-1));
nextMonthBtn.addEventListener('click', () => changeMonth(1));

renderCalendar(currentDate);