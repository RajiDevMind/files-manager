// import fileManager from "./fileManager";

const fileManager = require("./fileManager");
import { resolve } from "path";

const filePath = resolve(__dirname, "test.txt");
const initialContent = "Hello, world!";
const updatedContent = "Hello, universe!";

const runTests = async () => {
  try {
    // Test creating a file
    console.log("Creating file...");
    const createMsg = await fileManager.createFile(filePath, initialContent);
    console.log(createMsg);

    // Test reading the file
    console.log("Reading file...");
    const readData = await fileManager.readFile(filePath);
    console.log("File content:", readData);

    // Test updating the file
    console.log("Updating file...");
    const updateMsg = await fileManager.updateFile(filePath, updatedContent);
    console.log(updateMsg);

    // Test reading the updated file
    console.log("Reading updated file...");
    const updatedData = await fileManager.readFile(filePath);
    console.log("Updated file content:", updatedData);

    // Test deleting the file
    console.log("Deleting file...");
    const deleteMsg = await fileManager.deleteFile(filePath);
    console.log(deleteMsg);
  } catch (error) {
    console.error("Test failed:", error);
  }
};

runTests();
