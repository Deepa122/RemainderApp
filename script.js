function addReminder() {
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    const activity = document.getElementById('activity').value;

    if (day && time && activity) {
        const reminder = document.createElement('div');
        reminder.className = 'reminder';
        reminder.innerHTML = `Reminder: ${activity} on ${day} at ${time}`;
        document.getElementById('reminders').appendChild(reminder);

        const reminderTime = new Date();
        const [hour, minute] = time.split(':');
        reminderTime.setHours(hour);
        reminderTime.setMinutes(minute);
        reminderTime.setSeconds(0);

        const now = new Date();
        const timeToReminder = reminderTime.getTime() - now.getTime();

        if (timeToReminder > 0) {
            setTimeout(() => {
                alert(`Reminder: ${activity} on ${day} at ${time}`);
                reminder.remove();
            }, timeToReminder);
        } else {
            alert('The selected time is in the past. Please choose a future time.');
        }
    } else {
        alert('Please fill out all fields.');
    }
}
