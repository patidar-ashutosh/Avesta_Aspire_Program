// first we can install yargs npm package
// npm i yargs

// yargs ka use karke ham apne arguments ko parse karke sakte hai wo bhi ham chahe us formate me.
// Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.
// yargs hame data ko as a object formate me deta hai.

const yargs = require("yargs");


// create add command
yargs.command({
    command : "add", // first we add command name
    describe : "Add a new note", // descripition of command
    builder : { // need a data from arguments when command is run
        title : { // name of option using when we write data in command
            describe : "Note title", // descripition of option
            demandOption : true, // demandOption means this option is mandatory or not ,by default is false
            type : "string" // data tpye of option value
        },
        body : {
            describe : "Note body",
            demandOption : true,
            type : "string"
        }
    },
    handler : function(argv) { // a function when command is run
        console.log("Title : " + argv.title);
        console.log("Body : " + argv.body);
    }
})

// create remove command
yargs.command({
    command : "remove",
    describe : "Remove a note",
    handler : function() {
        console.log("remove command");
    }
})

// create list command
yargs.command({
    command : "list",
    describe : "List a notes",
    handler : function() {
        console.log("list command");
    }
})

// create read command
yargs.command({
    command : "read",
    describe : "Read a note",
    handler : function() {
        console.log("read command");
    }
})

// modified yargs version
yargs.version("1.3.0");

// run all the parse code we write
yargs.parse();

// console.log(yargs.argv);