import fs from "fs";
import {JSON_FILE_NAME} from "../../../constants.js";

export const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync(JSON_FILE_NAME)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}