const path = require("path");
const fs = require("fs").promises
//1.Write a function that logs the current file path and directory
function logFileAndDir() {
  console.log({
    File: __filename,
    Dir: __dirname
  });
}
logFileAndDir();
//2.Write a function that takes a file path and returns its file name
function getFileName(filePath) {
  return path.basename(filePath);
}
console.log(getFileName('D:\\githubpro\\assignment2.js'));

//3.Write a function that builds a path from an object
function buildPath(obj) {
  return path.join(obj.dir, obj.name + obj.ext);
}
console.log(buildPath({ dir: "/githubpro/", name: "assignment2", ext: ".js" }));

//4.Write a function that returns the file extension from a given file path

function getFileExtension(filePath) {
  return path.extname(filePath);
}

console.log(getFileExtension('D:\\githubpro\\assignment2.js'));

//5. Write a function that parses a given path and returns its name and ext

function parseFileNameAndExt(filePath) {
  const parsed = path.parse(filePath);

  return {
    Name: parsed.name,
    Ext: parsed.ext
  };
}
console.log(parseFileNameAndExt('D:\\githubpro\\assignment2.js'));

//6. Write a function that checks whether a given path is absolute

function isAbsolutePath(filePath) {
  return path.isAbsolute(filePath);
}
console.log(isAbsolutePath("/home/user/file.txt"));

//7. Write a function that joins multiple segments 

function joinSegments(...segments) {
  return path.join(...segments);
}
console.log(joinSegments("src", "components", "App.js"));

//8. Write a function that resolves a relative path to an absolute one

function resolveToAbsolute(relativePath) {
  return path.resolve(relativePath);
}
console.log(resolveToAbsolute("./index.js"));

//9. Write a function that joins two paths

function joinTwoPaths(path1, path2) {
  return path.join(path1, path2);
}
console.log(joinTwoPaths("/folder1", "folder2/file.txt"));

//10. Write a function that deletes a file asynchronously
async function deleteFile(filePath) {
  try {
    await fs.unlink(filePath);
    console.log(`The ${filePath.split("/").pop()} is deleted.`);
  } catch (error) {
    console.error("Error deleting file:", error.message);
  }
}
deleteFile('/path/to/file.txt');

//11. Write a function that creates a folder synchronously

function createFolderSync(folderPath) {
  try {
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    console.log("Success");
  } catch (error) {
    console.error("Error creating folder:", error.message);
  }
}
createFolderSync(path.join(__dirname, "newFolder"));

//12. Create an event emitter that listens for a "start" event and logs a welcome message
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("start", () => {
  console.log("Welcome event triggered!");
});

emitter.emit("start");

//13. Emit a custom "login" event with a username parameter

emitter.on("login", (username) => {
  console.log(`User logged in: ${username}`);
});
emitter.emit("login", "Ahmed");

//14. Read a file synchronously and log its contents

function readFileSyncLog(filePath) {
  try {
    const absolutePath = path.resolve(filePath);
    const data = fs.readFileSync(absolutePath, "utf8");
    console.log(`the file content => "${data}"`);
  } catch (error) {
    console.error("Error reading file:", error.message);
  }
}

readFileSyncLog("./notes.txt");

//15. Write asynchronously to a file

async function writeFileAsync(filePath, content) {
  try {
    const absolutePath = path.resolve(filePath);
    await fs.writeFile(absolutePath, content, "utf8");
    console.log(`Content successfully written to ${filePath}`);
  } catch (error) {
    console.error("Error writing file:", error.message);
  }
}
writeFileAsync("./async.txt", "Async save");

//16. Check if a directory exists

function checkDirectoryExists(dirPath) {
  try {
    const absolutePath = path.resolve(dirPath);
    return fs.existsSync(absolutePath) && fs.lstatSync(absolutePath).isDirectory();
  } catch (error) {
    console.error("Error checking directory:", error.message);
    return false;
  }
}
console.log(checkDirectoryExists("./notes.txt")); 

//17. Write a function that returns the OS platform and CPU architecture

const os = require("os");
function getOSInfo() {
  return {
    Platform: os.platform(),
    Arch: os.arch()
  };
}

console.log(getOSInfo());


