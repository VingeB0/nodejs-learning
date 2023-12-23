## This repository contains folders of different applications that were developed for self-training in various Node.js topics.

# Note Apps
## File System and Commands with Node.js
This is a training application designed to understand the Node.js file system and libraries associated with it. A JSON file is used as a database.
#### npm Packages: yargs, chalk
#### Commands:
* **node src/main.js --help** - Retrieves a list of commands.
* **node src/main.js --version** - Displays the application version.
* **node src/main.js add --title="my title" --body="my body"** - Adds a new note to the list.
* **node src/main.js list** - Displays all note titles.
* **node src/main.js read -title="my title"** - Retrieves a single note.
* **node src/main.js remove -title="my title"** - Removes a specified note.