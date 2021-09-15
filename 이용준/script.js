const nav2 = document.querySelector("div.nav2");
const index = document.querySelector("div.index");
const header = document.querySelector("div.header");
const sub = document.querySelector("div.submenu");
const mobile = document.querySelector("div.inactivemobileheader");
const sidebar = document.querySelector("div.inactivesidebar");
const main = document.querySelector("div.main");

function handleMenuMouseenter(){
    console.log("mouseon");
    header.className="activeheader";
    nav2.className="activenav2";
    sub.className="activesubmenu"
}
function handleMenuMouseleave(){
    console.log("mouseoff");
    header.className="header";
    nav2.className="nav2";
    sub.className="submenu";
}
index.addEventListener("mouseenter",handleMenuMouseenter);
nav2.addEventListener("mouseleave",handleMenuMouseleave);

function opensidebar(){
    sidebar.className="activesidebar";
}
function closesidebar(){
    sidebar.className="inactivesidebar";
}
function turnMobile(){
    if(window.innerWidth<=890){
        console.log("mobile");
        header.className="inactiveheader";
        mobile.className="mobileheader";
        main.className="mobilemain";
    }else if(window.innerWidth>890){
        header.className="header";
        mobile.className="inactivemobileheader";
        sidebar.className="inactivesidebar";
        main.className="main";
    }
}
window.addEventListener("resize",turnMobile);
window.addEventListener("load",turnMobile);