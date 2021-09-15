const login = document.querySelector(".log-btn");

function user_login() {
    var user_name = document.getElementById("name").value;
    var user_id = document.getElementById("stdid").value;

    localStorage.setItem('user_name',user_name);
    localStorage.setItem('user_id',user_id);

    if (user_name && user_id) {
        alert(user_id + " " + user_name + "님 환영합니다.");
        location.assign("page1.html");
    } else if (user_name && !(user_id)) {
        alert("학번을 입력해주세요.");
    } else if (user_id && !(user_name)) {
        alert("이름을 입력해주세요.");
    } else {
        alert("이름과 학번을 입력해주세요.");
    }
}

login.addEventListener("click", user_login);