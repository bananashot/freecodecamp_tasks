const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i));
const caesars_cipher_move = 13;

const moveArrLeft = arr => arr.push(arr.shift());

const getCipher = difNum => {
    let cipher = alphabet.slice();


    for (let i = 0; i < difNum; i++) {
        moveArrLeft(cipher);
    }

    return cipher;
};

const getCipherString = str => {
    const cipher = getCipher(caesars_cipher_move);    
    let codeStr = '';

    for (let char of str) {

        if (alphabet.indexOf(char) === -1) {
            codeStr += char;
        } else {
            let index = alphabet.indexOf(char);
            codeStr += cipher[index];
        }
        
    };

    console.log(codeStr);
    return codeStr;

};

getCipherString("SERR PBQR PNZC");