/**
 * Logs a message to the console.
 * @param {string} message - The message to log.
 * @returns {void}
 * @author Daniel Ongom <https://github.com/Domodan>
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
