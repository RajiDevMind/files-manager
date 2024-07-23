import { describe, it, expect } from "vitest";
import fileManager from "../src/fileManager";
import { promises as fs } from "fs";
import { resolve } from "path"; // resolve the sequence of path while processing

const testFilePath = resolve(__dirname, "helloWorld.txt");
const testContent =
  "Hello World. This is a file created with fileManager npm package";

describe("fileManager", () => {
  it("should create a file", async () => {
    const message = await fileManager.createFile(testFilePath, testContent);
    expect(message).toBe("File created successfully");

    // Verify the file content
    const content = await fs.readFile(testFilePath, "utf8");
    expect(content).toBe(testContent);

    // Clean up by deleting the test file
    await fs.unlink(testFilePath);
  });

  // Add more tests for readFile, updateFile, and deleteFile
});
