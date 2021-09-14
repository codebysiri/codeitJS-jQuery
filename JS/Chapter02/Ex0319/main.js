// 여기에 코드를 작성해 주세요.
let current = 1;
let previous = 0;

for (let i = 1; i <= 50; i++) {
    console.log(current);
    let temp = previous;
    previous = current;
    current = current + temp;
}