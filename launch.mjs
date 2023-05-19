import { exec } from "child_process";
import { readdirSync } from 'fs'

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

const list = getDirectories('./').filter(dirName => dirName !== '.git');

list.forEach(name => {
  const run = exec(`cd ${name} && npm start`);

  run.stdout.on('data', function (data) {
    console.log(`\x1b[91m ${name} log (stdout): \x1b[0m \n` + data.toString());
  });
  
  run.stderr.on('data', function (data) {
    console.log(`\x1b[91m ${name} log (stderr): \x1b[0m \n` + data.toString());
  });
  
  run.on('exit', function (code) {
    console.log(`\x1b[91m ${name} log (exit): \x1b[0m \n` + code.toString());
  });
})

