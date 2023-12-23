import chalk from "chalk";
import {loadNotes} from "./loadNotes.js";
import {saveNotes} from "./saveNotes.js";

export const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No notes found!'))
    }
}