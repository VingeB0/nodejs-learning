import chalk from "chalk";
import {loadNotes} from "./loadNotes.js";
import {saveNotes} from "./saveNotes.js";

export const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New notes added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}