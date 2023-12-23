import fs from "fs";
import {JSON_FILE_NAME} from "../../../constants.js";

export const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync(JSON_FILE_NAME, dataJSON)
}