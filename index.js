const fs = require("fs");
const path = require("path");

/**
 * Checks if path exists and is actually a directory, optionally creates the folder whenever investigated
 *
 * @param {String} targetPath Relative or absolute file path
 * @param {Boolean} createOnRun If TRUE, create empty folder if didn't previously exist
 * @returns {Boolean} Whether path existed at time of investigating
 */
function folderExists(targetPath, createOnRun = true) {
  if (!exists(targetPath) && createOnRun) makeFolder(targetPath);
  return exists(targetPath) && isFolder(targetPath);
}

/**
 * Returns Boolean if path exists and it's a valid folder, optionally creates the folder whenever investigated
 *
 * @param {String} targetPath Relative or absolute file path
 * @param {Boolean} createOnRun If TRUE, create empty folder if didn't previously exist
 * @returns {Boolean} Whether path exists
 */
function fileExists(targetPath) {
  return (
    exists(path.resolve(targetPath)) && !isFolder(path.resolve(targetPath))
  );
}

/**
 * Type independent function to check existence of path
 *
 * @param {String} targetPath Relative or absolute file path
 * @returns {Boolean} Whether path exists
 */
function exists(targetPath) {
  return fs.existsSync(path.resolve(targetPath));
}

// @@@ SHOULD BE ASYNC
// This can block the main thread whenever doing a heavy operation
/**
 * Shorter alias of a mkdir function to create a folder at specified path
 *
 * @param {String} targetPath Relative or absolute file path
 * @returns {Boolean} Whether folder creation was successful
 */
function makeFolder(targetPath) {
  return fs.mkdirSync(path.resolve(targetPath));
}

// @@@ SHOULD BE ASYNC
// This can block the main thread whenever doing a heavy operation
//
// @@@ Would be nice to have auto-stringifying of JSON files here
/**
 * Shorter alias of a writeFileSync function to create a file at specified path
 *
 * @param {String} targetPath Relative or absolute file path
 * @param {String|Buffer|URL} data Contents of file
 * @param {Object} options Key/values for encoding, mode, and flag
 * @returns {Boolean} Whether folder creation was successful
 */
function makeFile(targetPath, data, options = null) {
  return fs.writeFileSync(path.resolve(targetPath), data, options);
}

/**
 * Verify a given path string is actually a directory and not a type of file
 *
 * @param {String} targetPath Relative or absolute file path
 * @returns {Boolean} Whether path exists
 */
function isFolder(targetPath) {
  return fs.lstatSync(path.resolve(targetPath)).isDirectory();
}

/**
 * Thenable way to get all the file contents of a folder path
 *
 * @param {String} folderPath Relative or absolute folder path
 * @param {Boolean} verbose If false, only return file content, otherwise return detailed File object
 * @returns {Array} String data of each file contained within
 */
async function readFiles(folderPath, verbose = true) {
  let mapped = [];
  for (const filepath in folderPath) mapped.push(await readFile(filepath));
  return mapped;
}

// @@@ Would be nice to have auto-parsing of JSON files here
/**
 * Thenable way to get a file's contents
 *
 * @param {String} folderPath Relative or absolute folder path
 * @param {Boolean} verbose If false, only return file content, otherwise return detailed File object
 * @returns {Array} String data of each file contained within
 */
async function readFile(targetPath, verbose = true) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(targetPath), "utf-8", (err, data) => {
      if (err) reject(err);
      if (!verbose) resolve(data);
      let temp = {
        data: data,
        stats: fs.lstatSync(path.resolve(targetPath)),
      };
      resolve(temp);
    });
  });
}

/**
 * Returns the children filepaths of each folder Array entry
 *
 * @param {String} folderPath Relative or absolute folder path
 * @param {Boolean} flatten Return as a single Array, otherwise return as Array of separate nested Arrays
 * @returns {Array} Any filepaths contained within a target folderpath entry
 */
async function readDirs(folderPaths, flatten = false) {
  let mapped = [];
  for (const item in folderPaths) mapped.push(await readDir(item, flatten));
  return flatten ? mapped.flat() : mapped;
}

/**
 * Returns the children filepaths of given folder path
 *
 * @param {String} folderPath Relative or absolute folder path
 * @returns {Array} Paths to each child file entry
 */
async function readDir(targetPath) {
  return new Promise((resolve, reject) => {
    if (!exists(targetPath) || !isFolder(targetPath))
      reject("Path is not a folder or does not exist");
    fs.readdir(
      path.resolve(targetPath),
      { encoding: "utf-8" },
      (err, files) => {
        if (err) reject(err);
        resolve(files);
      }
    );
  });
}

// @@@ For future patch to auto-parse or auto-stringify readFile and makeFile funcs
function isJSON(data) {
  let temp = null;
  try {
    temp = JSON.parse(data);
    return true;
  } catch (err) {
    return false;
  }
}

export {
  folderExists,
  fileExists,
  exists,
  makeFolder,
  makeFile,
  isFolder,
  readFiles,
  readFile,
  readDirs,
  readDir,
};
