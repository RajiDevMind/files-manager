"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);

// src/fileManager.ts
var import_fs = require("fs");
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
      await import_fs.promises.writeFile(filePath || fileName, content);
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
      const data = await import_fs.promises.readFile(filePath || fileName, "utf8");
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
      await import_fs.promises.writeFile(filePath || fileName, content);
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
      await import_fs.promises.unlink(filePath);
      return "File deleted successfully";
    } catch (error) {
      throw new Error(`Failed to delete file: ${error.message}`);
    }
  }
};
var fileManager_default = fileManager;

// src/index.ts
var src_default = fileManager_default;
