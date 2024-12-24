function solution(code) {
    let ret = '';
    let mode = 0;

    const actions = {
        0: (idx, char) => {
            if (idx % 2 === 0 && char !== '1') {
                ret += char;
            }
        },
        1: (idx, char) => {
            if (idx % 2 === 1 && char !== '1') {
                ret += char;
            }
        }
    };

    for (let i = 0; i < code.length; i++) {
        if (code[i] === '1') {
            mode = 1 - mode;
        } else {
            actions[mode](i, code[i]);
        }
    }

    return ret === '' ? 'EMPTY' : ret;
}
