let execSync = require('child_process').execSync;
let path = require('path');

let absPath;

const getFilePath = (pathStr) => {
    var absolutePath = path.resolve(pathStr);
    absPath = absolutePath;
}

function RunInstruction(instruction) {
    execSync(instruction, {
        cwd: path.join(absPath)
    });
}

function gitClone(pathStr) {
    var instruction = 'git clone ' + pathStr + '.git'
    try{
        execSync(instruction, {
        cwd: path.join(absPath)
    });
    }catch(err){
        console.log(err);
    }
    getDirectory(pathStr);
}

function getDirectory(url) {
    let urls = url.split('/')
    let dir = urls[urls.length-1]
    console.log(dir);
    getFilePath(absPath+"\\"+dir)
    // console.log(absPath); 
}

module.exports = {
    getFilePath,
    RunInstruction,
    gitClone,
    getDirectory
}