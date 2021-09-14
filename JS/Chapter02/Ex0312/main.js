function printTriangle(height) {
	// 여기에 코드를 작성해 주세요.
    let star = '';
    for (let i = 0; i < height; i++) {
        star += '*';
        console.log(star);
    }
}

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);