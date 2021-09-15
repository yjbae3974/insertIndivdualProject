function User(name, id) {

}
var user = new User();

function f() {
   alert(user.name);
}


window.onload = function(){
   document.getElementById('info-name').innerHTML = user.name;
}

function user_login() {
    user.name = document.getElementById("name").value;
    user.id = document.getElementById("stdid").value;

    if (user.name && user.id) {
        alert(user.id + " " + user.name + "님 환영합니다.");
        location.assign("./page1.html");
    } else if (user.name && !(user.id)) {
        alert("학번을 입력해주세요.");
    } else if (user.id && !(user.name)) {
        alert("이름을 입력해주세요.");
    } else {
        alert("이름과 학번을 입력해주세요.");
    }
}