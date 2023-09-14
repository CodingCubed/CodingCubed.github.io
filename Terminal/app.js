let main=document.querySelector(".main");
let cmd="";
function neofetch() {
    main.innerHTML+=`<p id="neofetch">&nbsp;&nbsp;&nbsp;&nbsp;__&nbsp;_____&nbsp;__&nbsp;__<br>
                        &nbsp;__|&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;|<br>
                        |&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;|-&nbsp;&nbsp;&nbsp;-|<br>
                        |_____|_____|__|__|</p>`;
}
function listen() {
    main.innerHTML+=`<p id="dir"></p>`;
}
neofetch();