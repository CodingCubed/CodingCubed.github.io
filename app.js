let home=document.getElementById("home");
let projects=document.getElementById("projects");
let about=document.getElementById("about");
let picture=document.getElementById("picture");

home.addEventListener("click", () => {
     home.style.backgroundColor="rgb(34, 34, 45)"; home.style.transition=".2s ease;";
     projects.style.backgroundColor="rgb(20, 20, 26)"; projects.style.transition=".2s ease;";
     about.style.backgroundColor="rgb(20, 20, 26)"; about.style.transition=".2s ease";
     picture.style.backgroundColor="rgb(20, 20, 26)"; picture.style.transition=".2s ease";
});
projects.addEventListener("click", () => {
     projects.style.backgroundColor="rgb(34, 34, 45)"; projects.style.transition=".2s ease";
     home.style.backgroundColor="rgb(20, 20, 26)"; home.style.transition=".2s ease;";
     about.style.backgroundColor="rgb(20, 20, 26)"; projects.style.transition=".2s ease";
     picture.style.backgroundColor="rgb(20, 20, 26)"; picture.style.transition=".2s ease";
});
about.addEventListener("click", () => {
     about.style.backgroundColor="rgb(34, 34, 45)"; about.style.transition=".2s ease";
     home.style.backgroundColor="rgb(20, 20, 26)"; home.style.transition=".2s ease";
     projects.style.backgroundColor="rgb(20, 20, 26)"; projects.style.transition=".2s ease";
     picture.style.backgroundColor="rgb(20, 20, 26)"; picture.style.transition=".2s ease";
});
picture.addEventListener("click", () => {
     about.style.backgroundColor="rgb(20, 20, 26)"; about.style.transition=".2s ease";
     home.style.backgroundColor="rgb(20, 20, 26)"; home.style.transition=".2s ease";
     projects.style.backgroundColor="rgb(20, 20, 26)"; projects.style.transition=".2s ease";
     picture.style.backgroundColor="rgb(34, 34, 45)"; picture.style.transition=".2s ease";
});
let tabContent=document.getElementById("tabContent");

document.addEventListener("DOMContentLoaded", () => {
     tabContent.innerHTML=`
          <div class="text-container">
               <h1 style="color: white;">Hey, I'm <span id="cooltext">Jaxson</span></h1>
               <p style="color: rgb(200, 200, 220); font-size: 19px;">I am a 14 year old (self-diagnosed) programmer. I am most familiar with Java, Kotlin, C++, HTML, CSS, React/JS.<p>
          </div>
     `;
     home.style.backgroundColor="rgb(34, 34, 45)";
});

home.addEventListener("click", () => {
     tabContent.innerHTML=`
          <div class="text-container">
               <h1 style="color: white;">Hey, I'm <span id="cooltext">Jaxson</span></h1>
               <p style="color: rgb(200, 200, 220); font-size: 19px;">I am a 14 year old beginner web designer. I know HTML, CSS, JS, Python, PHP, some React, some Java, and some C++<p>
          </div>
     `;
});
projects.addEventListener("click", () => {
     tabContent.innerHTML=`
          <div class="card" id="card1">
               <p id="card1text" style="color: rgb(200, 200, 220);">Java Trivia</p>
          </div>
          <div class="card" id="card2">
               <p id="card2text" style="color: rgb(200, 200, 220);">CSS Utility</p>
          </div>
          <div class="card" id="card3">
               <p id="card3text" style="color: rgb(200, 200, 220);">Portfolio</p>
          </div>
     `;
});
about.addEventListener("click", () => {
     tabContent.innerHTML=`
          <div class="text-container">
               <h1 style="color: white;">About <span id="cooltext">Me</span></h1>
               <p style="color: rgb(200, 200, 220); font-size: 20px;">I started coding when I was only 8. I was block coding. However, this felt bland a simple. So, I opted for text coding. I learned that you can make websites using HTML, CSS, and JS. Over the past year or so, I have been hyper-focused on computer science. Quite recently, I won student of the year in my computer science class. (likely because they are doing learning the Python basics).</p>
          </div>
     `;
});
picture.addEventListener("click", () => {
     tabContent.innerHTML=`
          <div class="image-container">
               <img src="me2.jpg" />
          </div>
     `;
});
