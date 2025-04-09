const notes = require("./notes.js");
const yargs = require("yargs");

// create add command
yargs.command({
    command : "add", // first we add command name
    describe : "Add a new note", // descripition of command
    builder : { // need a data from arguments when command is run
        title : { // name of option using when we write data in command
            describe : "Note Title", // descripition of option
            demandOption : true, // demandOption means this option is mandatory or not ,by default is false
            type : "string" // data tpye of option value
        },
        body : {
            describe : "Note body",
            demandOption : true,
            type : "string"
        }
    },
    handler(argv) { // a function when command is run
        notes.addNote(argv.title, argv.body);
    }
})

// create remove command
yargs.command({
    command : "remove",
    describe : "Remove a note",
    builder : {
        title : {
            describe : "Note Title",
            demandOption : true,
            type : "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// create list command
yargs.command({
    command : "list",
    describe : "List a notes",
    handler() {
        notes.listNotes();
    }
})

// create read command
yargs.command({
    command : "read",
    describe : "Read a note",
    builder : {
        title : {
            describe : "Note Title",
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

// run all the parse code we write
yargs.parse();