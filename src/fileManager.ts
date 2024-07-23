import { promises as fs } from "fs";
import * as path from "path";

const fileManager = {
  createFile: async (filePath: string, content: string): Promise<string> => {
    if (!content) {
      throw new Error("You can't create an empty file!!!");
    }
    try {
      await fs.writeFile(filePath, content);
      return "File created successfully";
    } catch (error: any) {
      throw new Error(`Failed to create file: ${error.message}`);
    }
  },

  readFile: async (filePath: string): Promise<string> => {
    try {
      const data = await fs.readFile(filePath, "utf8");
      return data;
    } catch (error: any) {
      throw new Error(`Failed to read file: ${error.message}`);
    }
  },

  updateFile: async (filePath: string, content: string): Promise<string> => {
    if (!content) {
      throw new Error("You can't update a file with empty content!!!");
    }
    try {
      await fs.writeFile(filePath, content);
      return "File updated successfully";
    } catch (error: any) {
      throw new Error(`Failed to update file: ${error.message}`);
    }
  },

  deleteFile: async (filePath: string): Promise<string> => {
    try {
      await fs.unlink(filePath);
      return "File deleted successfully";
    } catch (error: any) {
      throw new Error(`Failed to delete file: ${error.message}`);
    }
  },
};

export default fileManager;
