//Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline
  
//   if (cmd === 'pwd') process.stdout.write(process.cwd()); // could use __dirname
  let pwdResult = require('./pwd.js');

  if (cmd === 'pwd') pwdResult();
  
  else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});