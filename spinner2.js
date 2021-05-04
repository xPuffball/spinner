let spinnerString = "|/-\\"

for(let j = 0; j < 25; j++) {
  setTimeout(() => {
  for(let i = 0; i < spinnerString.length; i++) {
    setTimeout(() => process.stdout.write('\r'+spinnerString[i]), i*50)
  }
}, j * 200)
}