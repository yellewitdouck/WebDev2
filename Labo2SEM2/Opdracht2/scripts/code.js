const setup = () => {
    let btnWijzig = document.getElementById("wijzig");
    btnWijzig.addEventListener("click",wijzig);
}
const wijzig = () =>{
    let paragraph = document.getElementById("txtOutput");
    paragraph.innerHTML="Welkom";
}
window.addEventListener("load", setup);
