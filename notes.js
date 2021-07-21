const fs = require('fs');
const chalk = require('chalk');
const fileName = 'notes.json';

const getNotes = () => {
    console.log('Getting notes');
    return loadNotes();
}

const loadNotes = () => {
    try{
        const notesBuffer = fs.readFileSync(fileName);
        return JSON.parse(notesBuffer.toString());
    }catch(error) {
        return [];
    }
}

const saveNotes = notes => fs.writeFileSync(fileName, JSON.stringify(notes));

const addNote = (title, description) => {
    const notes = loadNotes();
    //console.log('Loaded  notes ', notes);
    const duplicate = notes.find(note => note.title === title);
    //console.log('Duplicate notes ', duplicate);
    if(!duplicate){
        notes.push({title, description});
        saveNotes(notes);
        console.log(chalk.bold.green('Note added'));
    } else {
        console.log(chalk.red.bold('Note with same title already exist'));
    }
}

const removeNote = title => {
    const notes = loadNotes();
    const exist = notes.find(note => note.title === title);
    if(exist){
        const remainingNotes = notes.filter(note => note.title !== title);
        saveNotes(remainingNotes);
        console.log(chalk.bold.green('Note removed'));
    } else {
        console.log(chalk.bold.red('Note not found'));
    }
}

module.exports = {getNotes, addNote, removeNote};