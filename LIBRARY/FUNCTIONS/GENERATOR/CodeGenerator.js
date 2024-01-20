const CODEGENERATOR = (ELEMENT, ELEMENTONE, ELEMENTTWO) => {

    const elements = [ELEMENT, ELEMENTONE, ELEMENTTWO];

    let generatedCode = '';
  
    while (generatedCode.length < 11) {

      const randomElement = elements[Math.floor(Math.random() * elements.length)];
      
      const remainingLength = 11 - generatedCode.length;

      generatedCode += randomElement.slice(0, remainingLength);

    }
  
    return generatedCode;

};
  
export { CODEGENERATOR };
  