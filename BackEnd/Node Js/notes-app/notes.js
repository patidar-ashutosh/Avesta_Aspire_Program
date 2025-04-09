const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
    const notes = loadNotes();

    const isDuplicateNotes = notes.find((note) => {
        return note.title === title;
    })

    if(!isDuplicateNotes) {
        notes.push({
            title : title,
            body : body
        })
        saveNotes(notes);
        console.log(chalk.bgGreen("Note Added Successfully..."));
    } else {
        console.log(chalk.bgRed("Note Already Exits!!!"));
    }
}

const removeNote = (title) => {
    const notesData = loadNotes();

    const newNoteArr = notesData.filter((note) => {
        return note.title !== title;
    })

    if(notesData.length === newNoteArr.length) {
        console.log(chalk.bgRed("No note found!"));
    } else {
        console.log(chalk.bgGreen("Note removed!"));
        saveNotes(newNoteArr);
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

const listNotes = () => {
    const notesData = loadNotes();

    console.log(chalk.inverse("Your Notes : "));

    notesData.forEach((note) => {
        console.log(note.title);
    });
}

const readNotes = (title) => {
    const notesData = loadNotes();

    const note = notesData.find((note) => {
        return note.title === title;
    })

    if(note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse("Note not found!"));
    }
}

module.exports = {
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNotes : readNotes
};