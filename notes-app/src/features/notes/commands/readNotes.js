import {readNotes} from "../services/index.js";

export const readNotesCommand = {
    command: 'read',
    describe: 'Read a notes',
    builder: (yargs) => {
        return yargs
            .option('title', {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            })
    },
    handler(argv) {
        readNotes(argv.title)
    }
}