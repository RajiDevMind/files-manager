declare const fileManager: {
    createFile: (filePath: string, content: string) => Promise<string>;
    readFile: (filePath: string) => Promise<string>;
    deleteFile: (filePath: string) => Promise<string>;
};

export { fileManager as default };
