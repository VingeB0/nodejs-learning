import {addNote} from "../services/index.js";

export const addNoteCommand = {
    command: 'add',
    describe: 'Add a new note',
    builder: (yargs) => {
        return yargs
            .option('title', {
                describe: 'Note title',
                demandOption: true,
                type: 'string',
            })
            .option('body', {
                describe: 'Note body',
                demandOption: true,
                type: 'string',
            });
    },
    handler(argv) {
        addNote(argv.title, argv.body);
    }
};