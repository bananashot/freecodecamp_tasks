function convertToRoman(num) {
    let result = '';

    const romanNumerals = {
      1000: 'M',
      900: 'CM',
      500: 'D',
      400: 'CD',
      100: 'C',  
      90: 'XC',
      50: 'L',
      40: 'XL',
      10: 'X',
      9: 'IX',
      5: 'V',
      4: 'IV',
      1: 'I'
    };

    const entries = Object.entries(romanNumerals).reverse();

    for (const [number, rNumber] of entries) {
        if (num >= number) {
            let currentNum = num;
            let multipier = ~~(currentNum / number);
            num = num % number;
            result += rNumber.repeat(multipier);
        }
    }
    
    return result;
  }
  
  convertToRoman(3999);