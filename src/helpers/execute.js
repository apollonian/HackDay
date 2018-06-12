import * as child from 'child_process';
import { resolve, join } from 'path';

// TODO:
// Debug process spawning, execSync not working currently

let absPath;

const getFilePath = (pathStr) => {
    var absolutePath = resolve(pathStr);
    absPath = absolutePath;
}

function RunInstruction(instruction) {
    child.execSync(instruction, {
        cwd: join(absPath)
    });
}

function gitClone(pathStr) {
    var instruction = 'git clone ' + pathStr + '.git'
    try {
        child.execSync(instruction, {
            cwd: join(absPath)
        });
    } catch (err) {
        console.log('Error', err);
    }
    getDirectory(pathStr);
}

function getDirectory(url) {
    let urls = url.split('/')
    let dir = urls[urls.length - 1]
    // console.log(dir);
    getFilePath(absPath + "\\" + dir)
    // console.log(absPath); 
}

export default {
    getFilePath,
    RunInstruction,
    gitClone,
    getDirectory
}
