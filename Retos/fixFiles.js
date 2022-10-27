function fixFiles(files) {
	if (!Array.isArray(files)) {
		throw new Error('The argument must be an array');
	}
	const numberFiles = {};
	const fixedFiles = [];
	files.forEach((file) => {
		if (typeof file !== 'string') {
			throw new Error('The argument must be an array of strings');
		}
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
