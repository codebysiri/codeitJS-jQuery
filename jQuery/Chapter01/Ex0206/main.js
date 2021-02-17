// 주어진 단어(word)에 특정 알파벳(ch)이 몇 번 들어가는지 세어주는 함수
function countCharacter(word, ch) {
    var count = 0;
    let big = word.toUpperCase();

    for (let k = 0; k < word.length; k++) {
        if (big[k] === ch) {
            count ++
        }
    }
    return count;
}

// 단어 word에 알파벳 'A'가 몇 번 나오는지 세어주는 함수
function countA(word) {
    var count = 0;
    let small  = word.toLowerCase();

    for (let i = 0; i < word.length; i++) {
        if (small[i] === "a") {
            count ++
        }
    }
    return count;
}

// 테스트 코드
console.log(countCharacter('AbaCedEA', 'E'));
console.log(countCharacter('AbaCedEA', 'X'));
console.log(countA('AbaCedEA'));