const PASSWORDGENERATOR = () => {

    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';

    const numbers = '0123456789';

    const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?/';
    
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
    
    const passwordLength = 11;

    let generatedPassword = '';
  
    for (let i = 0; i < passwordLength; i++) {

      const randomIndex = Math.floor(Math.random() * allCharacters.length);

      generatedPassword += allCharacters.charAt(randomIndex);

    }
  
    return generatedPassword;

};
  
  export { PASSWORDGENERATOR };
  