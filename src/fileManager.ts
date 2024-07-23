// fileManager.ts
import { promises as fs } from "fs";
import * as path from "path";
import { fileManagerProps } from "./types";

const NewFileName = new Date().getMilliseconds();
let fileName = NewFileName + "newFileName";
console.log(fileName);

const fileManager = {
  // createFile: async (filePath: string, content: string): Promise<string> => {
  // fileManagerProps to avoid code conflict, if user want to use the name variable in their code
  createFile: async ({
    filePath,
    content,
  }: fileManagerProps): Promise<string> => {
    if (!filePath) {
      filePath = fileName;
    }
    if (!content) {
      return "Your can`t create an empty file!!!";
    }
    try {
      await fs.writeFile(filePath || fileName, content);
      return "File created successfully";
    } catch (error: any) {
      throw new Error(`Failed to create file: ${error.message}`);
    }
  },

  readFile: async ({ filePath }: fileManagerProps): Promise<string> => {
    if (!filePath) {
      filePath = fileName;
    }
    try {
      const data = await fs.readFile(filePath || fileName, "utf8");
      return data;
    } catch (error: any) {
      throw new Error(`Failed to read file: ${error.message}`);
    }
  },

  updateFile: async ({
    filePath,
    content,
  }: fileManagerProps): Promise<string> => {
    if (!filePath) {
      filePath = fileName;
    }
    if (!content) {
      return "Your can`t Update an empty file!!!";
    }
    try {
      await fs.writeFile(filePath || fileName, content);
      return "File updated successfully";
    } catch (error: any) {
      throw new Error(`Failed to update file: ${error.message}`);
    }
  },

  deleteFile: async ({ filePath }: fileManagerProps): Promise<string> => {
    if (!filePath) {
      return "Invalid file name. Try again!";
    }
    try {
      await fs.unlink(filePath);
      return "File deleted successfully";
    } catch (error: any) {
      throw new Error(`Failed to delete file: ${error.message}`);
    }
  },
};

export default fileManager;
