function fixFiles(files: string[]): string[] {
  const numberFiles: Record<string, number> = {};
  const fixedFiles: string[] = [];
  files.forEach((file) => {
    if (numberFiles.hasOwnProperty(file)) {
      numberFiles[file] += 1;
    } else {
      numberFiles[file] = 1;
    }
    if (numberFiles[file] === 1) {
      fixedFiles.push(file);
    } else {
      fixedFiles.push(`${file}(${numberFiles[file] - 1})`);
    }
  });
  return fixedFiles;
}

export { fixFiles };
