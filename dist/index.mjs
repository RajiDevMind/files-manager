// src/fileManager.ts
import { promises as fs } from "fs";
var fileManager = {
  createFile: async (filePath, content) => {
    try {
      await fs.writeFile(filePath, content);
      return "File created successfully";
    } catch (error) {
      throw new Error(`Failed to create file: ${error.message}`);
    }
  },
  readFile: async (filePath) => {
    try {
      const data = await fs.readFile(filePath, "utf8");
      return data;
    } catch (error) {
      throw new Error(`Failed to read file: ${error.message}`);
    }
  },
  deleteFile: async (filePath) => {
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
