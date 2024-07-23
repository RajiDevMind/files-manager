# Follow this easy steps to use this package

```
npm install crud-file-manager
```

# Then, in your application:

```
import fileManager from 'crud-file-manager';
import { resolve } from 'path'; //

```

```
// NOTE: this filePath can be any file extension such as helloWorld.html or style.css
const filePath = resolve(__dirname, "test.txt");
const content = '<h1>Hello, world!</h1> Your content goes here';
```

- Create a file

  ```fileManager.createFile(filePath, content)
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));
  ```

- Read the file

```
  fileManager.readFile(filePath)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

- Delete the file

```
  fileManager.deleteFile(filePath)
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));
```

import fileManager from 'file-manager';

```
const filePath = './test.txt';
const initialContent = 'Hello, world!';
const updatedContent = 'Hello, universe!';
```

- Create a file

```
  fileManager.createFile(filePath, initialContent)
  .then((msg) => {
  console.log(msg);
```

- Read the file

```
  return fileManager.readFile(filePath);
  })
  .then((data) => {
  console.log('Initial file content:', data);
- Update the file
  return fileManager.updateFile(filePath, updatedContent);
  })
  .then((msg) => {
  console.log(msg);
```

- Read the updated file

```
  return fileManager.readFile(filePath);
  })
  .then((data) => {
  console.log('Updated file content:', data);
```

- Delete the file

```
  return fileManager.deleteFile(filePath);
  })
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));
```
