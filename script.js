// script.js

// Function to initialize the calendar
function initCalendar() {
    // Get current date
    const currentDate = new Date();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    renderCalendar(month, year);
}

// Function to render the calendar
function renderCalendar(month, year) {
    const calendarContainer = document.getElementById('calendar');
    calendarContainer.innerHTML = '';

    // Create header
    const header = document.createElement('div');
    header.className = 'calendar-header';
    header.innerHTML = `<h2>${getMonthName(month)} ${year}</h2>`;
    calendarContainer.appendChild(header);

    // Create days of the week
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const daysRow = document.createElement('div');
    daysRow.className = 'days-row';
    daysOfWeek.forEach(day => {
        const dayCell = document.createElement('div');
        dayCell.className = 'day-cell';
        dayCell.innerText = day;
        daysRow.appendChild(dayCell);
    });
    calendarContainer.appendChild(daysRow);

    // Calculate first day of month and total days
    const firstDay = new Date(year, month, 1);
    const totalDays = new Date(year, month + 1, 0).getDate();

    // Create empty cells for days before first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'empty-cell';
        daysRow.appendChild(emptyCell);
    }

    // Create cells for each day of the month
    for (let day = 1; day <= totalDays; day++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'day-cell';
        dayCell.innerText = day;
        daysRow.appendChild(dayCell);
    }
}

// Helper function to get month name
function getMonthName(monthIndex) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthNames[monthIndex];
}

// Initialize calendar on page load
window.onload = initCalendar;