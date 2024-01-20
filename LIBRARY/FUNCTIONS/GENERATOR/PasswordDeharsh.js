const PASSWORDDEHARSH = async (inputPassword, hashedPassword) => {

    if (!inputPassword || typeof inputPassword !== 'string') {

      throw new Error('Invalid input password');

    }
  
    if (!hashedPassword || typeof hashedPassword !== 'string') {

      throw new Error('Invalid hashed password');

    }
  
    const encoder = new TextEncoder();

    const inputData = encoder.encode(inputPassword);

    const hashBuffer = await crypto.subtle.digest('SHA-256', inputData);

    const hashArray = Array.from(new Uint8Array(hashBuffer));

    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
  
    // Compare the hash of the input password with the stored hashed password
    const isValid = hashHex === hashedPassword;
  
    return isValid;

};
  
export { PASSWORDDEHARSH };
  