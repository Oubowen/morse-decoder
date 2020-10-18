const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let newArr1 = expr.match(/.{1,10}/g);

    let newArr2 = newArr1.map((el) => el.replace(/^0+/, '')
        .replace(/10/gi, '.')
        .replace(/11/gi, '-')
        .replace(/[**********]/gi, '')
    );

    return newArr2.map((el) => {
        if (el === '')
            return ' ';

        for (var prop in MORSE_TABLE) {
            if (el === prop)
                return MORSE_TABLE[prop]

        }
    }).join('');
}

module.exports = {
    decode
}