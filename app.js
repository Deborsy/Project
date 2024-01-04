//for darkmode button
const btn = document.getElementById("dark-mode")
isDark = false;
btn.addEventListener("click",()=>{
    var container = document.querySelector(".container")
    btn.style.background = "purple";
    btn.style.color = "white";
    container.classList.toggle("dark-mode")
})

