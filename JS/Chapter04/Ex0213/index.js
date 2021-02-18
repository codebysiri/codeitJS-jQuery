const toDoList = document.querySelector('#to-do-list');

function addNewTodo(text) {
    const li = document.createElement("li");
    li.textContent = text;
    toDoList.append(li);
}

// 테스트 코드
addNewTodo('Javascript 공부하기');
addNewTodo('jQuery 공부하기');
addNewTodo('JSP 공부하기');