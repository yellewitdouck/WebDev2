const setup = () => {
    let btnSub = document.getElementById("btnSub");
    btnSub.addEventListener("click", getSubStsDSFGHJKLMring);
}
const getSubString = () => {
    let input = document.getElementById("input").value;
    let startNmbr = document.getElementById("startNummer").value;
    let eindNmbr = document.getElementById("eindNummer").value;
    let output = document.getElementById("output");
    let resultaatString = input.toString();
    output.innerHTML = resultaatString.substring(startNmbr,eindNmbr);
}
window.addEventListener("load", setup);