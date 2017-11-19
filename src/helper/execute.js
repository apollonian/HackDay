let execSync = require('child_process').execSync;

let absPath = getFilePath();

const getFilePath = (path) => {
    var absolutePath = path.resolve(path);
}

function RunInstruction(instruction) {
    execSync(instruction, {
        cwd: path.join(absPath)
    });
}

module.exports = {
    getFilePath,
    RunInstruction
}