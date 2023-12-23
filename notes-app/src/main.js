import yargs from "yargs";
import {hideBin} from "yargs/helpers";
import {addNoteCommand, listNotesCommand, readNotesCommand, removeNoteCommand} from "./features/notes/commands/index.js";

yargs(hideBin(process.argv))
    .version('1.1.0')
    .command(addNoteCommand)
    .command(listNotesCommand)
    .command(readNotesCommand)
    .command(removeNoteCommand)
    .parse()
