import {removeNote} from "../services/index.js";

export const removeNoteCommand = {
    command: 'remove',
    describe: 'Remove a notes',
    builder: (yargs) => {
        return yargs
            .option('title', {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            })
    },
    handler(argv) {
        removeNote(argv.title)
    }
}