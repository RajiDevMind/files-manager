// src/fileManager.ts
import { promises as fs } from "fs";
var NewFileName = (/* @__PURE__ */ new Date()).getMilliseconds();
var fileName = NewFileName + "newFileName";
console.log(fileName);
var fileManager = {
  // createFile: async (filePath: string, content: string): Promise<string> => {
  // fileManagerProps to avoid code conflict, if user want to use the name variable in their code
  createFile: async ({
    filePath,
    content
  }) => {
    if (!filePath) {
      filePath = fileName;
    }
    if (!content) {
      return "Your can`t create an empty file!!!";
    }
    try {
      await fs.writeFile(filePath || fileName, content);
      return "File created successfully";
    } catch (error) {
      throw new Error(`Failed to create file: ${error.message}`);
    }
  },
  readFile: async ({ filePath }) => {
    if (!filePath) {
      filePath = fileName;
    }
    try {
      const data = await fs.readFile(filePath || fileName, "utf8");
      return data;
    } catch (error) {
      throw new Error(`Failed to read file: ${error.message}`);
    }
  },
  updateFile: async ({
    filePath,
    content
  }) => {
    if (!filePath) {
      filePath = fileName;
    }
    if (!content) {
      return "Your can`t Update an empty file!!!";
    }
    try {
      await fs.writeFile(filePath || fileName, content);
      return "File updated successfully";
    } catch (error) {
      throw new Error(`Failed to update file: ${error.message}`);
    }
  },
  deleteFile: async ({ filePath }) => {
    if (!filePath) {
      return "Invalid file name. Try again!";
    }
    try {
      await fs.unlink(filePath);
      return "File deleted successfully";
    } catch (error) {
      throw new Error(`Failed to delete file: ${error.message}`);
    }
  }
};
var fileManager_default = fileManager;

// src/index.ts
var src_default = fileManager_default;
export {
  src_default as default
};
