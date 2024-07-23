import { describe, it, expect } from "vitest";
import fileManager from "../src/fileManager";
import { promises as fs } from "fs";
import { resolve } from "path";

const testFilePath = resolve(__dirname, "textFile.txt");
const initialContent =
  "Hello World. This is a file created with fileManager npm package";
const updatedContent =
  "Hello Universe. This is the updated content of the file.";

describe("fileManager", () => {
  it("should create a file", async () => {
    const message = await fileManager.createFile(testFilePath, initialContent);
    expect(message).toBe("File created successfully");

    const content = await fs.readFile(testFilePath, "utf8");
    expect(content).toBe(initialContent);
  });

  it("should not create an empty file", async () => {
    await expect(fileManager.createFile(testFilePath)).rejects.toThrow(
      "You can't create an empty file!!!"
    );
  });

  it("should read a file", async () => {
    const content = await fileManager.readFile(testFilePath);
    expect(content).toBe(initialContent);
  });

  it("should update a file", async () => {
    const message = await fileManager.updateFile(testFilePath, updatedContent);
    expect(message).toBe("File updated successfully");

    const content = await fs.readFile(testFilePath, "utf8");
    expect(content).toBe(updatedContent);
  });

  it("should not update a file with empty content", async () => {
    await expect(fileManager.updateFile(testFilePath, "")).rejects.toThrow(
      "You can't update a file with empty content!!!"
    );
  });

  it("should delete a file", async () => {
    const message = await fileManager.deleteFile(testFilePath);
    expect(message).toBe("File deleted successfully");

    await expect(fs.readFile(testFilePath, "utf8")).rejects.toThrow();
  });
});
