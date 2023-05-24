import { exec } from 'child_process';
import { readdirSync } from 'fs';

if (process.argv.length !== 3) {
  throw new Error(
    'Nope, only single string command, you passed ',
    process.argv.join(' ,')
  );
}

var command = process.argv[2];

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const list = getDirectories('./').filter(
  (dirName) => !['src', '.git', 'node_modules'].includes(dirName)
);

['', ...list].forEach((name) => {
  const run = exec(`cd ${name} && ${command}`);

  run.stdout.on('data', function (data) {
    console.log(`\x1b[91m ${name} log (stdout): \x1b[0m \n` + data.toString());
  });

  run.stderr.on('data', function (data) {
    console.log(`\x1b[91m ${name} log (stderr): \x1b[0m \n` + data.toString());
  });

  run.on('exit', function (code) {
    console.log(`\x1b[91m ${name} log (exit): \x1b[0m \n` + code.toString());
  });
});
