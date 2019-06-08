const { exec } = require('child_process');
exec('ls', ['-la'], (error, stdout, stderr) => {
  if (error) {
    console.error('exec error: ${error}');
    return;
  } 
  console.log(stdout);
})