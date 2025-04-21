const fs = require('fs');
const path = require('path');

// Path to the JSON file where notes will be stored
const notesPath = path.join(__dirname, 'notes.json');

// Helper function to read all notes
const getNotes = () => {
    try {
        const notesBuffer = fs.readFileSync(notesPath);
        return JSON.parse(notesBuffer.toString());
    } catch (e) {
        return [];
    }
};

// Helper function to save all notes
const saveNotes = (notes) => {
    fs.writeFileSync(notesPath, JSON.stringify(notes));
};

// Add a new note
const addNote = (title, body) => {
    const notes = getNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (duplicateNote) {
        console.log('Note already exists');
        return false;
    }

    notes.push({ title, body });
    saveNotes(notes);
    console.log('Note added successfully');
    return true;
};

// List all notes
const listNotes = () => {
    const notes = getNotes();
    
    if (notes.length === 0) {
        console.log('No notes found');
        return;
    }

    console.log('Your notes:');
    notes.forEach((note, index) => {
        console.log(`${index + 1}. ${note.title}`);
    });
};

// Read a specific note
const readNote = (title) => {
    const notes = getNotes();
    const note = notes.find((note) => note.title === title);

    if (note) {
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log('Note not found');
    }
};

// Remove a note
const removeNote = (title) => {
    const notes = getNotes();
    const filteredNotes = notes.filter((note) => note.title !== title);

    if (notes.length === filteredNotes.length) {
        console.log('Note not found');
        return false;
    }

    saveNotes(filteredNotes);
    console.log('Note removed successfully');
    return true;
};

module.exports = {
    addNote,
    listNotes,
    readNote,
    removeNote
};