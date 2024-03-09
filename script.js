document.addEventListener('DOMContentLoaded', function () {
    const noteTitleInput = document.getElementById('note-title');
    const noteContentInput = document.getElementById('note-content');
    const noteCategorySelect = document.getElementById('note-category');
    const addNoteBtn = document.getElementById('add-note-btn');
    const notesList = document.getElementById('notes-list');

    // Function to add a new note
    function addNote() {
        const title = noteTitleInput.value.trim();
        const content = noteContentInput.value.trim();
        const category = noteCategorySelect.value;

        if (title === '' || content === '') {
            alert('Please enter both title and content for the note.');
            return;
        }

        const note = document.createElement('div');
        note.classList.add('note');
        note.innerHTML = `
            <h3 class="note-title">${title}</h3>
            <p>${content}</p>
            <p class="note-category">Category: ${category}</p>
        `;
        notesList.appendChild(note);

        // Clear input fields after adding the note
        noteTitleInput.value = '';
        noteContentInput.value = '';
    }

    // Event listener for add note button
    addNoteBtn.addEventListener('click', addNote);
});
