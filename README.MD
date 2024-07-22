# Follow this easy steps to use this package

npm install file-manager

# Then, in your Node.js application:

import fileManager from 'file-manager';

const filePath = './test.txt'; // NOTE: this filePath can be any file extension such helloWorld.html or style.css
const content = 'Hello, world!';

// Create a file
fileManager.createFile(filePath, content)
.then((msg) => console.log(msg))
.catch((err) => console.error(err));

// Read the file
fileManager.readFile(filePath)
.then((data) => console.log(data))
.catch((err) => console.error(err));

// Delete the file
fileManager.deleteFile(filePath)
.then((msg) => console.log(msg))
.catch((err) => console.error(err));
