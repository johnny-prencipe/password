let input = process.argv.splice(2);
const passwordGen = (inputStr) => {
  let obfuscation = inputStr.join(' ').split('');
for (let i in obfuscation) {
  switch (obfuscation[i]) {
  case 'a': {
    obfuscation[i] = '4';
    break;
  }
  case 'e': {
    obfuscation[i] = '3';
    break;
  }
  case 'o': {
    obfuscation[i] = '0';
    break;
  }
  case 'l': {
    obfuscation[i] = '1';
    break;
  }
  }
}
console.log(obfuscation.join(''));
return obfuscation.join('');
}
const obfuscate = (inputData) => {
  return 'Your obfuscated password is: ' + passwordGen(inputData);
};

console.log(obfuscate(input));