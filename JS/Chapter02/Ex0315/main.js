const N = 180;
let i = 0;
let count = 0;

while (i <= 180) {
    if (N % i === 0) {
        console.log(i);
        count++;
    }
    i++
}

console.log(`${N}의 약수는 총 ${count}개입니다.`)