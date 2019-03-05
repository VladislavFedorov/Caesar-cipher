function encryptTheText() {
     
    var valueOfKey = document.getElementById('enKey').value; 
     
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
     
    var specialCharacters = '~\"1234567890-+\=/*!@#$%^&*)(}{|.\,\' "№;:?ÄäÖöÜü \\';
     
    var cipherAlphabet = alphabet.slice(valueOfKey);
        cipherAlphabet += alphabet.slice(0, valueOfKey);
        cipherAlphabet += specialCharacters;
        alphabet += specialCharacters;
     
    var ciphertext = [];
     
    var string = prompt('Enter the text:').toLowerCase();     
     
    for (var i = 0; i < string.length; i++) {
        var letterSequence = alphabet.indexOf(string[i]); 
        ciphertext.push(cipherAlphabet[letterSequence]);
        };
     
    document.getElementById("text").innerHTML = ciphertext.join(''); 
 };  


function decipherTheText() {
    var valueOfKey = document.getElementById('enKey').value; 
     
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
     
    var specialCharacters = '~\"1234567890-+\=/*!@#$%^&*)(}{|.\,"№;:?ÄäÖöÜü \\';
     
    var cipherAlphabet = alphabet.slice(valueOfKey);
        cipherAlphabet += alphabet.slice(0, valueOfKey);
        cipherAlphabet += specialCharacters;
        alphabet += specialCharacters;
     
    var decipheredtext = [];
     
    var string = prompt('Enter the text what you want to translate:').toLowerCase();     
     
    for (var i = 0; i < string.length; i++) {
        var letterSequence = cipherAlphabet.indexOf(string[i]); 
        decipheredtext.push(alphabet[letterSequence]);
        };
     
    document.getElementById("text").innerHTML = decipheredtext.join('');
};