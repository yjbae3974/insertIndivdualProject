const nav2 = document.querySelector("div.nav2");
const index = document.querySelector("div.index");
const header = document.querySelector("div.header");
const sub = document.querySelector("div.submenu");
const mobile = document.querySelector("div.inactivemobileheader");

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


function turnMobile(){
    if(window.innerWidth<=870){
        console.log("mobile");
        header.className="inactiveheader";
        mobile.className="mobileheader"
    }else if(window.innerWidth>870){
        header.className="header";
        mobile.className="inactivemobileheader"
    }
}
window.addEventListener("resize",turnMobile);
window.addEventListener("load",turnMobile);