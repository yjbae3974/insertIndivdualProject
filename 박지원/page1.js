window.onload = function () {

    var name = localStorage.getItem('user_name');
    var id = localStorage.getItem('user_id');
    document.querySelector('.info-name').innerHTML = name; // 왜 All로 바꾸니까 안되지..
    document.querySelector('.popup-name').innerHTML = name;
    document.querySelector('.popup-id').innerHTML = id;

}

const homebtn = document.querySelector(".home-btn");
const menu1 = document.querySelector(".curri");
const menu2 = document.querySelector(".wish");
const menu3 = document.querySelector(".regis");
const menu4 = document.querySelector(".time");

const home = document.querySelector(".home");
const page1 = document.querySelector(".curriculum");
const page2 = document.querySelector(".wishlist");
const page3 = document.querySelector(".course-registeration");
const page4 = document.querySelector(".time-table");

homebtn.addEventListener("click", changetoHome);
menu1.addEventListener("click", changetoCurri);
menu2.addEventListener("click", changetoWish);
menu3.addEventListener("click", changetoRegis);
menu4.addEventListener("click", changetoTime);

function changetoHome() {
    if (home.classList.contains('hidden')) {
        home.classList.remove("hidden");
        page1.classList.add("hidden");
        page2.classList.add("hidden");
        page3.classList.add("hidden");
        page4.classList.add("hidden");
    };
}

function changetoCurri() {
    if (page1.classList.contains('hidden')) {
        page1.classList.remove("hidden");
        home.classList.add("hidden");
        page2.classList.add("hidden");
        page3.classList.add("hidden");
        page4.classList.add("hidden");
    };
}

function changetoWish() {
    if (page2.classList.contains('hidden')) {
        page2.classList.remove("hidden");
        home.classList.add("hidden");
        page1.classList.add("hidden");
        page3.classList.add("hidden");
        page4.classList.add("hidden");
    };
}

function changetoRegis() {
    if (page3.classList.contains('hidden')) {
        page3.classList.remove("hidden");
        home.classList.add("hidden");
        page1.classList.add("hidden");
        page2.classList.add("hidden");
        page4.classList.add("hidden");
    };
}

function changetoTime() {
    if (page4.classList.contains('hidden')) {
        page4.classList.remove("hidden");
        home.classList.add("hidden");
        page1.classList.add("hidden");
        page2.classList.add("hidden");
        page3.classList.add("hidden");
    };
}

const info = document.querySelector(".info-name");
const popup = document.getElementById("popup");

info.addEventListener("click", showInfo)

function showInfo() {
    popup.classList.toggle("hidden");
}

const logout = document.querySelector(".logout");
logout.addEventListener("click", user_logout)

function user_logout() {
    if (confirm("로그아웃 하시겠습니까?")) {
        location.assign("index.html");
    } else {}
}

const newpage = document.querySelector(".newpage");
newpage.addEventListener("click", new_page);

function new_page() {
    var link = 'page2.html';
    var popOption = "top=150, left=300, width=910, height=300, status=no, menubar=no, toolbar=no, resizable=no";
    window.open(link, "showlecture", popOption);
}