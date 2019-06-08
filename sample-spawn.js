const { spawn } = require('child_process');
const gitBranch = spawn('ls');

gitBranch.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});