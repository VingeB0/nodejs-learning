import chalk from "chalk";
import {loadNotes} from "./loadNotes.js";

export const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}