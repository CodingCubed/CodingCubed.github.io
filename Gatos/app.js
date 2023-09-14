function set_app_button_size(px) { document.querySelectorAll(".app-button").forEach((element) => { element.style.height=`${px}px`; }); }
function show_hover_info() { document.querySelector("#hover-info").style.transform="translate(0)"; }
document.querySelectorAll(".app-button").forEach((button) => {
    button.addEventListener("mouseover", () => { document.querySelector("#hover-info").style.transform="translateX(0)"; });
    button.addEventListener("mouseout", () => { document.querySelector("#hover-info").style.transform="translateX(-200%)"; });
});
function set_hover_info(text) { document.querySelector("#hover-info").innerText=text; }
let app_shown="";
function set_app_shown(app_name) {
    document.querySelectorAll(".app").forEach((element) => { element.style.display="none"; });
    document.querySelector(app_name).style.display="block";
    app_shown=app_name;
}
function hide_apps() { document.querySelectorAll(".app").forEach((element) => { element.style.display="none"; }); }
document.querySelectorAll(".app-button").forEach((element) => { element.addEventListener("dblclick", () => { hide_apps(); }); });