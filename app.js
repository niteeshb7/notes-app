const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

yargs.version('My awesome version');

//Setting up commands : Add, remove, read and list

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder:{
        title:{
            describe:'Title for the note',
            demandOption: true,
            type:'string'
        },
        body: {
            describe:'Body for the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => notes.addNote(argv.title, argv.body)
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of note need to be removed',
            demandOption: true,
            type:'string'
        }
    },
    handler: argv => notes.removeNote(argv.title)
});

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: argv => console.log('Reading a note')
});

yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler: () => console.log('Listing all the notes')
});

yargs.parse();

//console.log(yargs.argv);


