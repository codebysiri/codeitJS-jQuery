let today = new Date(2112, 8, 24);
let jaeSangStart = new Date(2109, 7, 1);

function workDayCalc(startDate) {
	// 여기에 코드를 작성해 주세요.
    let calculate = (Number(today)/1000/60/60/24 - Number(jaeSangStart)/1000/60/60/24) + 1;
	console.log(`오늘은 입사한 지 ${calculate}일째 되는 날 입니다.`)
}

workDayCalc(jaeSangStart);