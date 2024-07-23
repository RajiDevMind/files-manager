type fileManagerProps = {
    filePath: string;
    content?: string;
};

declare const fileManager: {
    createFile: ({ filePath, content, }: fileManagerProps) => Promise<string>;
    readFile: ({ filePath }: fileManagerProps) => Promise<string>;
    updateFile: ({ filePath, content, }: fileManagerProps) => Promise<string>;
    deleteFile: ({ filePath }: fileManagerProps) => Promise<string>;
};

export { fileManager as default };
