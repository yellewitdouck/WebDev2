const setup = () => {
    let btnCopy = document.getElementById("btnCopy");
    btnCopy.addEventListener("click", copy);
}
const copy = () => {
    let input = document.getElementById("txtInput").value;
    let output = input.toString();
    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML = output;
}
window.addEventListener("load", setup);