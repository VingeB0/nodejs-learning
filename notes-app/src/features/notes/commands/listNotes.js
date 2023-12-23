import {listNotes} from "../services/index.js";

export const listNotesCommand = {
    command: 'list',
    describe: 'List your notes',
    handler() {
        listNotes()
    }
}