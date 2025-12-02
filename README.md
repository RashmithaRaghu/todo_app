📌 To-Do App

A simple and clean To-Do application built using HTML, CSS, and Vanilla JavaScript.
This app lets users add tasks, mark them as completed, filter tasks, view active item count, and clear completed tasks.

🚀 Features
✔ Add New Tasks

Press Enter to quickly add tasks to the list.

✔ Mark as Completed

Click the checkbox to mark a task as done.
Completed tasks get a strikethrough style.

✔ Filters

Filter tasks by:

All

Active

Completed

✔ Items Left Counter

Shows how many tasks are remaining (not completed).

✔ Clear Completed Tasks

Removes all completed tasks with a single click.

✔ Minimal & Clean UI

The UI is inspired by TodoMVC style.
All functionality added without changing the design.

🛠️ Technologies Used

HTML5

CSS3

JavaScript (Vanilla JS)

No external libraries used.

📂 Folder Structure
/project-folder
│── index.html
│── style.css
│── script.js
└── README.md

🧩 How It Works
1️⃣ Adding a Task

User types a task → presses Enter → task appears in the list.

2️⃣ Completing a Task

Click the checkbox →

adds class .done

applies .completed style

updates items left count

3️⃣ Filtering Tasks

Uses data-filter attributes to show/hide tasks.

4️⃣ Clear Completed

Removes all tasks that contain class .done.

5️⃣ Automatic Count

Every action triggers updateCount() to refresh the item count.
